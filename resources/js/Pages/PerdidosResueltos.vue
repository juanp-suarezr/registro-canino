<template>
  <Head title="Perritos felices">
    <link rel="preload" href="/assets/img/apoyoCanino.jpg" as="image" />
  </Head>

  <PageLayout>
    <div class="flex items-center justify-center py-5 mt-0 mb-6 bg-azul">
      <h1 class="text-4xl sm:text-5xl font-bold text-white">Perritos felices</h1>
    </div>

    <div class="container mx-auto sm:px-12 px-3">
      <div class="my-8 rounded-2xl bg-white p-6 sm:p-10 shadow-md">
        <div class="max-w-3xl">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Historias con final feliz</h2>
          <p class="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
            Estos perritos ya fueron encontrados o se reunieron con sus familias.
            <span class="block text-base sm:text-lg text-gray-500 mt-2">Cada reporte resuelto es una victoria para la comunidad.</span>
          </p>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- GRILLA RESPONSIVE (Instagram-style)                          -->
      <!-- ============================================================ -->
      <div v-if="resueltos.data && resueltos.data.length > 0" class="my-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="item in resueltos.data"
            :key="item.id"
            class="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <!-- ========== SECCIÓN DE FOTOS ========== -->
            <div class="relative flex-shrink-0">
              <div
                class="w-full h-60 bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden"
                @click="(item.fotos_urls || []).length > 0 ? abrirLightbox(item, imagenActiva[item.id] || 0) : null"
              >
                <img
                  v-if="(item.fotos_urls || []).length > 0"
                  :src="(item.fotos_urls || [])[imagenActiva[item.id] || 0]"
                  :alt="item.nombre"
                  class="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div v-else class="flex flex-col items-center justify-center text-gray-400">
                  <svg class="w-14 h-14 text-gray-300 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <span class="text-base">Sin foto</span>
                </div>
              </div>

              <!-- Tag tipo -->
              <div
                class="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1"
                :class="item.tipo == 'Propietario' ? 'bg-red-600 text-white' : 'bg-orange-700 text-white'"
              >
                <span>{{ item.tipo == 'Propietario' ? '🔍' : '🐾' }}</span>
                <span>{{ item.tipo == 'Propietario' ? 'PERDIDO' : 'REPORTADO' }}</span>
              </div>

              <!-- Contador fotos -->
              <div
                v-if="(item.fotos_urls || []).length > 1"
                class="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2.5 py-1 rounded-full"
              >
                {{ (imagenActiva[item.id] || 0) + 1 }}/{{ item.fotos_urls.length }}
              </div>

              <!-- Miniaturas -->
              <div
                v-if="(item.fotos_urls || []).length > 1"
                class="flex gap-1.5 px-3 py-2.5 bg-white/90 overflow-x-auto"
              >
                <img
                  v-for="(url, idx) in item.fotos_urls"
                  :key="idx"
                  :src="url"
                  :alt="'Foto ' + (idx + 1)"
                  class="h-12 w-12 object-cover rounded-lg border-2 cursor-pointer flex-shrink-0 transition-all duration-200"
                  :class="(imagenActiva[item.id] || 0) === idx ? 'border-blue-500 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'"
                  @click="imagenActiva[item.id] = idx"
                />
              </div>
            </div>

            <!-- ========== INFORMACIÓN ========== -->
            <div class="p-4 space-y-2 text-base flex-1 overflow-hidden">
              <div
                class="text-sm font-semibold px-2.5 py-1 rounded-lg inline-block"
                :class="item.tipo == 'Propietario' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'"
              >
                <template v-if="item.tipo == 'Propietario'">
                  🔍 El dueño reportó su mascota como perdida
                </template>
                <template v-else>
                  🐾 {{ origenQuienReporta(item) }} reportó un animal extraviado
                </template>
              </div>

              <div class="text-lg font-bold text-blue-900 truncate">
                {{ item.nombre || 'Sin nombre' }}
              </div>

              <div v-if="item.raza"><b>Raza:</b> {{ truncate(item.raza, 60) }}</div>
              <div v-if="item.color"><b>Color:</b> {{ truncate(item.color, 60) }}</div>
              <div v-if="item.tamano_label"><b>Tamaño:</b> {{ item.tamano_label }}</div>
              <div v-if="item.lugar"><b>Visto en:</b> {{ truncate(item.lugar, 60) }}</div>

              <div v-if="item.descripcion">
                <b>Descripción:</b>
                <span v-if="item.descripcion.length > 60">
                  {{ item.descripcion.substring(0, 60) }}...
                  <button @click="abrirDetalle(item)" class="text-blue-600 hover:text-blue-800 font-semibold text-sm ml-1">Ver más</button>
                </span>
                <span v-else>{{ item.descripcion }}</span>
              </div>

              <div v-if="item.estado_encuentra_label"><b>Estado:</b> {{ item.estado_encuentra_label }}</div>
            </div>

            <!-- Botón -->
            <div class="p-4 pt-0 flex justify-center">
              <button
                type="button"
                @click="abrirDetalle(item)"
                class="bg-secondary hover:bg-primary text-base sm:text-base text-white px-4 py-2.5 rounded-lg shadow-md transition-colors w-full"
              >
                Ver detalle completo
              </button>
            </div>
          </div>
        </div>

        <!-- Paginación -->
        <div class="mt-10 flex justify-center" v-if="resueltos.links && resueltos.links.length > 3">
          <Pagination :links="resueltos.links" />
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="my-16 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
        <p class="text-2xl sm:text-3xl font-semibold text-gray-800">🐕‍🦺 Aún no hay historias felices</p>
        <p class="mt-2 text-base text-gray-500">Los primeros reportes resueltos aparecerán aquí.</p>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- MODAL DE DETALLE COMPLETO                                     -->
    <!-- ============================================================ -->
    <div
      v-if="detalleVisible"
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      @click.self="cerrarDetalle"
    >
      <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-x-hidden">
        <div class="flex justify-between items-center p-4 border-b bg-gray-50 flex-shrink-0">
          <div class="flex items-center gap-2">
            <h2 class="text-lg font-bold text-gray-800">{{ detalleData.nombre || 'Animal sin nombre' }}</h2>
            <div class="text-xs font-bold px-2 py-1 rounded-md" :class="detalleData.tipo == 'Propietario' ? 'bg-red-600 text-white' : 'bg-green-700 text-white'">
              {{ detalleData.tipo == 'Propietario' ? '🔍 MASCOTA PERDIDA' : '🐾 ANIMAL REPORTADO' }}
            </div>
          </div>
          <button class="text-gray-500 hover:text-gray-800 text-2xl" @click="cerrarDetalle">✕</button>
        </div>

        <div class="flex-1 overflow-y-auto p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div class="w-full h-72 md:h-80 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden" @click="abrirLightbox(detalleData, detalleIndexActivo)">
                <img v-if="(detalleData.fotos_urls || []).length > 0" :src="(detalleData.fotos_urls || [])[detalleIndexActivo]" alt="Foto principal" class="w-full h-full object-contain hover:opacity-90 transition" />
                <span v-else class="text-gray-400">Sin foto</span>
              </div>
              <div v-if="(detalleData.fotos_urls || []).length > 1" class="flex gap-2 mt-3 overflow-x-auto pb-1">
                <img v-for="(url, idx) in detalleData.fotos_urls" :key="idx" :src="url" :alt="'Mini ' + (idx + 1)" class="w-16 h-16 object-cover rounded-lg border-2 cursor-pointer flex-shrink-0" :class="detalleIndexActivo === idx ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200 opacity-70 hover:opacity-100'" @click="detalleIndexActivo = idx" />
              </div>
              <p class="text-sm text-gray-500 mt-3">Reportado: {{ formatDate(detalleData.created_at) }}</p>
            </div>

            <div class="space-y-4 text-base break-words">
              <div class="text-base font-semibold px-2.5 py-1.5 rounded-lg inline-block" :class="detalleData.tipo == 'Propietario' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'">
                <template v-if="detalleData.tipo == 'Propietario'">🔍 {{ origenQuienReporta(detalleData) }} reportó su mascota como perdida</template>
                <template v-else>🐾 {{ origenQuienReporta(detalleData) }} reportó un animal extraviado</template>
              </div>
              <div><b>Nombre del reportante:</b><p class="break-words">{{ detalleData.nombre_reportante }}</p></div>
              <div><b>Contacto:</b><p class="text-blue-700 font-semibold break-words text-lg">{{ detalleData.contacto }}</p></div>
              <div v-if="detalleData.email"><b>Email:</b><p class="break-words">{{ detalleData.email }}</p></div>
              <hr />
              <div><b>Raza:</b><p class="break-words">{{ detalleData.raza || 'No especificada' }}</p></div>
              <div v-if="detalleData.color"><b>Color:</b><p class="break-words">{{ detalleData.color }}</p></div>
              <div><b>Tamaño:</b><p class="break-words">{{ detalleData.tamano_label || 'No especificado' }}</p></div>
              <div v-if="detalleData.particularidades"><b>Particularidades:</b><p class="break-words">{{ detalleData.particularidades }}</p></div>
              <div><b>Estado físico:</b><p class="break-words">{{ detalleData.estado_encuentra_label || 'No especificado' }}</p></div>
              <hr />
              <div><b>Última vez visto:</b><p class="break-words">{{ detalleData.lugar }}</p></div>
              <div><b>Fecha del incidente:</b><p class="break-words">{{ formatDate(detalleData.fecha_hora) }}</p></div>
              <hr />
              <div><b>Descripción:</b><p class="text-gray-600 mt-1 break-words whitespace-pre-line text-lg">{{ detalleData.descripcion }}</p></div>
            </div>
          </div>
        </div>

        <div class="border-t p-3 flex justify-end gap-2 bg-gray-50 flex-shrink-0">
          <button @click="cerrarDetalle" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm transition">Cerrar</button>
        </div>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- LIGHTBOX                                                      -->
    <!-- ============================================================ -->
    <div v-if="lightboxVisible" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60]" @click.self="cerrarLightbox">
      <button class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10" @click="cerrarLightbox">✕</button>
      <img :src="lightboxUrls[lightboxIndex]" class="max-w-[92vw] max-h-[88vh] object-contain" @click.stop />
      <button v-if="lightboxUrls.length > 1 && lightboxIndex > 0" class="absolute left-4 text-white text-5xl hover:text-gray-300 drop-shadow-lg" @click="lightboxIndex--">‹</button>
      <button v-if="lightboxUrls.length > 1 && lightboxIndex < lightboxUrls.length - 1" class="absolute right-4 text-white text-5xl hover:text-gray-300 drop-shadow-lg" @click="lightboxIndex++">›</button>
      <div class="absolute bottom-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">{{ lightboxIndex + 1 }} / {{ lightboxUrls.length }}</div>
      <div v-if="lightboxUrls.length > 1" class="absolute bottom-14 flex gap-2 overflow-x-auto max-w-[90vw] pb-1">
        <img v-for="(url, idx) in lightboxUrls" :key="idx" :src="url" class="w-12 h-12 object-cover rounded border-2 cursor-pointer" :class="lightboxIndex === idx ? 'border-white opacity-100' : 'border-gray-500 opacity-50 hover:opacity-80'" @click="lightboxIndex = idx" />
      </div>
    </div>

  </PageLayout>
