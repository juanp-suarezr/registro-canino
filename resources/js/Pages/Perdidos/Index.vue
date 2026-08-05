<template>
  <Head title="Gestión de reportes de animales perdidos" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Reportes de animales perdidos/encontrados</h1>
        <SecondaryButton @click="clearAll">Limpiar Filtros</SecondaryButton>
      </div>
    </template>

    <div class="p-4">
      <!-- Filtros -->
      <div class="bg-white shadow-md rounded-lg p-4 mb-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TextInput
            id="nombre_reportante"
            v-model="filtroNombreReportante"
            placeholder="Nombre del reportante"
            class="w-full"
          />
          <TextInput
            id="contacto"
            v-model="filtroContacto"
            placeholder="Contacto / celular"
            class="w-full"
          />
          <select
            v-model="filtroEstado"
            class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
          >
            <option value="">Todos los estados</option>
            <option value="activo">Activo</option>
            <option value="pendiente">Pendiente</option>
            <option value="aprobado">Aprobado</option>
            <option value="rechazado">Rechazado</option>
            <option value="resuelto">Resuelto</option>
            <option value="no_encontrado">No encontrado</option>
          </select>
          <select
            v-model="filtroOrigen"
            class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
          >
            <option value="">Todos los orígenes</option>
            <option value="ciudadano">Ciudadano</option>
            <option value="policia">Policía</option>
            <option value="hospivet">Hospivet</option>
            <option value="clinica">Clínica</option>
            <option value="fundacion">Fundación</option>
          </select>
        </div>
        <div class="mt-4 flex justify-end">
          <PrimaryButton @click="handleSearch">Buscar</PrimaryButton>
        </div>
      </div>

      <!-- Tabla -->
      <div class="bg-white shadow-md rounded-lg p-4">
        <DataTable
          :value="reportesOrdenados"
          responsive-layout="scroll"
          class="p-datatable-sm"
        >
          <template #header>
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-bold">Lista de reportes</h2>
              <div class="flex gap-2 items-center">
                <PrimaryLink :href="route('perdidos.create')">
                  Nuevo reporte
                </PrimaryLink>
                <Pagination :links="reportes.links" />
              </div>
            </div>
          </template>

          <Column header="Reportante">
            <template #body="slotProps">
              <p>
                <b>{{ slotProps.data.nombre_reportante || "Sin nombre" }}</b>
                <br />
                <span class="text-sm text-gray-500">{{ slotProps.data.contacto }}</span>
                <br />
                <Tag
                  :value="slotProps.data.origen_label"
                  class="mt-1 text-xs"
                  :severity="origenSeverity(slotProps.data.origen)"
                />
              </p>
            </template>
          </Column>

          <Column header="Animal">
            <template #body="slotProps">
              <p>
                <b>{{ slotProps.data.nombre || "Sin nombre" }}</b>
                <br />
                <span class="text-sm">Raza: {{ slotProps.data.raza || "N/A" }}</span>
                <br />
                <span v-if="slotProps.data.color" class="text-sm">Color: {{ slotProps.data.color }}</span>
                <span v-if="slotProps.data.tamano" class="text-sm"> | {{ slotProps.data.tamano_label }}</span>
              </p>
            </template>
          </Column>

          <Column header="Tipo">
            <template #body="slotProps">
              <Tag
                :value="slotProps.data.tipo_label"
                :severity="slotProps.data.tipo === 'Propietario' ? 'warn' : 'info'"
              />
            </template>
          </Column>

          <Column header="Lugar / Fecha">
            <template #body="slotProps">
              <p>
                <span class="text-sm">{{ slotProps.data.lugar }}</span>
                <br />
                <span class="text-xs text-gray-500">
                  {{ formatDate(slotProps.data.fecha_hora) }}
                </span>
              </p>
            </template>
          </Column>

          <Column header="Estado">
            <template #body="slotProps">
              <div class="flex flex-col gap-1">
                <Tag
                  :value="estadoLabel(slotProps.data.estado)"
                  :severity="estadoSeverity(slotProps.data.estado)"
                />
                <Tag
                  v-if="slotProps.data.estado === 'Pendiente'"
                  :value="calcularTiempoEspera(slotProps.data.created_at).texto"
                  :severity="calcularTiempoEspera(slotProps.data.created_at).color"
                  class="text-xs"
                />
              </div>
            </template>
          </Column>

          <Column header="Acciones" style="min-width: 120px">
            <template #body="slotProps">
              <div class="flex gap-1">
                <SecondaryLink
                  class="border-gray-800 hover:!bg-gray-200 !p-1"
                  v-tooltip.bottom="'Ver detalles'"
                  :href="route('perdidos.show', { id: slotProps.data.id })"
                >
                  <EyeIcon class="h-5 w-5 text-gray-800" />
                </SecondaryLink>
                <SecondaryLink
                  class="border-blue-800 hover:!bg-blue-100 !p-1"
                  v-tooltip.bottom="'Editar'"
                  :href="route('perdidos.edit', { id: slotProps.data.id })"
                >
                  <PencilIcon class="h-5 w-5 text-blue-800" />
                </SecondaryLink>
              </div>
            </template>
          </Column>

          <template #empty>
            <div class="text-center text-gray-500 py-8">
              No se encontraron reportes.
            </div>
          </template>
        </DataTable>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import { router } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import Pagination from "@/Components/Pagination.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import { EyeIcon, PencilIcon } from "@heroicons/vue/24/solid";
