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
        <SecondaryButton @click="goBack"> Regresar </SecondaryButton>
      </div>
      <div class="p-4 md:p-5">
        <form
          @submit.prevent="submit"
          enctype="multipart/form-data"
          class="grid gap-4"
        >
          <!-- Nombre -->
          <div>
            <InputLabel for="nombre" value="Nombre del canino" />
            <TextInput
              id="nombre"
              type="text"
              class="mt-1 block w-full"
              v-model="form.nombre"
              required
            />
            <InputError class="mt-2" :message="form.errors.nombre" />
          </div>

          <!-- Tiene agresiones -->
          <div>
            <InputLabel for="tiene_agresiones" value="¿Ha tenido agresiones?" />
            <select
              id="tiene_agresiones"
              v-model="form.tiene_agresiones"
              class="mt-1 block w-full border rounded"
            >
              <option value="No">No</option>
              <option value="Si">Sí</option>
            </select>
            <InputError class="mt-2" :message="form.errors.tiene_agresiones" />
          </div>
          <!-- Entrenado ataque -->
          <div>
            <InputLabel
              for="entrenado_ataque"
              value="¿Entrenado para ataque?"
            />
            <select
              id="entrenado_ataque"
              v-model="form.entrenado_ataque"
              class="mt-1 block w-full border rounded"
            >
              <option value="No">No</option>
              <option value="Si">Sí</option>
            </select>
            <InputError class="mt-2" :message="form.errors.entrenado_ataque" />
          </div>
          <!-- Entrenado protección -->
          <div>
            <InputLabel
              for="entrenado_proteccion"
              value="¿Entrenado para protección?"
            />
            <select
              id="entrenado_proteccion"
              v-model="form.entrenado_proteccion"
              class="mt-1 block w-full border rounded"
            >
              <option value="No">No</option>
              <option value="Si">Sí</option>
            </select>
            <InputError
              class="mt-2"
              :message="form.errors.entrenado_proteccion"
            />
          </div>
          <!-- Esterilizado -->
          <div>
            <InputLabel for="esterilizado" value="¿Esterilizado?" />
            <select
              id="esterilizado"
              v-model="form.esterilizado"
              class="mt-1 block w-full border rounded"
            >
              <option value="No">No</option>
              <option value="Si">Sí</option>
            </select>
            <InputError class="mt-2" :message="form.errors.esterilizado" />
          </div>
          <!-- Raza -->
          <div>
            <div class="flex items-center gap-2">
              <InputLabel class="sm:text-sm text-xs" for="raza" value="Raza*" />
              <!-- Icono de ayuda con tooltip -->
              <div class="relative group">
                <QuestionMarkCircleIcon
                  class="w-5 h-5 text-blue-500"
                  v-tooltip.bottom="
                    'Seleccione la raza de su canino. Si no está en la lista, elija la opción más cercana. Si no está seguro, seleccione la opción Criollo.'
                  "
                />
              </div>
            </div>
            <Select
              id="raza"
              v-model="form.raza"
              :options="razasVisibles"
              filter
              optionLabel="label"
              placeholder="Seleccione una raza"
              checkmark
              :highlightOnSelect="false"
              class="w-full"
            />
            <InputError class="mt-2" :message="form.errors.raza" />
          </div>

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
              <button
                class="text-blue-600 hover:underline text-base"
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
            <InputLabel
              for="poliza"
              value="Póliza de responsabilidad civil extracontractual vigente (pdf)"
            />

            <!-- Mostrar archivo actual -->
            <div v-if="!cambiarPoliza" class="flex items-center gap-2">
              <button
                class="text-blue-600 hover:underline text-base"
                v-if="canino.poliza != 'NA'"
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
                {{ canino.poliza == "NA" ? "Cargar PDF" : "Cambiar PDF" }}
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
import { ref, computed, inject, watch, onMounted } from "vue";
import { QuestionMarkCircleIcon } from "@heroicons/vue/24/solid";
import SecondaryButton from "@/Components/SecondaryButton.vue";

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

//es peligroso segun ataques o entrenamiento
const esPeligroso = ref(false);
const razasPeligrosasIds = [
  16, 17, 86, 87, 121, 122, 123, 124, 136, 200, 201, 202, 203, 204, 263, 278,
  290, 350, 376,
];
const razasVisibles = ref([]); // lista que se mostrará en el select

const form = useForm({
  canino_id: props.canino.id,
  nombre: props.canino.nombre,
  es_peligroso: props.canino.es_peligroso,
  tiene_agresiones: props.canino.tiene_agresiones,
  entrenado_ataque: props.canino.entrenado_ataque,
  entrenado_proteccion: props.canino.entrenado_proteccion,
  esterilizado: props.canino.esterilizado,
  raza: "",
  foto_url: null,
  vacunas: null,
  poliza: null,
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

// Observa el cambio en la si es peligroso
watch(
  [
    () => form.tiene_agresiones,
    () => form.entrenado_ataque,
    () => form.entrenado_proteccion,
  ],
  ([agresiones, ataque, proteccion]) => {
    const algunoEsSi = [agresiones, ataque, proteccion].includes("Si");
    const todosSonNoOVacio = [agresiones, ataque, proteccion].every(
      (v) => v === "No" || v === ""
    );

    if (algunoEsSi) {
      if (!esPeligroso.value) {
        esPeligroso.value = true;
        razasVisibles.value = obtenerTodasRazas(); // Muestra todas las razas
      }
    }

    if (todosSonNoOVacio) {
      esPeligroso.value = false;
      razasVisibles.value = obtenerRazasPeligrosas(); // Vuelve a mostrar solo peligrosas
    }
  }
);

const obtenerRazasPeligrosas = () => {
  return Razas.filter((raza) => razasPeligrosasIds.includes(raza.id));
};

const obtenerTodasRazas = () => {
  return Razas;
};

//get raza array segun label
const getRaza = (razaName) => {
  console.log(Razas.filter((raza) => raza.label == razaName));

  return Razas.filter((raza) => raza.label == razaName);
};

// Inicializa solo con las razas peligrosas
razasVisibles.value = obtenerRazasPeligrosas();

const submit = () => {
  let esPeligrosa =
    form.tiene_agresiones == "Si" ||
    form.entrenado_ataque == "Si" ||
    form.entrenado_proteccion == "Si";

  if (esPeligrosa) {
    form.es_peligroso = "Si";
  } else {
    form.es_peligroso = "No";
  }

  form.raza = form.raza.label ?? form.raza;

  form.post(route("corregirDatos"), {
    forceFormData: true,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "¡Canino corregido!",
        text: "El registro del canino fue corregido y se ha enviado la solicitud para revisión.",
        confirmButtonText: "OK",
      }).then(() => {
        if (usePage().props.auth.user.roles[0].name.includes("Usuario")) {
          window.location.href = route("dashboard");
        } else {
          window.location.href = route("caninos.index");
        }
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

onMounted(() => {
  if (props.canino.raza) {
    form.raza = getRaza(props.canino.raza)[0];

    razasVisibles.value.push(form.raza);
  }
});

function goBack() {
  window.history.back();
}
</script>
