<template>
  <Head title="Certificados">
    <link rel="preload" href="/assets/img/apoyoCanino.jpg" as="image" />

    <!-- <link rel="preload" href="/assets/img/imgVideo.jpeg" as="image"> -->
  </Head>

  <PageLayout>
    <div
      class="flex items-center justify-center items-center py-4 mt-0 bg-primary"
    >
      <h1 class="text-3xl font-bold text-white">Certificados de caninos</h1>
    </div>
    <div class="container mx-auto">
      <div class="sm:grid sm:grid-cols-2 gap-2 mt-24">
        <div class="flex justify-center items-center mb-4">
          <figure>
            <img
              class="w-full rounded-lg hover:brightness-75 transition duration-300 shadow-lg"
              src="/assets/img/apoyoCanino.jpg"
              alt="imagen de un perro"
              title="generar certificado"
            />
            <figcaption lang="es" class="hidden">
              Imagen de pitbull
            </figcaption>
          </figure>
        </div>
        <div class="mb-4 mt-2">
          <h2 class="sm:px-0 px-4 sm:text-6xl text-4xl font-bold text-start text-black">
            !Tramitar certificado de su canino¡
          </h2>
          <!-- Información general -->
          <div class="bg-gray-100 shadow-md rounded-lg p-6 mt-12 mx-4">
            <p class="sm:text-xl text-base text-gray-700 mb-4">
              Para realizar el trámite de un certificado de canino, primero debe
              registrarse como usuario y registrar a su mascota en la
              plataforma. Esto le permitirá gestionar los certificados de todos
              los caninos que registre.
            </p>
            <div class="flex justify-start gap-4 my-12">
              <PrimaryLink
                href="/register"
                class="sm:text-lg text-sm bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Registrarse
              </PrimaryLink>
            </div>
            <p class="sm:text-xl text-base text-gray-700">
              Si ya está registrado, puede ingresar a la plataforma desde el
              login y generar el certificado por cada canino registrado. Además,
              podrá registrar más caninos en la misma plataforma.
            </p>
            <div class="flex justify-start gap-4 my-12">
              <PrimaryLink
                href="/login"
                class="sm:text-lg text-sm bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Iniciar Sesión
              </PrimaryLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import { ref, onMounted, inject, watch } from "vue";
import PageLayout from "@/Layouts/PageLayout.vue";

import PrimaryLink from "@/Components/PrimaryLink.vue";

import AOS from "aos";
import "aos/dist/aos.css";


import axios from "axios";

AOS.init();

const swal = inject("$swal");

</script>