import dayjs from "dayjs";
import "dayjs/locale/es";

const props = defineProps({
  reportes: {
    type: Object,
    default: () => ({}),
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
});

// Filtros
let filtroNombreReportante = ref(props.filters?.nombre_reportante || "");
let filtroContacto = ref(props.filters?.contacto || "");
let filtroEstado = ref(props.filters?.estado || "");
let filtroOrigen = ref(props.filters?.origen || "");

const reportesOrdenados = computed(() => {
  const data = props.reportes?.data || [];
  return [...data].sort((a, b) => {
    const aPend = a.estado === "Pendiente" || a.estado === "pendiente" ? 0 : 1;
    const bPend = b.estado === "Pendiente" || b.estado === "pendiente" ? 0 : 1;
    if (aPend !== bPend) return aPend - bPend;
    return dayjs(b.created_at).diff(dayjs(a.created_at));
  });
});

const handleSearch = () => {
  router.get(
    route("perdidos.index"),
    {
      nombre_reportante: filtroNombreReportante.value,
      contacto: filtroContacto.value,
      estado: filtroEstado.value,
      origen: filtroOrigen.value,
    },
    {
      preserveState: true,
      replace: true,
    }
  );
};

const clearAll = () => {
  filtroNombreReportante.value = "";
  filtroContacto.value = "";
  filtroEstado.value = "";
  filtroOrigen.value = "";
  handleSearch();
};

// Utilities
const formatDate = (date) => {
  if (!date) return "N/A";
  return dayjs(date).format("DD/MM/YYYY h:mm A");
};

const calcularTiempoEspera = (createdAt) => {
  if (!createdAt) return { texto: "Desconocido", color: "secondary" };

  const ahora = dayjs();
  const creado = dayjs(createdAt);
  const dias = ahora.diff(creado, "days");
  const horas = ahora.diff(creado, "hours") % 24;
  const minutos = ahora.diff(creado, "minutes") % 60;

  let color = "secondary";
  if (dias >= 1 && dias <= 3) {
    color = "success";
  } else if (dias >= 4 && dias <= 6) {
    color = "warn";
  } else if (dias >= 7) {
    color = "danger";
  }

  let texto = "";
  if (dias > 0) texto += `${dias} días `;
  if (horas > 0) texto += `${horas} horas `;
  if (minutos > 0 || dias === 0) texto += `${minutos} min`;
  texto = texto.trim() || "0 min";

  return { texto, color };
};

const estadoLabel = (estado) => {
  const labels = {
    activo: "Activo",
    pendiente: "Pendiente",
    aprobado: "Aprobado",
    rechazado: "Rechazado",
    resuelto: "Resuelto",
    no_encontrado: "No encontrado",
  };
  return labels[estado] || estado;
};

const estadoSeverity = (estado) => {
  const severities = {
    activo: "success",
    pendiente: "warn",
    aprobado: "info",
    rechazado: "danger",
    resuelto: "info",
    no_encontrado: "secondary",
  };
  return severities[estado] || "secondary";
};

const origenSeverity = (origen) => {
  const severities = {
    ciudadano: "secondary",
    policia: "info",
    hospivet: "success",
    clinica: "warn",
    fundacion: "help",
  };
  return severities[origen] || "secondary";
};
</script>
