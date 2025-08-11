<template>
  <Head title="Busqueda de caninos perdidos">
    <link rel="preload" href="/assets/img/apoyoCanino.jpg" as="image" />

    <!-- <link rel="preload" href="/assets/img/imgVideo.jpeg" as="image"> -->
  </Head>

  <PageLayout>
    <div
      class="flex items-center justify-center items-center py-4 mt-0 mb-4 bg-azul"
    >
      <h1 class="text-3xl font-bold text-white">Caninos perdidos</h1>
    </div>
    <div class="container mx-auto px-12">
      <div class="mt-8">
        <h2 class="sm:text-2xl text-lg font-bold text-black">
          ¿Perdiste o encontraste un animal de compañía?
        </h2>

        <p class="mt-4 sm:text-xl text-base">
          Aquí en este perfil puedes ayudar a que regrese a casa.

          <i class="text-parrafo mt-2 block"
            >Los usuarios tienen la posibilidad de suministrar las fotografías e
            información pertinente para facilitar tanto la búsqueda por parte de
            los dueños de su mascota perdida como la búsqueda de los dueños de
            una mascota encontrada.</i
          >
        </p>
        <PrimaryButton
          class="mt-4 sm:text-base text-xs"
          @click="ReportarCanino = true"
        >
          Reportar caninos perdidos <RocketLaunchIcon class="w-4 h-4 ms-2" />
        </PrimaryButton>
      </div>
      <!-- CARRUSEL -->
      <Carousel
        class="my-6"
        :value="perdidos"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        :class="{ 'min-[900px]:px-44': perdidos.length == 1 }"
      >
        <template #item="slotProps">
          <!-- imagen y tag con tipo -->
          <div class="mb-3">
            <div class="relative mx-auto">
              <img
                v-if="slotProps.data.banner != 'NA'"
                :src="getImageUrl(slotProps.data.banner, 'perdidos')"
                :alt="slotProps.data.nombre"
                class="w-full rounded-md min-[320px]:!h-[20vh] sm:!h-[40vh] object-contain aspect-[calc(100/3)/100]"
              />
              <div
                v-else
                class="w-full min-[320px]:!h-[20vh] sm:!h-[40vh] flex flex-wrap px-2 break-words object-cover aspect-[calc(100/3)/100]"
              >
                <h2
                  class="flex justify-center text-center m-auto text-2xl sm:text-4xl text-parrafo font-bold break-words"
                >
                  {{ slotProps.data.nombre || 'No reporta' }}
                </h2>
              </div>
              <Tag
                :value="
                  slotProps.data.tipo == 'Propietario'
                    ? 'Búsqueda canino perdido'
                    : 'Búsqueda propietario'
                "
                class="absolute text-[8px] sm:text-sm text-white sm:top-[5px] sm:left-[5px] top-[-10px]"
                :class="{ '!bg-amarillo': slotProps.data.tipo == 'Propietario' }"
              />
            </div>
          </div>
          <!-- info general -->
          <div
            class="flex flex-wrap md:flex-row flex-col justify-between gap-4"
          >
            <!-- nombre, contacto, descripcion, lugar -->
            <div class="">
              <div
                class="mb-3 font-medium p-2 bg-azul rounded-md shadow-md text-white"
              >
                {{ slotProps.data.nombre || 'No reporta' }}
              </div>
              <div class="mb-3 break-words px-2">
                <b>raza:</b> {{ slotProps.data.raza }}
              </div>
              <div class="mb-3 break-words px-2">
                <b>contacto:</b> {{ slotProps.data.contacto }}
              </div>
              <div class="mb-3 break-words px-2">
                <b>Ultima vez visto:</b>
                {{ slotProps.data.lugar || "no contiene información" }}
              </div>
              <div class="mb-3 break-words px-2">
                <b>Descripción:</b>
                {{ slotProps.data.descripcion || "no contiene información" }}
              </div>
            </div>
          </div>

          <div class="flex justify-center align-items-center">
            <button
              type="button"
              @click="abrirModal(slotProps.data)"
              class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white p-2 rounded-md shadow-xl z-10"
            >
              CONTACTAR
            </button>
          </div>
        </template>
        <template #empty>
          <div
            class="px-6 text-secondary text-center sm:text-2xl text-lg font-bold"
          >
            Actualmente no hay caninos perdidos
          </div>
        </template>
      </Carousel>
    </div>

    <!-- Modal formulario reporte -->
    <div
      v-if="ReportarCanino"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 h-[80vh] flex flex-col"
      >
        <!-- Header -->
        <div class="flex justify-between items-center p-4 border-b">
          <h2 class="text-lg font-bold text-gray-800">
            Reportar canino perdido
          </h2>
          <button
            class="text-gray-500 hover:text-gray-800"
            @click="ReportarCanino = false"
          >
            ✕
          </button>
        </div>

        <!-- Body -->
        <div class="flex-1 overflow-auto p-4">
          <form
            class="md:grid md:grid-cols-2 md:gap-4"
            @submit.prevent="submit"
          >
            <!-- Nombre -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700"
                >Nombre del canino (opcional)</label
              >
              <input
                type="text"
                v-model="form.nombre"
                class="mt-1 block w-full border rounded-lg p-2"
              />
            </div>

            <!-- Contacto -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700"
                >Número de contacto</label
              >
              <input
                type="number"
                v-model="form.contacto"
                class="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>

            <!-- Email -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700"
                >Email de contacto</label
              >
              <input
                type="email"
                v-model="form.email"
                class="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>

            <!-- Descripción -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700"
                >Descripción</label
              >
              <textarea
                v-model="form.descripcion"
                class="mt-1 block w-full border rounded-lg p-2"
                rows="4"
                required
              ></textarea>
            </div>

            <!-- Tipo -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700"
                >Tipo de reporte</label
              >
              <select
                v-model="form.tipo"
                class="mt-1 block w-full border rounded-lg p-2"
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Propietario">
                  Soy el propietario y busco al canino
                </option>
                <option value="Canino perdido">
                  Reporto un canino que encontré perdido
                </option>
              </select>
            </div>

            <!-- Lugar -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700"
                >Lugar de última vez visto</label
              >
              <input
                type="text"
                v-model="form.lugar"
                class="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>

            <!-- campo obligatorio -->
            <div class="mb-4 hidden">
              <label class="block text-sm font-medium text-gray-700"
                >Campo obligatorio</label
              >
              <input
                type="text"
                v-model="form.campo_obligatorio"
                class="mt-1 block w-full border rounded-lg p-2"
              />
            </div>

            <!-- Raza -->
            <div class="mb-4">
              <div class="flex items-center gap-2">
                <label class="block text-sm font-medium text-gray-700"
                  >Raza o parecido</label
                >

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
                :options="Razas"
                filter
                optionLabel="label"
                placeholder="Seleccione una raza"
                checkmark
                :highlightOnSelect="false"
                class="w-full"
              />
            </div>

            <!-- Banner -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700"
                >Imagen de la mascota (opcional)</label
              >
              <input
                type="file"
                @change="onImageChange"
                accept="image/*"
                class="mt-1 block w-full border rounded-lg p-2"
              />
            </div>

            <!-- Botón -->
            <div class="flex justify-end mt-4 col-span-2">
              <button
                type="submit"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
              >
                Enviar reporte
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { Head, useForm } from "@inertiajs/vue3";
import { ref, onMounted, inject, watch } from "vue";
import PageLayout from "@/Layouts/PageLayout.vue";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import {
  RocketLaunchIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

import Razas from "@/shared/razas.json"; // Importa el JSON
import Select from "primevue/select";

import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { useReCaptcha } from "vue-recaptcha-v3";
const { executeRecaptcha } = useReCaptcha();
AOS.init();

const swal = inject("$swal");

const props = defineProps({
  perdidos: {
    type: Object,
    default: [],
  },
});

console.log(props);
//modal formulario
const ReportarCanino = ref(false);

const form = useForm({
  nombre: "",
  raza: "",
  descripcion: "",
  contacto: "0",
  tipo: "0",
  lugar: "0",
  email: "0",
  banner: null,
  campo_obligatorio: "",
  recaptcha_token: "", // Campo para el token de reCAPTCHA
});

const responsiveOptions = ref([
  {
    breakpoint: "3000px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "2000px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "860px",
    numVisible: 1,
    numScroll: 1,
  },
]);

//IMAGEN
const getImageUrl = (imageName, folder) => {
  // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
  return `/storage/uploads/${folder}/${imageName}`;
};

const onImageChange = (event) => {
  const file = event.target.files[0];
  form.banner = file;
};


const submit = async () => {
  try {
    // Ejecuta reCAPTCHA y obtiene el token
    const recaptchaToken = await executeRecaptcha("register");

    // Agrega el token al formulario
    form.recaptcha_token = recaptchaToken;

    console.log(form);

    // Envía el formulario
    form.post(route("crear-reporte"), {
      onSuccess: () => {
        swal
          .fire({
            title: "Registro exitoso",
            text: "Tu registro se ha completado correctamente. el reporte ha sido generado.",
            icon: "success",
            confirmButtonText: "OK",
          })
          .then(() => {
            window.location.reload();
          });
      },
      onError: () => {
        swal.fire({
          title: "Error en el registro",
          text: "Algo salió mal en el registro. Por favor, revisa los campos o inténtalo nuevamente.",
          icon: "error",
          confirmButtonText: "OK",
        });
      },
    });
  } catch (error) {
    console.log(error);

    swal.fire({
      title: "Error de reCAPTCHA",
      text: "Hubo un problema al validar reCAPTCHA. Por favor, inténtalo nuevamente.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
</script>
