<template>
  <Head title="Certificados" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Certificados</h1>
        <SecondaryButton @click="clearAll">Limpiar Filtros</SecondaryButton>
      </div>
    </template>

    <div class="p-4">
      <!-- Filtros -->
      <div class="bg-white shadow-md rounded-lg p-4 mb-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TextInput
            id="identificacion"
            v-model="identificacion"
            placeholder="Identificación del propietario"
            class="w-full"
          />
          <TextInput
            id="nombre"
            v-model="nombre"
            placeholder="Nombre del propietario"
            class="w-full"
          />
          <TextInput
            id="nombreCanino"
            v-model="nombreCanino"
            placeholder="Nombre del canino"
            class="w-full"
          />
          <div class="flex justify-end">
            <PrimaryButton @click="handleSearch">Buscar</PrimaryButton>
          </div>
        </div>
      </div>

      <!-- Tabla -->
      <div class="bg-white shadow-md rounded-lg p-4">
        <DataTable
          :value="caninos.data"
          responsive-layout="scroll"
          class="p-datatable-sm"
        >
          <template #header>
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-bold">Lista de Caninos</h2>
              <Pagination :links="caninos.links" />
            </div>
          </template>

          <Column header="Propietario">
            <template #body="slotProps">
              <p>
                {{
                  slotProps.data.user?.informacion_usuario?.nombre_completo ||
                  "Sin información"
                }}
              </p>
            </template>
          </Column>

          <Column field="nombre" header="Nombre del Canino" />
          <Column field="raza" header="Raza" />
          <Column field="edad_canino" header="Edad" />
          <Column field="sexo" header="Sexo" />

          <Column header="Fecha de registro">
            <template #body="slotProps">
              {{
                new Date(slotProps.data.created_at).toLocaleDateString(
                  "es-CO",
                  {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }
                )
              }}
            </template>
          </Column>
          <Column header="Foto">
            <template #body="slotProps">
              <img
                v-if="slotProps.data.foto_url"
                :src="getUrl(slotProps.data.foto_url)"
                alt="Foto del canino"
                v-tooltip="slotProps.data.caracteristicas"
                class="w-24 h-full object-cover rounded cursor-pointer"
                @click="openLightbox(getUrl(slotProps.data.foto_url))"
              />
              <span v-else>No disponible</span>
            </template>
          </Column>

          <Column header="Acciones">
            <template #body="slotProps">
              <div class="flex gap-2">
                <SecondaryButton
                  class="border-blue-800 hover:!bg-blue-200"
                  @click="descargarCertificado(slotProps.data)"
                >
                  Descargar certificado
                </SecondaryButton>
                <SecondaryButton
                  v-if="slotProps.data.certificado"
                  class="border-blue-800 hover:!bg-blue-200"
                  @click="
                    verCertificado(
                      slotProps.data.id
                    )
                  "
                >
                  Ver certificado
                </SecondaryButton>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>

    <!-- Lightbox -->
    <VueEasyLightbox
      :visible="showLightbox"
      :imgs="[previewImage]"
      @hide="closeLightbox"
    />

    <!-- Modal Iframe -->
    <!-- Modal personalizado -->
    <div
      v-if="showIframe"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-full lg:mx-24 mx-4 h-[90%]">
        <div class="flex justify-between items-center p-4 border-b">
          <h2 class="text-xl font-bold text-gray-800">
            Vista del Certificado
          </h2>
          <button
            class="text-gray-500 hover:text-gray-800"
            @click="showIframe = false"
          >
            ✕
          </button>
        </div>
        <div class="px-2 pt-2 pb-2">
          <iframe
            v-if="certificado_path"
            :src="certificado_path"
            class="w-full h-[70vh] rounded"
          ></iframe>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { ref, inject } from "vue";
import { router } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Pagination from "@/Components/Pagination.vue";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import VueEasyLightbox from "vue-easy-lightbox";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/vue/24/solid";
import Modal from "@/Components/Modal.vue";

import jsPDF from "jspdf";
import SecondaryLink from "@/Components/SecondaryLink.vue";
const swal = inject("$swal");

const props = defineProps({
  caninos: {
    type: Object,
    default: () => ({}),
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
});

console.log(props.caninos);

// Filtros
let identificacion = ref(props.filters.identificacion || "");
let nombre = ref(props.filters.nombre || "");
let nombreCanino = ref("");
let rangoFechas = ref(null);

//path url
const certificado_path = ref("");
//modal iframe
const showIframe = ref(false);

// Lightbox
const previewImage = ref("");
const showLightbox = ref(false);

const openLightbox = (imageUrl) => {
  previewImage.value = imageUrl;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
};

// Funciones
const handleSearch = () => {
  router.get(
    "/certificados",
    {
      identificacion: identificacion.value,
      nombre: nombre.value,
      nombreCanino: nombreCanino.value,
      rangoFechas: rangoFechas.value,
    },
    {
      preserveState: true,
      replace: true,
    }
  );
};

const clearAll = () => {
  identificacion.value = "";
  nombre.value = "";
  nombreCanino.value = "";
  rangoFechas.value = null;
  handleSearch();
};

const getUrl = (url) => `/storage/uploads/caninos/${url}`;

//dercargar certificado
const descargarCertificado = (canino) => {
  window.open(route("certificados.descargar", canino.id), "_blank");
};

const verCertificado = (id) => {
  certificado_path.value = route('certificados.ver', id); // Usa la ruta del controlador
  showIframe.value = true;
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
