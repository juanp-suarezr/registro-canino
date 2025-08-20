<script setup>
import { Head, Link, useForm, usePage } from "@inertiajs/vue3";
import { ref, onMounted, inject, watch } from "vue";
import PageLayout from "@/Layouts/PageLayout.vue";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import TextInput from "@/Components/TextInput.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import banner1 from "../../../public/assets/img/tay.png";
import banner2 from "../../../public/assets/img/perrito1.png";

import AutoComplete from "primevue/autocomplete";
import {
  ArrowDownCircleIcon,
  IdentificationIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/24/solid";
import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton.vue";

AOS.init();

const swal = inject("$swal");

defineProps({
  restaurantes: {
    type: Object,
    default: () => ({}),
  },
  laravelVersion: {
    type: String,
    required: true,
  },
  phpVersion: {
    type: String,
    required: true,
  },
});

swal.fire({
  title: "Bienvenido a la sección de registro canino",
  text: "Si ya ha realizado un registro y quiere añadir otro canino, por favor inicie sesión.",
  icon: "info",
  timer: 3000,
  position: "bottom-end",
  showConfirmButton: false,
});

const showModal = ref(false);
</script>

<template>
  <Head title="Registro canino">
    <link rel="preload" href="/assets/img/tay.png" as="image" />
    <link rel="preload" href="/assets/img/perrito1.png" as="image" />
    <!-- <link rel="preload" href="/assets/img/imgVideo.jpeg" as="image"> -->
  </Head>

  <PageLayout>
    <!-- primera seccion -->
    <div
      class="w-full sm:h-full overflow-y-hidden sm:flex flex-wrap bg-gradient-to-t from-azul via-azul/70 to-white bg-with-triangle relative sm:p-0 px-4"
    >
      <div
        class="sm:w-[60%] h-full flex flex-col sm:px-24 md:px-32 lg:px-44 mt-4"
      >
        <div
          class="rounded-md bg-secondary shadow-lg hover:bg-primary transition-transform duration-300 ease-in-out hover:translate-x-2 hover:skew-x-2 hover:skew-y-1 p-2 sm:mt-24 md:mt-24 mt-4"
        >
          <h1
            class="text-start work-sans text-white font-bold text-2xl md:text-4xl lg:text-5xl filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            REGISTRO DE CANINOS ESPECIALES
          </h1>
        </div>

        <p
          class="text-start work-sans text-white font-bold text-lg md:text-xl lg:text-2xl pt-16 pe-6 filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]"
        >
          Registra tu canino si:
        </p>
        <ol
          class="list-decimal ms-6 text-start work-sans text-white text-lg md:text-xl lg:text-2xl pe-6 filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]"
        >
          <li>Ha sido entrenado para actividades de seguridad</li>
          <li>
            Es de
            <a
              class="cursor-pointer underline"
              href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5515#:~:text=c)%20Perros%20que%20pertenecen%20a,%2C%20Staffordshire%20Terrier%2C%20Tosa%20Japon%C3%A9s."
              target="_blank"
              >manejo especial.</a
            >
          </li>
          <li>Ha sido entrenado para el ataque o defensa</li>
          <li>Ha tenido agresiones a personas u otros perros</li>
        </ol>
        <PrimaryButton
          class="justify-center cursor-pointer inline-flex items-center px-2 py-2 mb-4 text-base sm:text-lg md:text-xl text-white mt-12 border border-gray-400 rounded-md font-semibold hover:scale-105 transition ease-in-out duration-150"
          @click="showModal = true"
        >
          Registra tu canino
        </PrimaryButton>
      </div>

      <div class="sm:w-[25%] w-[40%] h-auto flex items-end">
        <figure
          class="w-full flex inline-flex justify-center hover:translate-x-1"
        >
          <img
            class="w-full mb-0 object-cover z-20"
            :src="banner1"
            alt="imagen de pastor alemán"
            title="tay, Pastor Alemán"
          />
          <figcaption lang="es" class="hidden">
            Esta es una imagen de tay, un pastor alemán de la alcaldía de
            Pereira, que está en la sección de registro canino.
          </figcaption>
        </figure>
      </div>
    </div>

    <!-- segunda seccion -->
    <div
      data-aos="fade-up"
      class="w-full h-full sm:flex flex-wrap bg-gradient-to-t from-option1 via-white to-white relative p-8 bg-with-triangle1"
    >
      <div class="w-full flex flex-col items-center text-center mt-6">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]"
        >
          ¿Cómo obtener tu certificado o carnet?
        </h1>
        <p
          class="text-lg md:text-xl lg:text-2xl mb-12 filter drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]"
        >
          El certificado garantiza que tu canino está registrado y cumple con
          las normativas vigentes sobre caninos de manejo especial o
          potencialmente peligrosos.
        </p>
      </div>

      <!-- Tarjetas -->
      <div class="w-full flex flex-wrap justify-center gap-8 my-4">
        <!-- Tarjeta 1 -->
        <div
          class="w-[300px] bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
        >
          <div class="flex justify-center mb-4">
            <IdentificationIcon class="w-12 h-12 text-primary" />
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-2">
            Paso 1: Registra tu canino
          </h2>
          <p class="text-gray-600">
            Completa el formulario de registro con los datos de tu mascota y su
            historial de vacunación.
          </p>
        </div>

        <!-- Tarjeta 2 -->
        <div
          class="w-[300px] bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
        >
          <div class="flex justify-center mb-4">
            <ShieldCheckIcon class="w-12 h-12 text-primary" />
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-2">
            Paso 2: Verifica tu información
          </h2>
          <p class="text-gray-600">
            Asegúrate de que todos los datos sean correctos y estén actualizados
            antes de enviar.
          </p>
        </div>

        <!-- Tarjeta 3 -->
        <div
          class="w-[300px] bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
        >
          <div class="flex justify-center mb-4">
            <ArrowDownCircleIcon class="w-12 h-12 text-primary" />
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-2">
            Paso 3: Descarga tu certificado
          </h2>
          <p class="text-gray-600">
            Una vez aprobado, podrás descargar el certificado o carnet en el apartado <a class="underline italic" href="/consultar">consultar registros.</a>
          </p>
        </div>
      </div>
    </div>

    <!-- tercera seccion -->
    <div
      class="w-full h-full sm:flex flex-wrap bg-gradient-to-t from-option2 via-option2/50 to-option1/80 relative sm:p-0 px-4"
    >
      <div class="sm:w-[25%] w-[40%] h-auto flex items-end">
        <figure class="w-full flex inline-flex justify-center hover:translate-x-1">
          <img
            class="w-full object-cover z-20"
            :src="banner2"
            alt="imagen de perrito feliz"
            title="perro negro feliz"
          />
          <figcaption lang="es" class="hidden">
            Esta es una imagen de un perrito negro con cafe
          </figcaption>
        </figure>
      </div>
      <div class="w-[60%] flex flex-col sm:px-24 md:px-32 lg:px-44 mt-2">
        <div
          class="rounded-md bg-secondary shadow-lg hover:bg-primary transition-transform duration-300 ease-in-out hover:translate-x-2 hover:skew-x-2 hover:skew-y-1 p-2 sm:mt-12 md:mt-24"
        >
          <h1
            class="text-start work-sans text-white font-bold text-2xl md:text-4xl lg:text-5xl filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            CONSULTAR REGISTROS
          </h1>
        </div>

        <p
          class="text-start work-sans text-lg md:text-xl lg:text-2xl pt-16 sm:pe-6 filter drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]"
        >
          Si ya registraste tu canino, puedes consultar su información y estado.
        </p>
        <div class="flex flex-wrap justify-between">
          <PrimaryLink
            class="justify-center cursor-pointer inline-flex items-center px-2 py-2 mb-4 text-base sm:text-lg md:text-xl text-white mt-12 border border-gray-400 rounded-md font-semibold hover:scale-105 transition ease-in-out duration-150"
            href="/consultar"
          >
            Consultar registro
          </PrimaryLink>
        </div>
      </div>
    </div>

    <!-- Modal de opciones de registro -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full relative">
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl"
          @click="showModal = false"
        >
          &times;
        </button>
        <h2 class="text-xl sm:text-2xl font-bold mb-4 text-center text-primary">
          ¿Cómo registrar tu canino?
        </h2>
        <p class="mb-6 text-center text-gray-700 sm:text-lg">
          Si es la
          <span class="font-semibold text-primary">primera vez</span> que
          registras un canino y aún no tienes usuario, crea tu cuenta y registra
          tu canino.<br /><br />
          Si ya tienes usuario y deseas
          <span class="font-semibold text-primary">registrar otro canino</span>
          o <span class="font-semibold text-primary">renovar</span> el registro,
          inicia sesión.
        </p>
        <div class="flex flex-col gap-4">
          <PrimaryLink
            class="justify-center cursor-pointer inline-flex items-center px-2 py-2 text-base sm:text-lg md:text-xl text-white border border-gray-400 rounded-md font-semibold bg-primary hover:scale-105 transition ease-in-out duration-150"
            href="/register"
          >
            Registra tu canino
          </PrimaryLink>
          <PrimaryLink
            class="justify-center cursor-pointer inline-flex items-center px-2 py-2 text-base sm:text-lg md:text-xl text-white border border-gray-400 rounded-md font-semibold !bg-green-600 hover:scale-105 transition ease-in-out duration-150"
            href="/login"
          >
            Iniciar sesión
          </PrimaryLink>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.triangle {
  position: absolute;
  top: 25%;
  left: 51%;
  transform: translate(-50%) rotate(-45deg);
  width: 120px;
  height: 120px;
  background: white;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  z-index: 10;
}

/* Media query para pantallas de al menos 640px a  */
@media (min-width: 640px) and (max-width: 940px) {
  .triangle {
    width: 100px;
    height: 100px;
    top: 5%;
    left: 48%;
    transform: rotate(-45deg);
  }
}

/* Media query para pantallas de al menos 550px y como máximo 639px */
@media (min-width: 550px) and (max-width: 639px) {
  .triangle {
    width: 100px;
    height: 100px;
    top: 30%;
    left: 90%;
    transform: rotate(-45deg);
  }
}

/* Media query para pantallas menores a 549px */
@media (max-width: 550px) {
  .triangle {
    width: 100px;
    height: 100px;
    top: 30%;
    left: 90%;
    transform: rotate(-45deg);
    display: none;
  }
}

.bg-with-triangle {
  position: relative;
}

.bg-with-triangle::after {
  transform: rotate(180deg);
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom right, #ffba00 0%, #e20613 51%);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  bottom: 0;
  right: 0;
  z-index: 10;
}

.bg-with-triangle1 {
  position: relative;
}

.bg-with-triangle1::after {
  transform: rotate(90deg);
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom right, #ffba00 0%, #e20613 51%);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  top: 0;
  right: 0;
  z-index: 10;
}
</style>
