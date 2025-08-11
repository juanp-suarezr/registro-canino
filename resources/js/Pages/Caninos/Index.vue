<template>
  <Head title="Caninos" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Caninos</h1>
        <div class="flex flex-wrap gap-2">
          <PrimaryLink :href="route('caninos.create')"> Agregar </PrimaryLink>
          <!-- <a
            :href="
              route('registrados.excel', {
                fecha_init: fecha_init,
                fecha_end: fecha_end,
              })
            "
            class="flex text-white bg-green-800 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            <DocumentArrowDownIcon class="h-6 w-6 me-2" />Exportar
          </a> -->
        </div>
      </div>
    </template>

    <div class="p-4">
      <!-- Filtros -->
      <div class="bg-white shadow-md rounded-lg p-4 mb-4">
        <div class="flex flex-wrap gap-4">
          <TextInput
            v-if="$page.props.user.permissions.includes('usuarios-listar')"
            id="identificacion"
            v-model="identificacion"
            placeholder="Identificación del propietario"
            class="w-1/4 block"
            @keydown.enter="handleSearch"
          />
          <TextInput
            v-if="$page.props.user.permissions.includes('usuarios-listar')"
            id="nombre"
            v-model="nombre"
            placeholder="Nombre del propietario"
            class="w-1/4 block"
            @keydown.enter="handleSearch"
          />
          <TextInput
            id="nombreCanino"
            v-model="nombreCanino"
            placeholder="Nombre del canino"
            class="w-1/4 block"
            @keydown.enter="handleSearch"
          />

          <Calendar
            v-if="$page.props.user.permissions.includes('usuarios-listar')"
            v-model="rangoFechas"
            selection-mode="range"
            placeholder="Rango de fechas"
            class="w-1/4 block"
          />
          <!-- estado -->
          <div class="w-1/4">
            <label>Filtrar por estado</label>
            <select
              id="estado"
              name="estado"
              v-model="estado"
              @change="handleSearch"
              placeholder="filtrar por estado"
              class="block w-full px-4 py-1 mt-1 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option selected disabled value="">Filtrar por estado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Rechazado">Rechazado</option>
              <option value="Aprobado">Aprobado</option>
              <option value="Vencido">Vencido</option>
            </select>
          </div>
        </div>
        <div class="mt-4 flex justify-end">
          <PrimaryButton @click="handleSearch">Buscar</PrimaryButton>
          <div class="">
            <button
              type="submit"
              @click="clearAll"
              class="flex justify-center border-2 border-gray-400 text-gray-600 font-semibold rounded-md py-2 px-4 hover:bg-gray-300"
            >
              Limpiar
            </button>
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
                <b>Nombre:</b>
                {{
                  slotProps.data.user?.informacion_usuario?.nombre_completo ||
                  "Sin información"
                }}
                <br />
                <b
                  >{{
                    slotProps.data.user?.informacion_usuario?.tipo_documento
                  }}:</b
                >
                {{
                  slotProps.data.user?.informacion_usuario?.numero_documento ||
                  "N/A"
                }}
                <br />
                <b>Edad:</b>
                {{ slotProps.data.user?.informacion_usuario?.edad || "N/A" }}
                <br />
                <b>Email:</b> {{ slotProps.data.user?.email || "N/A" }}
              </p>
            </template>
          </Column>
          <Column header="Sector">
            <template #body="slotProps">
              {{ slotProps.data.user?.informacion_usuario?.comuna || "N/A" }}
              <br />
              {{ slotProps.data.user?.informacion_usuario?.zona || "N/A" }}
            </template>
          </Column>

          <Column header="Canino">
            <template #body="slotProps">
              <p>
                <b>nombre:</b>
                {{ slotProps.data.nombre || "N/A" }}
                <br />
                <b>Raza:</b>
                {{ slotProps.data.raza || "N/A" }}
                <br />
                <b>Edad:</b>
                {{ slotProps.data.edad_canino || "N/A" }}
                <br />
                <b>Sexo:</b>
                {{ slotProps.data.sexo || "N/A" }}
              </p>
            </template>
          </Column>

          <Column header="Información canino">
            <template #body="slotProps">
              <p>
                <b>Esterilizado:</b>
                {{ slotProps.data.esterilizado || "N/A" }}
                <br />
                <b>Entrenado para el ataque:</b>
                {{ slotProps.data.entrenado_ataque || "N/A" }}
                <br />
                <b>Entrenado para la defensa:</b>
                {{ slotProps.data.entrenado_proteccion || "N/A" }}
                <br />
                <b>Es peligroso:</b>
                {{ slotProps.data.es_peligroso || "N/A" }}
              </p>
            </template>
          </Column>
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
                class="w-32 h-full object-cover rounded cursor-pointer"
                @click="openLightbox(getUrl(slotProps.data.foto_url))"
              />
              <span v-else>No disponible</span>
            </template>
          </Column>

          <Column header="Estado">
            <template #body="slotProps">
              <span
                class="text-green-200 bg-green-600 p-2 rounded-md"
                :class="{
                  'text-red-200 bg-red-600':
                    slotProps.data.estado === 'Rechazado',
                  'text-yellow-200 bg-yellow-600':
                    slotProps.data.estado === 'Pendiente',
                }"
              >
                {{ slotProps.data.estado }}
              </span>
            </template>
          </Column>
          <Column header="Acciones">
            <template #body="slotProps">
              <div class="flex gap-2">
                <!-- boton de ver detalles -->
                <SecondaryLink
                  v-if="
                    slotProps.data.estado != 'Pendiente' &&
                    $page.props.user.permissions.includes('usuarios-listar')
                  "
                  class="border-gray-800 hover:!bg-gray-200"
                  v-tooltip.bottom="'Ver detalles'"
                  :href="
                    route('gestion_registros.show', { id: slotProps.data.id })
                  "
                >
                  <EyeIcon class="h-6 w-6 text-gray-800" />
                </SecondaryLink>
                <!-- boton de editar -->
                <SecondaryLink
                  v-if="
                    slotProps.data.estado != 'Rechazado' &&
                    slotProps.data.estado != 'Pendiente' &&
                    $page.props.user.roles[0].includes('Usuario')
                  "
                  class="border-blue-800 hover:!bg-blue-200"
                  v-tooltip.bottom="'Editar'"
                  :href="route('caninos.edit', slotProps.data.id)"
                >
                  <PencilIcon class="h-6 w-6 text-blue-800" />
                </SecondaryLink>
                <!-- boton de corregir cuando se es rechazado -->
                <SecondaryLink
                  v-if="
                    slotProps.data.estado == 'Rechazado' &&
                    $page.props.user.roles[0].includes('Usuario')
                  "
                  class="border-blue-800 hover:!bg-blue-200"
                  v-tooltip.bottom="'Corregir'"
                  :href="route('caninos.fixData', slotProps.data.id)"
                >
                  <PencilIcon class="h-6 w-6 text-blue-800" />
                </SecondaryLink>

                <!-- boton de ver novedades -->
                <SecondaryButton
                  v-if="slotProps.data.novedades && slotProps.data.novedades.length != 0"
                  class="border-gray-800 hover:!bg-gray-200"
                  v-tooltip.bottom="'Ver novedades'"
                  @click="ShowNovedad(slotProps.data)"
                >
                  <NewspaperIcon class="h-6 w-6 text-gray-800" />
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

    <!-- Modal PDF -->
    <div
      v-if="showNovedad"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 h-[80vh] flex flex-col"
      >
        <div class="flex justify-between items-center p-4 border-b">
          <h2 class="text-lg font-bold text-gray-800">
            Novedades {{ caninoSelected.nombre }}
          </h2>
          <button
            class="text-gray-500 hover:text-gray-800"
            @click="showNovedad = false"
          >
            ✕
          </button>
        </div>
        <div class="flex-1 overflow-auto">
          <DataTable
            :value="caninoSelected.novedades"
            responsive-layout="scroll"
            class="p-datatable-sm"
          >
            <template #header>
              <div class="flex justify-between items-center">
                <h2 class="text-lg font-bold">Lista de novedades</h2>
              </div>
            </template>

            <Column header="#">
              <template #body="slotProps">
                <p>
                  {{ slotProps.index+1 }}
                </p>
              </template>
            </Column>
            <Column header="Novedad">
              <template #body="slotProps">
                {{ slotProps.data.novedad?.nombre || "N/A" }}
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Pagination from "@/Components/Pagination.vue";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import VueEasyLightbox from "vue-easy-lightbox";
import {
  PencilIcon,
  TrashIcon,
  EyeIcon,
  NewspaperIcon,
} from "@heroicons/vue/24/solid";

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
let estado = ref("");

// Lightbox
const previewImage = ref("");
const showLightbox = ref(false);

//modal novedad
const showNovedad = ref(false);
//caninoselected novedad
const caninoSelected = ref([]);

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
    "/caninos",
    {
      identificacion: identificacion.value,
      nombre: nombre.value,
      nombreCanino: nombreCanino.value,
      rangoFechas: rangoFechas.value,
      estado: estado.value,
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
  estado.value = "";
  handleSearch();
};

const getUrl = (url) => `/storage/uploads/caninos/${url}`;

const editCanino = (id) => {
  router.visit(`/caninos/${id}/edit`);
};

const deleteCanino = (id) => {
  if (confirm("¿Estás seguro de que deseas eliminar este canino?")) {
    router.delete(`/caninos/${id}`);
  }
};

const ShowNovedad = (canino) => {
  showNovedad.value = true;
  caninoSelected.value = canino;
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
