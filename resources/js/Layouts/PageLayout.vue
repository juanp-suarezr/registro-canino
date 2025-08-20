<template>

    <div class="w-auto flex flex-col overflow-x-hidden bg-option1">


        <header class="w-full py-2 ps-8 flex bg-[#3366cc] z-30">
            <a class="flex w-5/6 sm:w-[20%] md:w-[10%] z-20" href="https://www.gov.co/" target="_blank">
                <figure>
                    <img class="w-full sm:w-5/6" :src="logoGobierno1" alt="imagen de logo" title="Gobierno colombiano">
                    <figcaption lang="es" class="hidden">Esta es una imagen del logo del gobierno actual de colombia
                    </figcaption>
                </figure>
            </a>
        </header>
        <nav class="bg-white text-parrafo flex py-1 w-full">
            <div class="container mx-auto flex flex-wrap items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center flex-shrink-0 mr-6 sm:w-1/6 w-3/6">
                    <a href="/Welcome" class="w-full">
                        <figure>

                            <img class="w-full" :src="logo" alt="imagen de logo" title="Alcaldía de Pereira">
                            <figcaption lang="es" class="hidden">Esta es una imagen del logo de la alcaldía de
                                Pereira
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <!-- Menu -->
                <div class="flex items-center sm:w-4/6 w-2/6">
                    <ul class="sm:flex flex-wrap items-center justify-end sm:space-x-4 text-primary text-sm sm:text-base">
                        <li
                            class="sm:border-white border-gray-400 sm:pr-2 border-b"
                            :class="{ 'font-bold': isActive('/register') }"
                        >
                            <a href="/register" class="hover:text-parrafo transition duration-300">Registro</a>
                        </li>
                        <li
                            class="sm:border-white border-gray-400 sm:pr-2 border-b"
                            :class="{ 'font-bold': isActive('/consultar') }"
                        >
                            <a href="/consultar" class="hover:text-parrafo transition duration-300">Consultar registro</a>
                        </li>
                        <!-- <li
                            class="sm:border-white border-gray-400 sm:pr-2 border-b"
                            :class="{ 'font-bold': isActive('/certificado') }"
                        >
                            <a href="/certificado" class="hover:text-parrafo transition duration-300">Certificados</a>
                        </li> -->
                        <li
                            class="sm:border-white border-gray-400 sm:pr-2 border-b"
                            :class="{ 'font-bold': isActive('/busqueda-perdidos') }"
                        >
                            <a href="/busqueda-perdidos" class="hover:text-parrafo transition duration-300">Caninos perdidos</a>
                        </li>
                        <li
                            class="sm:border-white border-gray-400 sm:pr-2 border-b"
                            :class="{ 'font-bold': isActive('/login') }"
                        >
                            <a href="/login" class="hover:text-parrafo transition duration-300">{{$page.props.auth.user ? 'Dashboard' : 'Iniciar sesión' }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        <main class="flex-1 overflow-x-hidden overflow-y-hidden bg-white text-black">

            <slot />

        </main>

        <footer class="px-2 bg-option2/90 text-parrafo flex flex-col py-6">
            <div class="container mx-auto flex flex-wrap items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center flex-shrink-0 mr-6 w-1/6">
                    <a href="/Welcome" class="w-full">
                        <figure>

                            <img class="w-full" :src="logo" alt="imagen de logo" title="Alcaldía de Pereira">
                            <figcaption lang="es" class="hidden">Esta es una imagen del logo de la alcaldía de
                                Pereira
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <!-- Redes Sociales -->
                <div class="flex justify-center items-center space-x-4 text-primary">
                    <a href="https://www.instagram.com/alcaldiadepereira/" target="_blank"
                        class="hover:text-parrafo transition duration-300">
                        <font-awesome-icon :icon="faInstagram" size="xl" />
                    </a>
                    <a href="https://www.facebook.com/AlcaldiaDePereira/" target="_blank"
                        class="hover:text-parrafo transition duration-300">
                        <font-awesome-icon :icon="faFacebook" size="xl" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos" target="_blank"
                        class="hover:text-parrafo transition duration-300">
                        <font-awesome-icon :icon="faYoutube" size="xl" />
                    </a>

                </div>

                <div>
                    <a href="#inicio" class="text-primary hover:text-parrafo transition duration-300">
                        <ArrowUpCircleIcon class="w-12 animate-bounce" />
                    </a>
                </div>
            </div>
            <div class="container mx-auto flex flex-wrap items-center justify-between px-4 mt-8">
                <div class="">
                    <h2 class="font-sans text-primary font-bold text-base sm:text-lg">
                        Línea de atención ciudadana
                    </h2>
                    <span class="text-sm sm:text-base flex flex-col flex-wrap whitespace-nowrap">
                        <br>
                        <b>Conmutador:</b> (+57) 6 3248000 - 6 3248179
                        <br>
                        <b>Línea Anticorrupción:</b> (+57) 01 8000 919748
                        <br>
                        <b>Línea de servicio a la ciudadanía:</b> (+57) 6 3248000 - 6 3248179
                        <br>
                        <b>Correo electrónico:</b> <a class="text-azul hover:text-primary focus:text-primary"
                            href="mailto:contactenos@pereira.gov.co" target="_blank">contactenos@pereira.gov.co</a>
                        <br>
                        <b>Notificaciones judiciales:</b> <a class="text-azul hover:text-primary focus:text-primary"
                            href="mailto:notificaciones_judicialesalcaldia@pereira.gov.co"
                            target="_blank">notificaciones_judicialesalcaldia@pereira.gov.co</a>
                        <br><br>
                        <b>Nit:</b> 891.480.030-2


                    </span>
                </div>


                <div class="flex font-bold h-full text-xs sm:text-base">
                    Diseñado por Secretaría TIC.
                </div>
            </div>

        </footer>

        <div class="w-full py-4 ps-8 flex bg-[#3366cc]">
            <a class="flex w-5/6 sm:w-[25%] md:w-[15%]" href="https://www.gov.co/" target="_blank">
                <figure>
                    <img class="w-full sm:w-5/6" :src="logoGobierno" alt="imagen de logo" title="Gobierno colombiano">
                    <figcaption lang="es" class="hidden">Esta es una imagen del logo del gobierno actual de colombia
                    </figcaption>
                </figure>
            </a>
        </div>

    </div>
</template>

<script setup>
import logo from '../../../public/assets/img/logo.webp';
import logoBlanco from '../../../public/assets/img/logo_white.webp';
import logoGobierno from '../../../public/assets/img/gobierno.webp';
import logoGobierno1 from '../../../public/assets/img/logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpCircleIcon } from '@heroicons/vue/24/solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { usePage } from '@inertiajs/vue3';
import { ref, watch, inject } from 'vue';
import { useToast } from 'vue-toast-notification';


const $toast = useToast();

AOS.init();

const isActive = (path) => {
  return window.location.pathname === path;
};

</script>

<style>
body {
    font-family: "Montserrat", sans-serif;
    min-height: 100%;
    text-align: justify;
    min-width: 100%;
    overflow-x: hidden !important;
}

ul.custom-list {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 10px;
}

.custom-list li {
    margin-bottom: 10px;
    font-size: 1rem;
    /* Puedes ajustar esto según tus necesidades */
}

.custom-list li span {
    display: block;
}
</style>
