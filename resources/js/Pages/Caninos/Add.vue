<template>
  <Head title="Agregar canino" />

  <AuthenticatedLayout>
    <template #header> Nuevo canino </template>

    <div class="max-w-2xl mx-auto bg-white border shadow-sm rounded-xl mt-8">
      <div
        class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 flex justify-between items-center"
      >
        <h3 class="text-gray-500">Nuevo canino</h3>
        <SecondaryButton
          @click="goBack"
        >
          Regresar
        </SecondaryButton>

      </div>
      <div class="p-4 md:p-5">
        <form
          @submit.prevent="submit"
          enctype="multipart/form-data"
          class="grid gap-4"
        >
          <!-- Usuario -->
          <div
            v-if="
              $page.props.auth.user.roles[0].name.includes('Administrador') ||
              $page.props.auth.user.roles[0].name.includes('Supervisor')
            "
          >
            <InputLabel for="user_id" value="Usuario" />
            <Select
              id="user_id"
              v-model="form.user_id"
              :options="users"
              filter
              optionLabel="name"
              placeholder="Asignar a un usuario"
              checkmark
              :highlightOnSelect="false"
              class="w-full"
            />

            <InputError class="mt-2" :message="form.errors.user_id" />
          </div>
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
          <!-- Sexo -->
          <div>
            <InputLabel for="sexo" value="Sexo" />
            <select
              id="sexo"
              v-model="form.sexo"
              class="mt-1 block w-full border rounded"
            >
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
            <InputError class="mt-2" :message="form.errors.sexo" />
          </div>
          <!-- fecha nacimiento y edad -->
          <div class="flex flex-wrap gap-2 col-span-2">
            <!-- fecha de nacimiento -->
            <div class="mb-4 sm:w-4/6">
              <InputLabel
                class="sm:text-sm text-xs"
                for="fecha_nacimiento"
                value="Fecha de nacimiento*"
              />
              <TextInput
                id="fecha_nacimiento"
                type="date"
                class="mt-1 block w-full p-0 sm:p-2"
                v-model="form.fecha_nacimiento"
                required
                autocomplete="fecha_nacimiento"
                :max="hoy"
              />
              <InputError
                class="mt-1"
                :message="form.errors.fecha_nacimiento"
              />
            </div>
            <!-- edad canino -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="edad_canino"
                value="Edad del canino*"
              />
              <div
                class="block bg-gray-200/80 border-gray-400 mt-1 w-full rounded-md form-input focus:border-sky-600 p-0 sm:p-2"
              >
                {{ form.edad_canino == 0 ? "Cachorro" : form.edad_canino }}
              </div>
            </div>
          </div>

          <!-- Características -->
          <div>
            <InputLabel for="caracteristicas" value="Características" />
            <TextInput
              id="caracteristicas"
              type="text"
              class="mt-1 block w-full"
              v-model="form.caracteristicas"
            />
            <InputError class="mt-2" :message="form.errors.caracteristicas" />
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
          <!-- Observaciones -->
          <div class="lg:col-span-2">
            <InputLabel for="observaciones" value="Observaciones" />
            <textarea
              id="observaciones"
              class="mt-1 block w-full border rounded"
              v-model="form.observaciones"
            ></textarea>
            <InputError class="mt-2" :message="form.errors.observaciones" />
          </div>

          <!-- imagen -->
          <div class="sm:col-span-2">
            <InputLabel
              class="sm:text-sm text-xs"
              for="foto_url"
              value="Foto del canino"
            />

            <div class="flex flex-col gap-2">
              <!-- Apartado de ayuda -->
              <div
                class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md"
              >
                <p class="text-xs sm:text-sm text-blue-800 font-medium">
                  📸 Recomendación: La foto debe ser tomada de frente y el
                  canino debe ser claramente visible.
                </p>
                <div class="sm:flex items-center gap-3 mt-2">
                  <!-- imagen ejemplo -->
                  <div class="mb-4">
                    <p class="sm:text-base text-xs text-gray-600">
                      ejemplo foto de canino pastor alemán.
                    </p>
                    <img
                      :src="ejemploFoto"
                      alt="ejemplo foto canino"
                      class="sm:w-36 w-24 rounded-md border filter grayscale hover:grayscale-0 transition"
                    />
                  </div>
                  <!-- texto y input -->
                  <div class="mb-4">
                    <p class="sm:text-base text-xs text-gray-600">
                      Cargue o subida de foto del canino (formato jpg, png o
                      jpeg)
                    </p>
                    <div class="h-full">
                      <!-- Input para cargar la imagen -->
                      <TextInput
                        id="foto_url"
                        type="file"
                        class="mt-1 sm:h-36 block w-full p-0 sm:p-2"
                        @change="onFileChange"
                        accept="image/*"
                      />
                      <InputError
                        class="mt-1"
                        :message="form.errors.foto_url"
                      />

                      <!-- Vista previa de la imagen -->
                      <div v-if="fotoPreview" class="relative mt-2">
                        <img
                          :src="fotoPreview"
                          alt="Vista previa de la imagen"
                          class="w-40 h-40 object-contain rounded-md border"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Vacunas -->
          <div class="sm:col-span-2">
            <InputLabel for="vacunas" value="Vacunas (PDF)" />
            <TextInput
              id="vacunas"
              type="file"
              class="mt-1 block w-full"
              accept="application/pdf"
              @change="onVacunasChange"
            />
            <InputError class="mt-2" :message="form.errors.vacunas" />
          </div>
          <!-- Póliza -->
          <div class="sm:col-span-2">
            <div class="flex items-center gap-2">
              <InputLabel
                class="sm:text-sm text-xs"
                for="poliza"
                value="Póliza de responsabilidad civil extracontractual vigente (pdf)"
              />
              <!-- Icono de ayuda con tooltip -->
              <div class="relative group">
                <QuestionMarkCircleIcon
                  class="w-5 h-5 text-blue-500"
                  v-tooltip.bottom="
                    'Aunque no es obligatoria, se recomienda subirla. Cubre daños o lesiones causados por el canino. El sistema no se hace responsable si no se adjunta.'
                  "
                />
              </div>
            </div>
            <TextInput
              id="poliza"
              type="file"
              class="mt-1 block w-full"
              accept="application/pdf"
              @change="onPolizaChange"
            />
            <InputError class="mt-2" :message="form.errors.poliza" />
          </div>
          <!-- declaración juramentada -->
          <div class="mb-4 col-span-2">
            <input
              type="checkbox"
              id="consentimiento2"
              name="consentimiento2"
              required
              v-model="form.declaracion"
            />
            <label
              for="consentimiento2"
              class="ps-4 pe-12 sm:text-base text-sm text-gray-500"
              >Declaro bajo la gravedad de juramento que toda la información
              suministrada en este formulario es verídica, completa y
              corresponde a la realidad. Entiendo que proporcionar información
              falsa puede acarrear sanciones legales conforme a la normativa
              vigente.</label
            >
            <InputError class="mt-1" :message="form.errors.declaracion" />
          </div>
          <div class="mt-4 flex flex-col items-end lg:col-span-2">
            <PrimaryButton
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
            >
              Registrar Canino
            </PrimaryButton>
          </div>
        </form>
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
import ejemploFoto from "../../../../public/assets/img/ejemplo_foto.jpeg";
import SecondaryButton from "@/Components/SecondaryButton.vue";

