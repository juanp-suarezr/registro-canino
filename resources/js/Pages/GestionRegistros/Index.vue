<template>
  <Head title="gestión Caninos" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Gestión de registros</h1>
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
        </div>
        <div class="mt-4 flex justify-end">
          <PrimaryButton @click="handleSearch">Buscar</PrimaryButton>
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
              <h2 class="text-lg font-bold">Lista de Caninos para validar</h2>
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

          <Column
            field="user.informacion_usuario.direccion"
            header="Dirección"
          />
          <Column field="nombre" header="Nombre del Canino" />
          <Column field="raza" header="Raza" />
          <Column field="sexo" header="Sexo" />

          <Column header="Tiempo de espera">
            <template #body="slotProps">
              <Tag
                :severity="
                  calcularTiempoEspera(slotProps.data.created_at).color
                "
                :value="calcularTiempoEspera(slotProps.data.created_at).texto"
              >
              </Tag>
            </template>
          </Column>

          <Column header="Acciones">
            <template #body="slotProps">
              <div class="flex gap-2">
                <SecondaryLink
                  class="border-gray-800 hover:!bg-gray-200"
                  v-tooltip.bottom="'Ver detalles'"
                  :href="route('gestion_registros.show', { id: slotProps.data.id })"
                >
                  <EyeIcon class="h-6 w-6 text-gray-800" />
                </SecondaryLink>
              </div>
            </template>
          </Column>
        </DataTable>
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
import Pagination from "@/Components/Pagination.vue";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import VueEasyLightbox from "vue-easy-lightbox";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/vue/24/solid";
import dayjs from "dayjs";
import "dayjs/locale/es";
import SecondaryLink from "@/Components/SecondaryLink.vue";

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
let nombreCanino = ref(props.filters.nombreCanino || "");

// Funciones
const handleSearch = () => {
  router.get(
    "/gestion_registros",
    {
      identificacion: identificacion.value,
      nombre: nombre.value,
      nombreCanino: nombreCanino.value,
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
  handleSearch();
};

const addNovedad = (id) => {
  router.visit(`/caninos/${id}/novedades/create`);
};

// Calculate waiting time
const calcularTiempoEspera = (createdAt) => {
  if (!createdAt) return { texto: "Desconocido", color: "secondary" };

  const ahora = dayjs();
  const creado = dayjs(createdAt);
  const dias = ahora.diff(creado, "days");
  const horas = ahora.diff(creado, "hours") % 24;

  let color = "secondary";
  if (dias >= 1 && dias <= 3) {
    color = "success";
  } else if (dias >= 4 && dias <= 6) {
    color = "warn";
  } else if (dias >= 7) {
    color = "danger";
  }

  return { texto: `${dias} días`, color };
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
