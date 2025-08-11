<template>
  <Head title="Corregir canino" />

  <AuthenticatedLayout>
    <template #header> Corregir registro canino {{ canino.nombre }} </template>

    <div class="max-w-2xl mx-auto bg-white border shadow-sm rounded-xl mt-8">
      <div
        class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 flex justify-between items-center"
      >
        <h3 class="text-gray-500">
          Corregir registro canino {{ canino.nombre }}
        </h3>
        <SecondaryLink :href="route('caninos.index')"> Regresar </SecondaryLink>
      </div>
      <div class="p-4 md:p-5">
        <form
          @submit.prevent="submit"
          enctype="multipart/form-data"
          class="grid gap-4"
        >



          <!-- FOTO DEL CANINO -->
          <div class="sm:col-span-2">
            <InputLabel for="foto_url" value="Foto del canino" />

            <!-- Vista previa de la imagen actual -->
            <div v-if="!cambiarFoto" class="flex flex-col gap-2">
              <img
                :src="getFoto(props.canino.foto_url)"
                alt="Foto actual"
                class="w-full h-44 border rounded object-contain"
              />
              <button
                type="button"
                class="text-base text-blue-600 hover:underline"
                @click="cambiarFoto = true"
              >
                Cambiar foto
              </button>
            </div>

            <!-- Campo para cambiar la imagen -->
            <div v-else>
              <TextInput
                id="foto_url"
                type="file"
                class="mt-1 block w-full"
                accept="image/*"
                @change="onFileChange"
              />
              <InputError class="mt-2" :message="form.errors.foto_url" />
              <div v-if="fotoPreview" class="mt-2">
                <img
                  :src="fotoPreview"
                  alt="Vista previa"
                  class="h-24 border rounded"
                />
              </div>
              <button
                type="button"
                class="text-sm text-gray-500 hover:underline mt-1"
                @click="cancelarCambio('foto')"
              >
                Cancelar
              </button>
            </div>
          </div>

          <!-- VACUNAS -->
          <div class="sm:col-span-2">
            <InputLabel for="vacunas" value="Vacunas (PDF)" />

            <!-- Mostrar archivo actual -->
            <div v-if="!cambiarVacunas" class="flex items-center gap-2">
              <button class="text-blue-600 hover:underline text-base"
              type="button"
              @click="verPdf('vacunas')"
              >
                Ver archivo actual
              </button>
              <button
                type="button"
                class="text-base text-blue-600 hover:underline"
                @click="cambiarVacunas = true"
              >
                Cambiar PDF
              </button>
            </div>

            <!-- Campo para cambiar el PDF -->
            <div v-else>
              <TextInput
                id="vacunas"
                type="file"
                class="mt-1 block w-full"
                accept="application/pdf"
                @change="onVacunasChange"
              />
              <InputError class="mt-2" :message="form.errors.vacunas" />
              <button
                type="button"
                class="text-sm text-gray-500 hover:underline mt-1"
                @click="cancelarCambio('vacunas')"
              >
                Cancelar
              </button>
            </div>
          </div>
          <!-- POLIZA -->
          <div class="sm:col-span-2">
            <InputLabel for="poliza" value="Póliza de responsabilidad civil extracontractual vigente (pdf)" />

            <!-- Mostrar archivo actual -->
            <div v-if="!cambiarPoliza" class="flex items-center gap-2">
              <button class="text-blue-600 hover:underline text-base" v-if="canino.poliza != 'NA'"
              type="button"
              @click="verPdf('poliza')"
              >
                Ver archivo actual
              </button>
              <button
                type="button"
                class="text-base text-blue-600 hover:underline"
                @click="cambiarPoliza = true"
              >
                {{ canino.poliza == 'NA' ? 'Cargar PDF' : 'Cambiar PDF' }}
              </button>
            </div>


            <!-- Campo para cambiar el PDF -->
            <div v-else>
              <TextInput
                id="poliza"
                type="file"
                class="mt-1 block w-full"
                accept="application/pdf"
                @change="onPolizaChange"
              />
              <InputError class="mt-2" :message="form.errors.poliza" />
              <button
                type="button"
                class="text-sm text-gray-500 hover:underline mt-1"
                @click="cancelarCambio('poliza')"
              >
                Cancelar
              </button>
            </div>
          </div>
          <!-- CERTIFICADO SANIDAD -->
          <div class="sm:col-span-2">
            <InputLabel for="certificado_sanidad" value="Póliza de responsabilidad civil extracontractual vigente (pdf)" />

            <!-- Mostrar archivo actual -->
            <div v-if="!cambiarSanidad" class="flex items-center gap-2">
              <button class="text-blue-600 hover:underline text-base" v-if="canino.certificado_sanidad != 'NA'"
              type="button"
              @click="verPdf('certificado_sanidad')"
              >
                Ver archivo actual
              </button>
              <button
                type="button"
                class="text-base text-blue-600 hover:underline"
                @click="cambiarSanidad = true"
              >
                {{ canino.certificado_sanidad == 'NA' ? 'Cargar PDF' : 'Cambiar PDF' }}
              </button>
            </div>


            <!-- Campo para cambiar el PDF -->
            <div v-else>
              <TextInput
                id="certificado_sanidad"
                type="file"
                class="mt-1 block w-full"
                accept="application/pdf"
                @change="onSanidadChange"
              />
              <InputError class="mt-2" :message="form.errors.certificado_sanidad" />
              <button
                type="button"
                class="text-sm text-gray-500 hover:underline mt-1"
                @click="cancelarCambio('certificado_sanidad')"
              >
                Cancelar
              </button>
            </div>
          </div>

          <div class="mt-4 flex flex-col items-end lg:col-span-2">
            <PrimaryButton
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
            >
              Corregir Canino
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal PDF -->
    <div
      v-if="showPdf"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 h-[80vh] flex flex-col"
      >
        <div class="flex justify-between items-center p-4 border-b">
          <h2 class="text-lg font-bold text-gray-800">
            {{ pdfTitle }}
          </h2>
          <button class="text-gray-500 hover:text-gray-800" @click="closePdf">
            ✕
          </button>
        </div>
        <div class="flex-1 overflow-auto">
          <iframe
            v-if="pdfUrl"
            :src="pdfUrl"
            class="w-full h-full"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import Select from "primevue/select";