const Swal = inject("$swal");

const props = defineProps({
  users: {
    type: Array,
    default: () => [],
  },
});

const users = computed(() => props.users);

const fotoPreview = ref(null);

//es peligroso segun ataques o entrenamiento
const esPeligroso = ref(false);
const razasPeligrosasIds = [
  16, 17, 86, 87, 121, 122, 123, 124, 136, 200, 201, 202, 203, 204, 263, 278,
  290, 350, 376,
];
const razasVisibles = ref([]); // lista que se mostrará en el select

const form = useForm({
  user_id: "", // Por defecto el usuario actual
  nombre: "",
  sexo: "",
  fecha_nacimiento: "",
  edad_canino: "edad",
  raza: "",
  caracteristicas: "",
  es_peligroso: "0",
  tiene_agresiones: "0",
  entrenado_ataque: "0",
  entrenado_proteccion: "0",
  esterilizado: "0",
  observaciones: "",
  foto_url: null,
  vacunas: null,
  poliza: null,
  declaracion: "",
});

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

//watch para detectar el cambio en el input de la edad
watch(
  () => form.fecha_nacimiento,
  (nuevaFecha) => {
    if (nuevaFecha) {
      const fechaActual = new Date();
      const fechaNacimiento = new Date(nuevaFecha);
      let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
      let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
      if (
        mes < 0 ||
        (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())
      ) {
        edad--;
      }
      form.edad_canino = edad;
    } else {
      form.edad_canino = "";
    }
  }
);

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

const hoy = new Date().toISOString().split("T")[0]; // Obtiene la fecha actual en formato YYYY-MM-DD

const obtenerRazasPeligrosas = () => {
  return Razas.filter((raza) => razasPeligrosasIds.includes(raza.id));
};

const obtenerTodasRazas = () => {
  return Razas;
};

// Inicializa solo con las razas peligrosas
razasVisibles.value = obtenerRazasPeligrosas();

const submit = () => {
  if (usePage().props.auth.user.roles[0].name.includes("Usuario")) {
    form.user_id = usePage().props.auth.user.id;
  } else {
    form.user_id = form.user_id.id;
  }

  let esPeligrosa =
    form.tiene_agresiones == "Si" ||
    form.entrenado_ataque == "Si" ||
    form.entrenado_proteccion == "Si";

  if (esPeligrosa) {
    form.es_peligroso = "Si";
  } else {
    form.es_peligroso = "No";
  }

  console.log(form);

  form.post(route("caninos.store"), {
    forceFormData: true,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "¡Canino registrado!",
        text: "El canino fue registrado correctamente.",
        confirmButtonText: "OK",
      }).then(() => {
        // Redirige al listado de caninos después de registrar
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
        text: "Hubo un error al registrar el canino. Por favor revisa los campos e inténtalo de nuevo.",
        confirmButtonText: "OK",
      });
    },
  });
};

function goBack() {
  window.history.back()
}
</script>