</template>

<script setup>
import { Head, router } from "@inertiajs/vue3";
import { ref, inject, reactive } from "vue";
import PageLayout from "@/Layouts/PageLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import dayjs from "dayjs";

AOS.init();

const props = defineProps({
  resueltos: { type: Object, default: () => ({ data: [], links: [] }) },
});

const imagenActiva = reactive({});

const detalleVisible = ref(false);
const detalleData = ref({});
const detalleIndexActivo = ref(0);

const abrirDetalle = (data) => {
  detalleData.value = data;
  detalleIndexActivo.value = imagenActiva[data.id] || 0;
  detalleVisible.value = true;
};

const cerrarDetalle = () => {
  detalleVisible.value = false;
  detalleData.value = {};
};

const lightboxVisible = ref(false);
const lightboxUrls = ref([]);
const lightboxIndex = ref(0);

const abrirLightbox = (data, index = 0) => {
  const urls = data.fotos_urls || [];
  if (urls.length === 0) return;
  lightboxUrls.value = urls;
  lightboxIndex.value = index;
  lightboxVisible.value = true;
};

const cerrarLightbox = () => {
  lightboxVisible.value = false;
  lightboxUrls.value = [];
};

const truncate = (text, max = 60) => {
  if (!text) return "";
  return text.length > max ? text.substring(0, max) + "..." : text;
};

const formatDate = (date) => {
  if (!date) return "N/A";
  return dayjs(date).format("DD/MM/YYYY h:mm A");
};

const origenQuienReporta = (data) => {
  const origenes = {
    ciudadano: "Un CIUDADANO",
    policia: "La POLICÍA",
    hospivet: "HOSPIVET",
    clinica: "UNA CLÍNICA veterinaria",
    fundacion: "UNA FUNDACIÓN",
  };
  if (data.tipo === 'Propietario') return 'El DUEÑO';
  return origenes[data.origen] || 'Un CIUDADANO';
};

</script>
