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
        <PrimaryLink class="mt-4 sm:text-base text-xs" href="">
          Reportar caninos perdidos <RocketLaunchIcon class="w-4 h-4 ms-2" />
        </PrimaryLink>
      </div>
      <!-- CARRUSEL -->
      <Carousel class="my-6"
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
                  class="w-full rounded-md min-[320px]:!h-[20vh] sm:!h-[40vh] object-cover aspect-[calc(100/3)/100]"
                />
                <div
                  v-else
                  class="w-full min-[320px]:!h-[20vh] sm:!h-[40vh] flex flex-wrap px-2 break-words object-cover aspect-[calc(100/3)/100]"
                >
                  <h2
                    class="flex justify-center text-center m-auto text-2xl sm:text-4xl text-parrafo font-bold break-words"
                  >
                    {{ slotProps.data.nombre }}
                  </h2>
                </div>
                <Tag
                  :value="slotProps.data.tipo"
                  class="absolute bg-primary text-[8px] sm:text-sm text-white sm:top-[5px] sm:left-[5px] top-[-10px]"
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
                  {{ slotProps.data.nombre }}
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
          <div class="px-6 text-secondary text-center sm:text-2xl text-lg font-bold">
                Actualmente no hay caninos perdidos
          </div>
        </template>
      </Carousel>
    </div>
  </PageLayout>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import { ref, onMounted, inject, watch } from "vue";
import PageLayout from "@/Layouts/PageLayout.vue";
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import PrimaryLink from "@/Components/PrimaryLink.vue";
import { RocketLaunchIcon } from "@heroicons/vue/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

import axios from "axios";

AOS.init();

const swal = inject("$swal");

const props = defineProps({
  perdidos: {
    type: Object,
    default: [],
  },

});

console.log(props);


const responsiveOptions = ref([
    {
        breakpoint: '3000px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '2000px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '860px',
        numVisible: 1,
        numScroll: 1
    },

]);

//IMAGEN
const getImageUrl = (imageName, folder) => {
    // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
    return `/storage/uploads/${folder}/${imageName}`;
};



</script>
