<script setup>
import { Head, Link, useForm, usePage, router } from "@inertiajs/vue3";
import { ref, onMounted, inject, watch } from "vue";
import PageLayout from "@/Layouts/PageLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import ProgressSpinner from "primevue/progressspinner";

import TextInput from "@/Components/TextInput.vue";
import AOS from "aos";

import "aos/dist/aos.css";

import { HomeIcon, RocketLaunchIcon } from "@heroicons/vue/24/solid";
import banner1 from "../../../public/assets/img/perrito2.png";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import VueEasyLightbox from "vue-easy-lightbox";
AOS.init();

const swal = inject("$swal");

const props = defineProps({
  registro: {
    type: Object,
  },

  filters: {
    type: Object,
    default: () => ({}),
  },
});

console.log(props.registro);

//path url
const certificado_path = ref("");
//modal iframe
const showIframe = ref(false);

const IsSecondTime = ref(false);
//loading
const loading = ref(false);
console.log(props);

// pass filters in search
let identificacion = ref(props.filters.identificacion);

// Lightbox state
const previewImage = ref("");
const showLightbox = ref(false);

// Open the lightbox with the selected image
const openLightbox = (imageUrl) => {
  previewImage.value = imageUrl;
  showLightbox.value = true;
};

// Close the lightbox
const closeLightbox = () => {
  showLightbox.value = false;
};

// get the data from the page
const getUrl = (url) => {
  return `/storage/uploads/caninos/${url}`;
};

//busqueda
const handleEnterKey = () => {
  loading.value = true;
  router.get(
    "/consultar",
    { identificacion: identificacion.value },
    {
      onSuccess: () => {
        loading.value = false;
        IsSecondTime.value = true;
      },
      onError: () => {
        loading.value = false;
        swal.fire({
          icon: "error",
          title: "Error",
          text: "No se encontraron registros.",
        });
      },
    },
    {
      preserveState: true,
      replace: true,
    }
  );
};

//Liampiar filtros
const clearAll = () => {
  identificacion.value = "";

  router.get(
    "/consultar",
    { identificacion: identificacion.value },
    {
      replace: true,
    }
  );
};

const verCertificado = (id) => {
  certificado_path.value = route("certificados.ver", id); // Usa la ruta del controlador
  showIframe.value = true;
};
</script>