import Razas from "@/shared/razas.json"; // Importa el JSON
import TextInput from "@/Components/TextInput.vue";
import { Head, useForm, usePage } from "@inertiajs/vue3";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import { ref, computed, inject, watch } from "vue";
import { QuestionMarkCircleIcon } from "@heroicons/vue/24/solid";

const Swal = inject("$swal");

const props = defineProps({
  canino: {
    type: Object,
    default: () => [],
  },
});

const fotoPreview = ref(null);

//pdf
const showPdf = ref(false);
const pdfUrl = ref("");
const pdfTitle = ref("");



const form = useForm({
  canino_id: props.canino.id,
  foto_url: null,
  vacunas: null,
  poliza: null,
  certificado_sanidad: null,
});

const cambiarFoto = ref(false);
const cambiarVacunas = ref(false);
const cambiarPoliza = ref(false);
const cambiarSanidad = ref(false);

const getFoto = (url) => `/storage/uploads/caninos/${url}`;

const verPdf = (tipo) => {
  if (tipo === "vacunas") {
    pdfUrl.value = `/storage/uploads/vacunas/${props.canino.vacunas}`;
    pdfTitle.value = "Carnet de Vacunación";
  } else if (tipo === "poliza") {
    pdfUrl.value = `/storage/uploads/poliza/${props.canino.poliza}`;
    pdfTitle.value = "Póliza";
  } else if (tipo === "certificado_sanidad") {
    pdfUrl.value = `/storage/uploads/certificado_sanidad/${props.canino.certificado_sanidad}`;
    pdfTitle.value = "Certificado sanidad";
  }
  showPdf.value = true;
};

const closePdf = () => {
  showPdf.value = false;
  pdfUrl.value = "";
  pdfTitle.value = "";
};

const cancelarCambio = (tipo) => {
  if (tipo === "foto") {
    cambiarFoto.value = false;
    fotoPreview.value = null;
    form.foto_url = null;
  }
  if (tipo === "vacunas") {
    cambiarVacunas.value = false;
    form.vacunas = null;
  }
  if (tipo === "poliza") {
    cambiarPoliza.value = false;
    form.poliza = null;
  }
  if (tipo === "certificado_sanidad") {
    cambiarSanidad.value = false;
    form.certificado_sanidad = null;
  }
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  form.foto_url = file;
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      fotoPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    fotoPreview.value = null;
  }
};

const onVacunasChange = (e) => {
  form.vacunas = e.target.files[0];
};
const onPolizaChange = (e) => {
  form.poliza = e.target.files[0];
};
const onSanidadChange = (e) => {
  form.certificado_sanidad = e.target.files[0];
};



const submit = () => {


  form.post(route("corregirDatos"), {
    forceFormData: true,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "¡Canino corregido!",
        text: "El registro del canino fue corregido y se ha enviado la solicitud para revisión.",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = route("caninos.index");
      });
      form.reset();
      fotoPreview.value = null;
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al registrar la corrección del canino. Por favor revisa los campos e inténtalo de nuevo.",
        confirmButtonText: "OK",
      });
    },
  });
};


</script>
