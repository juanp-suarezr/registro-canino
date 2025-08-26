<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header> Dashboard </template>

    <!-- info admin -->
    <div
      class="w-full"
      v-if="
        $page.props.auth.user.roles[0].name.includes('Administrador') ||
        $page.props.auth.user.roles[0].name.includes('Supervisor')
      "
    >
      <div class="items-center px-4 py-8 m-auto mt-5">
        <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
          <!-- info contacto -->
          <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <UserGroupIcon class="h-6 w-6" />
                </div>
                <div
                  class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base ps-4"
                >
                  Info Contacto
                </div>
              </div>
              <h1
                class="text-lg sm:text-xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
              >
                {{ $page.props.auth.user.name }}
              </h1>
              <div class="group-hover:text-gray-200">
                <p>
                  {{ $page.props.auth.user.email }}
                </p>
              </div>
            </div>
          </div>
          <!-- Registros -->
          <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <FingerPrintIcon class="h-6 w-6" />
                </div>
                <div
                  class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
                >
                  Registros
                </div>
              </div>
              <h1
                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
              >
                {{ registros }}
              </h1>
              <div class="flex group-hover:text-gray-200">
                <p>Registros listados</p>
              </div>
            </div>
          </div>
          <!-- info caninos -->
          <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <SparklesIcon class="h-6 w-6" />
                </div>
                <div
                  class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
                >
                  Caninos registrados
                </div>
              </div>
              <h1
                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
              >
                {{ caninos }}
              </h1>
              <div class="flex group-hover:text-gray-200">
                <p>Caninos registrados</p>
              </div>
            </div>
          </div>
          <!-- trafico -->
          <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <MagnifyingGlassIcon class="h-6 w-6" />
                </div>
                <div
                  class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
                >
                  Trafico
                </div>
              </div>
              <p
                class="text-sm sm:text-base xl:text-lg font-bold text-gray-700 mt-8 group-hover:text-gray-50"
              >
                <b>Inicio:</b> {{ getTotalViews("inicio") }}
                <br />
                <b>Registros:</b> {{ getTotalViews("register") }}
                <br />
                <b>Consultas:</b> {{ getTotalViews("consultas") }}
              </p>
              <div class="flex group-hover:text-gray-200">
                <p>Visitas a la pagina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- info usuario -->
    <div class="w-full" v-if="$page.props.auth.user.roles[0].name == 'Usuario'">
      <div class="w-full flex flex-wrap sm:justify-between">
        <h1 class="text-xl"><b>Total caninos registrados:</b> {{ caninos }}</h1>
        <PrimaryLink class="!text-xl" :href="route('caninos.create')"> Registrar otro canino </PrimaryLink>
      </div>
      <div class="sm:grid md:grid-cols-3 sm:grid-cols-2 w-full px-4 gap-4">
        <!-- card for caninos -->
        <div
          v-for="canino in caninos_info.data"
          :key="canino.id"
          class="mb-2 w-full border rounded-md shadow-md text-base p-2"
        >
          <!-- foto y etiqueta de estado -->
          <div class="w-full relative">
            <img
              :src="getUrl(canino.foto_url)"
              class="relative p-2 w-full h-64 object-contain cursor-pointer"
              alt="Foto del canino"
              v-tooltip.bottom="canino.caracteristicas"
              @click="openLightbox(getUrl(canino.foto_url))"
            />
            <div class="absolute" style="right: 4px; top: 4px">
              <Tag
                :value="canino.estado"
                :severity="getSeverity(canino.estado)"
              ></Tag>
            </div>
          </div>
          <!-- info canino -->
          <div class="w-full px-2 mt-4">
            <h2 class="text-lg font-bold">
              {{ canino.nombre }}
            </h2>
            <p><b>Raza:</b> {{ canino.raza }}</p>
            <p><b>Es peligroso:</b> {{ canino.es_peligroso }}</p>
            <p>
              <b>Fecha de registro:</b>
              {{
                new Date(canino.created_at).toLocaleDateString("es-CO", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              }}
            </p>
            <p>
              <b>Fecha de vencimiento:</b>
              {{
                new Date(canino.vencimiento).toLocaleDateString("es-CO", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              }}
            </p>
            <div class="w-full flex flex-wrap gap-2 mt-4">
              <!-- boton de añadir novedad -->
              <SecondaryLink
                v-if="
                  canino.estado != 'Rechazado' && canino.estado != 'Pendiente'
                "
                class="border hover:scale-105 bg-red-200"
                v-tooltip.bottom="'Registrar Novedad'"
                :href="route('caninos.edit', canino.id)"
              >
                <XMarkIcon class="h-6 w-6 text-red-800" />
              </SecondaryLink>
              <!-- boton de corregir cuando se es rechazado -->
              <SecondaryLink
                v-if="canino.estado == 'Rechazado'"
                class="border-blue-800 hover:!bg-blue-200"
                v-tooltip.bottom="'Corregir'"
                :href="route('caninos.fixData', canino.id)"
              >
                <PencilIcon class="h-6 w-6 text-blue-800" />
              </SecondaryLink>

              <!-- boton de ver novedades -->
              <SecondaryButton
                v-if="canino.novedades && canino.novedades.length != 0"
                class="border-gray-800 hover:!bg-gray-200"
                v-tooltip.bottom="'Ver novedades'"
                @click="ShowNovedad(canino)"
              >
                <NewspaperIcon class="h-6 w-6 text-gray-800" />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <!-- paginator -->
        <div class="mt-2">
          <Pagination :links="caninos_info.links" />
        </div>
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
                  {{ slotProps.index + 1 }}
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
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { ref, watch, inject, computed } from "vue";
import {
  ShareIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  FingerPrintIcon,
  SparklesIcon,
  XMarkIcon,
  PencilIcon,
  NewspaperIcon,
} from "@heroicons/vue/24/solid";

import Tag from "primevue/tag";
import VueEasyLightbox from "vue-easy-lightbox";
import Pagination from "@/Components/Pagination.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const props = defineProps({
  registros: {
    type: Number,
    default: () => 0,
  },
  caninos: {
    type: Number,
    default: () => 0,
  },
  caninos_info: {
    type: Object,
    default: () => ({}),
  },
  views: {
    type: Object,
    default: () => ({}),
  },
});


//modal novedad
const showNovedad = ref(false);
//caninoselected novedad
const caninoSelected = ref([]);

// Lightbox
const previewImage = ref("");
const showLightbox = ref(false);

const getTotalViews = computed(() => (pageType) => {
  let pagesToCount;

  // Determina las páginas a contar según el tipo de página solicitado
  if (pageType === "inicio") {
    pagesToCount = ["/", "Welcome", "Home"];
  } else if (pageType === "consultas") {
    pagesToCount = ["consultar"];
  } else if (pageType === "register") {
    pagesToCount = ["register"];
  } else {
    return 0;
  }

  // Filtra las vistas según el tipo de página y suma los views
  return props.views
    .filter((view) => pagesToCount.includes(view.page))
    .reduce((total, view) => total + view.views, 0);
});

// Lightbox
const openLightbox = (imageUrl) => {
  previewImage.value = imageUrl;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
};
//end Lightbox

const ShowNovedad = (canino) => {
  showNovedad.value = true;
  caninoSelected.value = canino;
};

const getUrl = (url) => `/storage/uploads/caninos/${url}`;

const getSeverity = (status) => {
  switch (status) {
    case "Pendiente":
      return "warn";

    case "Aprobado":
      return "success";

    case "Rechazado":
      return "danger";

    case "Vencido":
      return "danger";

    default:
      return null;
  }
};
</script>