<template>
  <Head title="Consultar registro" />

  <PageLayout>
    <div class="w-full !bg-option2 relative">
      <div class="w-full text-sm px-2 md:px-16 pt-8">
        <div class="w-full h-full flex">
          <Link
            class="text-indigo-600 hover:text-indigo-400 inline-flex pe-2"
            href="/Welcome"
          >
            <HomeIcon class="w-6 h-6 pe-2" /> Inicio
          </Link>
          / Consultar registro
        </div>

        <h1 class="text-lg sm:text-xl md:text-2xl mt-6 font-bold !font-sans">
          Consultar registro de caninos
        </h1>
      </div>
    </div>

    <div
      class="w-full px-6 flex sm:flex-row flex-col-reverse flex-wrap bg-gradient-to-t from-option1 via-white to-option2"
    >
      <!-- imagen de perrito jugando -- left side -->
      <div class="sm:w-[35%] w-full h-full">
        <div class="w-full flex inline-flex justify-center">
          <img
            class="w-full object-cover z-20"
            :src="banner1"
            alt="imagen de perrito jugando"
            title="perrito jugando"
          />
          <figcaption lang="es" class="hidden">
            Esta es una imagen de un canino jugando
          </figcaption>
        </div>
      </div>
      <div class="sm:w-[60%] w-full">
        <!-- Filtro de búsqueda -->
        <div class="mt-12">
          <div class="bg-white shadow-md rounded-lg p-4">
            <span class="sm:text-lg mb-4">
              Ingresar número de identificación para consultar los caninos
              registrados a su nombre
            </span>
            <div class="sm:flex items-center gap-2 mt-2 h-full">
              <TextInput
                id="identificacion"
                v-model="identificacion"
                placeholder="Ingrese el número de identificación"
                class="w-full mb-2"
                @keydown.enter="handleEnterKey"
              />
              <SecondaryButton
                class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium text-white"
                @click="handleEnterKey"
                >Buscar</SecondaryButton
              >
              <SecondaryButton @click="clearAll" class="hover:underline">
                Limpiar
              </SecondaryButton>
            </div>
          </div>
        </div>
        <!-- Tabla de resultados - right side -->
        <div class="mt-6">
          <div class="bg-white shadow-md rounded-lg p-4">
            <div v-if="registro.data.length > 0" class="w-full overflow-x-auto">
              <table
                class="table-medium w-full border-collapse border border-gray-200"
              >
                <thead class="bg-gray-100">
                  <tr>
                    <th class="border border-gray-300 px-4 py-2 text-left">
                      #
                    </th>
                    <th class="border border-gray-300 px-4 py-2 text-left">
                      Nombre del Usuario
                    </th>
                    <th class="border border-gray-300 px-4 py-2 text-left">
                      Nombre del Canino
                    </th>
                    <th class="border border-gray-300 px-4 py-2 text-left">
                      Raza
                    </th>
                    <th class="border border-gray-300 px-2 py-2 text-left">
                      Edad
                    </th>
                    <th class="border border-gray-300 px-2 py-2 text-left">
                      Sexo
                    </th>
                    <th class="border border-gray-300 px-4 py-2 text-left">
                      fecha vencimiento
                    </th>
                    <th class="border border-gray-300 px-4 py-2 text-left">
                      estado
                    </th>

                    <th class="border border-gray-300 px-2 py-2 text-left">
                      Foto
                    </th>
                    <th class="border border-gray-300 px-4 py-2 text-left">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(canino, index) in registro.data" :key="index">
                    <td class="border border-gray-300 px-4 py-2">
                      {{ index + 1 }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2 break-words">
                      {{
                        canino.user?.informacion_usuario?.nombre_completo ||
                        "Sin información"
                      }}
                    </td>
                    <!-- nombre -->
                    <td class="border border-gray-300 px-4 py-2">
                      {{ canino.nombre }}
                    </td>
                    <!-- raza -->
                    <td class="border border-gray-300 px-4 py-2">
                      {{ canino.raza }}
                    </td>
                    <!-- edad canino -->
                    <td class="border border-gray-300 px-4 py-2">
                      {{ canino.edad_canino }}
                    </td>
                    <!-- sexo -->
                    <td class="border border-gray-300 px-4 py-2">
                      {{ canino.sexo }}
                    </td>
                    <!-- fecha vencimiento -->
                    <td class="border border-gray-300 px-4 py-2">
                      {{
                        canino.certificado
                          ? canino.certificado.fecha_vencimiento
                          : "No disponible"
                      }}
                    </td>
                    <!-- estado -->
                    <td class="border border-gray-300 px-4 py-2">
                      <span
                        class="text-green-200 bg-green-600 p-2 rounded-md"
                        :class="{
                          'text-red-200 bg-red-600':
                            canino.estado === 'Vencido',
                        }"
                      >
                        {{ canino.estado }}
                      </span>
                    </td>
                    <!-- foto -->
                    <td class="border border-gray-300 px-4 py-2">
                      <img
                        v-if="canino.foto_url"
                        :src="getUrl(canino.foto_url)"
                        alt="Foto del canino"
                        class="w-full object-contain rounded-md cursor-pointer"
                        @click="openLightbox(getUrl(canino.foto_url))"
                      />
                      <span v-else>No disponible</span>
                    </td>
                    <!-- acciones -->
                    <td class="border border-gray-300 px-4 py-2">
                      <SecondaryButton
                        v-if="canino.certificado"
                        class="border-blue-800 hover:!bg-blue-200"
                        @click="verCertificado(canino.certificado.id)"
                      >
                        Ver certificado
                      </SecondaryButton>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- Diseño vertical para pantallas pequeñas -->
              <div class="table-responsive grid grid-cols-1 gap-4 sm:hidden">
                <div
                  v-for="(canino, index) in registro.data"
                  :key="index"
                  class="border border-gray-300 rounded-lg p-4 shadow-md"
                >
                  <p><strong>#:</strong> {{ index + 1 }}</p>
                  <p>
                    <strong>Nombre del Usuario:</strong>
                    {{
                      canino.user?.informacion_usuario?.nombre_completo ||
                      "Sin información"
                    }}
                  </p>
                  <p><strong>Nombre del Canino:</strong> {{ canino.nombre }}</p>
                  <p><strong>Raza:</strong> {{ canino.raza }}</p>
                  <p><strong>Edad:</strong> {{ canino.edad_canino }}</p>
                  <p><strong>Sexo:</strong> {{ canino.sexo }}</p>
                  <p>
                    <!-- fecha vencimiento -->
                    <strong>Fecha vencimiento:</strong>
                    {{
                      canino.certificado
                        ? canino.certificado.fecha_vencimiento
                        : "No disponible"
                    }}
                  </p>
                  <!-- estado -->
                  <p>
                    <strong>Estado:</strong>
                    <span
                      class="ms-2 text-green-200 bg-green-600 p-1 rounded-md"
                      :class="{
                        'text-red-200 bg-red-600': canino.estado === 'Vencido',
                      }"
                    >
                      {{ canino.estado }}
                    </span>
                  </p>
                  <!-- foto -->
                  <div>
                    <strong>Foto:</strong>
                    <img
                      v-if="canino.foto_url"
                      :src="getUrl(canino.foto_url)"
                      alt="Foto del canino"
                      class="w-full h-44 object-contain rounded-md mt-2 cursor-pointer"
                      @click="openLightbox(getUrl(canino.foto_url))"
                    />
                    <!-- else sin foto -->
                    <span v-else>No disponible</span>
                    <!-- acciones -->
                    <SecondaryButton
                      v-if="canino.certificado"
                      class="border-blue-800 hover:!bg-blue-200 mt-2"
                      @click="verCertificado(canino.certificado.id)"
                    >
                      Ver certificado
                    </SecondaryButton>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full flex justify-center items-center"
              v-else-if="loading"
            >
              <ProgressSpinner
                style="width: 50px; height: 50px"
                strokeWidth="8"
                fill="transparent"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
              />
            </div>
            <div class="w-full flex justify-center items-center" v-else>
              <em v-if="identificacion && IsSecondTime" class="text-xl"
                >No hay caninos registrados al usuario con numero de
                identificación --> {{ identificacion }}.
                <br />
                Sí no esta registrado, por favor dirígete a la opción de
                <Link
                  class="text-blue-500 hover:text-blue-700"
                  href="/register"
                >
                  <strong>Registrar canino</strong>
                </Link>
              </em>
              <div class="w-1/2 flex justify-center items-center" v-else>
                <div class="bg-azul rounded-md shadow-lg p-4">
                  <h3 class="text-white sm:text-2xl text-xl text-center">
                    Registrarse como usuario y añadir el canino, dando click
                    <Link
                      class="text-blue-500 hover:text-blue-700"
                      href="/register"
                    >
                      <strong>Aquí</strong>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <!-- Paginación -->
            <Pagination :links="registro.links" class="mt-4" />
          </div>
        </div>
      </div>
    </div>
  </PageLayout>

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
        <h2 class="text-xl font-bold text-gray-800">Vista del Certificado</h2>
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
</template>

<style scoped>
@media screen and (max-width: 900px) {
  .table-medium {
    display: none;
  }

  .table-responsive {
    display: block;
  }
}
</style>
