<template>
  <Head title="Busqueda de caninos perdidos">
    <link rel="preload" href="/assets/img/apoyoCanino.jpg" as="image" />
  </Head>

  <PageLayout>
    <div class="flex items-center justify-center items-center py-4 mt-0 mb-4 bg-azul">
      <h1 class="text-3xl font-bold text-white">Caninos perdidos</h1>
    </div>
    <div class="container mx-auto sm:px-12 px-2">
      <div class="mt-8">
        <h2 class="sm:text-2xl text-lg font-bold text-black">
          ¿Perdiste o encontraste un animal de compañía?
        </h2>
        <p class="mt-4 sm:text-xl text-base">
          Comparte fotos e información para reportar mascotas perdidas o encontradas y ayudar a que regresen a casa.
          <i class="text-parrafo mt-2 block">Difunde el reporte para que más personas puedan ayudar.</i>
        </p>
        <PrimaryButton class="mt-4 sm:text-base text-xs" @click="ReportarCanino = true">
          Reportar caninos perdidos <RocketLaunchIcon class="w-4 h-4 ms-2" />
        </PrimaryButton>
      </div>

      <!-- ============================================================ -->
      <!-- FILTROS DE BÚSQUEDA                                           -->
      <!-- ============================================================ -->
      <div class="bg-white rounded-lg shadow-md p-4 my-6">
        <!-- Fila 1: Búsqueda, Origen, Tipo, Botones -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">Buscar</label>
            <input type="text" v-model="filtroSearch" placeholder="Nombre canino, reportante o lugar..." class="w-full border rounded-lg p-2 text-sm" @keyup.enter="aplicarFiltros" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">Quién reporta</label>
            <select v-model="filtroOrigen" class="w-full border rounded-lg p-2 text-sm" @change="aplicarFiltros">
              <option value="">Todos</option>
              <option value="ciudadano">🧑 Ciudadano</option>
              <option value="policia">👮 Policía</option>
              <option value="hospivet">🏥 Hospivet</option>
              <option value="clinica">🏪 Clínica</option>
              <option value="fundacion">🤝 Fundación</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">Tipo</label>
            <select v-model="filtroTipo" class="w-full border rounded-lg p-2 text-sm" @change="aplicarFiltros">
              <option value="">Todos</option>
              <option value="Propietario">🔍 Mascota perdida</option>
              <option value="Canino perdido">🐾 Mascota reportada</option>
            </select>
          </div>
          <div class="flex items-end gap-2">
            <button @click="aplicarFiltros" class="bg-secondary hover:bg-primary text-white text-sm px-4 py-2 rounded-lg transition flex-1">Buscar</button>
            <button @click="limpiarFiltros" class="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-4 py-2 rounded-lg transition flex-1">Limpiar</button>
          </div>
        </div>

        <!-- Fila 2: Rango de fechas (juntos) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">Fecha desde</label>
            <input type="date" v-model="filtroFechaDesde" class="w-full border rounded-lg p-2 text-sm" @change="aplicarFiltros" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">Fecha hasta</label>
            <input type="date" v-model="filtroFechaHasta" class="w-full border rounded-lg p-2 text-sm" @change="aplicarFiltros" />
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- GRILLA RESPONSIVE (Instagram-style)                          -->
      <!-- ============================================================ -->
      <div v-if="perdidos.data && perdidos.data.length > 0" class="my-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div
            v-for="item in perdidos.data"
            :key="item.id"
            class="border rounded-lg shadow-md bg-white flex flex-col overflow-hidden"
          >
            <!-- ========== SECCIÓN DE FOTOS ========== -->
            <div class="relative flex-shrink-0">
              <div
                class="w-full h-56 bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden"
                @click="(item.fotos_urls || []).length > 0 ? abrirLightbox(item, imagenActiva[item.id] || 0) : null"
              >
                <img
                  v-if="(item.fotos_urls || []).length > 0"
                  :src="(item.fotos_urls || [])[imagenActiva[item.id] || 0]"
                  :alt="item.nombre"
                  class="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div v-else class="flex flex-col items-center justify-center text-gray-400">
                  <svg class="w-12 h-12 text-gray-300 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <span class="text-sm">Sin foto</span>
                </div>
              </div>

              <!-- Tag tipo -->
              <div
                class="absolute top-2 left-2 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md shadow-md flex items-center gap-1"
                :class="item.tipo == 'Propietario' ? 'bg-red-600 text-white' : 'bg-green-700 text-white'"
              >
                <span>{{ item.tipo == 'Propietario' ? '🔍' : '🐾' }}</span>
                <span>{{ item.tipo == 'Propietario' ? 'PERDIDO' : 'REPORTADO' }}</span>
              </div>

              <!-- Contador fotos -->
              <div
                v-if="(item.fotos_urls || []).length > 1"
                class="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-0.5 rounded-full"
              >
                {{ (imagenActiva[item.id] || 0) + 1 }}/{{ item.fotos_urls.length }}
              </div>

              <!-- Miniaturas -->
              <div
                v-if="(item.fotos_urls || []).length > 1"
                class="flex gap-1 px-2 py-2 bg-gray-50 overflow-x-auto"
              >
                <img
                  v-for="(url, idx) in item.fotos_urls"
                  :key="idx"
                  :src="url"
                  :alt="'Foto ' + (idx + 1)"
                  class="w-12 h-12 object-cover rounded border-2 cursor-pointer flex-shrink-0 transition-all duration-200"
                  :class="(imagenActiva[item.id] || 0) === idx ? 'border-blue-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'"
                  @click="imagenActiva[item.id] = idx"
                />
              </div>
            </div>

            <!-- ========== INFORMACIÓN ========== -->
            <div class="p-3 space-y-1.5 text-sm flex-1 overflow-hidden">
              <div
                class="text-xs font-semibold px-2 py-1 rounded-md inline-block mb-1"
                :class="item.tipo == 'Propietario' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'"
              >
                <template v-if="item.tipo == 'Propietario'">
                  🔍 El dueño reportó su mascota como perdida
                </template>
                <template v-else>
                  🐾 {{ origenQuienReporta(item) }} reportó un animal extraviado
                </template>
              </div>

              <div class="font-bold text-base text-blue-900 truncate">
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
                  <button @click="abrirDetalle(item)" class="text-blue-600 hover:text-blue-800 font-semibold text-xs ml-1">Ver más</button>
                </span>
                <span v-else>{{ item.descripcion }}</span>
              </div>

              <div v-if="item.estado_encuentra_label"><b>Estado:</b> {{ item.estado_encuentra_label }}</div>
            </div>

            <!-- Botón -->
            <div class="p-3 pt-0 flex justify-center">
              <button
                type="button"
                @click="abrirDetalle(item)"
                class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white px-4 py-2 rounded-md shadow-md transition-colors w-full"
              >
                Ver detalle completo
              </button>
            </div>
          </div>
        </div>

        <!-- Paginación -->
        <div class="mt-8 flex justify-center" v-if="perdidos.links && perdidos.links.length > 3">
          <Pagination :links="perdidos.links" />
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="my-12 text-secondary text-center sm:text-2xl text-lg font-bold">
        Actualmente no hay caninos perdidos
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

        <div class="flex-1 overflow-y-auto p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div class="w-full h-64 md:h-80 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden" @click="abrirLightbox(detalleData, detalleIndexActivo)">
                <img v-if="(detalleData.fotos_urls || []).length > 0" :src="(detalleData.fotos_urls || [])[detalleIndexActivo]" alt="Foto principal" class="w-full h-full object-contain hover:opacity-90 transition" />
                <span v-else class="text-gray-400">Sin foto</span>
              </div>
              <div v-if="(detalleData.fotos_urls || []).length > 1" class="flex gap-2 mt-3 overflow-x-auto pb-1">
                <img v-for="(url, idx) in detalleData.fotos_urls" :key="idx" :src="url" :alt="'Mini ' + (idx + 1)" class="w-16 h-16 object-cover rounded-lg border-2 cursor-pointer flex-shrink-0" :class="detalleIndexActivo === idx ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200 opacity-70 hover:opacity-100'" @click="detalleIndexActivo = idx" />
              </div>
              <p class="text-xs text-gray-500 mt-3">Reportado: {{ formatDate(detalleData.created_at) }}</p>
            </div>

            <div class="space-y-3 text-sm break-words">
              <div class="text-xs font-semibold px-2 py-1 rounded-md inline-block mb-1" :class="detalleData.tipo == 'Propietario' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'">
                <template v-if="detalleData.tipo == 'Propietario'">🔍 {{ origenQuienReporta(detalleData) }} reportó su mascota como perdida</template>
                <template v-else>🐾 {{ origenQuienReporta(detalleData) }} reportó un animal extraviado</template>
              </div>
              <div><b>Nombre del reportante:</b><p class="break-words">{{ detalleData.nombre_reportante }}</p></div>
              <div><b>Contacto:</b><p class="text-blue-700 font-semibold break-words">{{ detalleData.contacto }}</p></div>
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
              <div><b>Descripción:</b><p class="text-gray-600 mt-1 break-words whitespace-pre-line">{{ detalleData.descripcion }}</p></div>
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

    <!-- Modal formulario reporte -->
    <div v-if="ReportarCanino" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 h-[80vh] flex flex-col">
        <div class="flex justify-between items-center p-4 border-b">
          <h2 class="text-lg font-bold text-gray-800">Reportar canino perdido</h2>
          <button class="text-gray-500 hover:text-gray-800" @click="ReportarCanino = false">✕</button>
        </div>
        <div class="flex-1 overflow-auto p-4">
          <form class="md:grid md:grid-cols-2 md:gap-4" @submit.prevent="submit">
            <div class="mb-4 md:col-span-2">
              <label class="block text-sm font-medium text-gray-700">¿Quién realiza el reporte? *</label>
              <select v-model="form.origen" class="mt-1 block w-full border rounded-lg p-2" required>
                <option value="">Seleccione quién reporta</option>
                <option value="ciudadano">🧑 Ciudadano (particular)</option>
                <option value="policia">👮 Policía</option>
                <option value="hospivet">🏥 Hospivet (Hospital veterinario público)</option>
                <option value="clinica">🏪 Clínica veterinaria</option>
                <option value="fundacion">🤝 Fundación de animales</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Tu nombre completo *</label>
              <input type="text" v-model="form.nombre_reportante" class="mt-1 block w-full border rounded-lg p-2" required />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Tu número de contacto *</label>
              <input type="tel" v-model="form.contacto" class="mt-1 block w-full border rounded-lg p-2" required />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Email de contacto</label>
              <input type="email" v-model="form.email" class="mt-1 block w-full border rounded-lg p-2" required />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Nombre del canino (opcional)</label>
              <input type="text" v-model="form.nombre" class="mt-1 block w-full border rounded-lg p-2" />
            </div>
            <div class="mb-4">
              <div class="flex items-center gap-2">
                <label class="block text-sm font-medium text-gray-700">Raza o parecido</label>
                <div class="relative group">
                  <QuestionMarkCircleIcon class="w-5 h-5 text-blue-500" v-tooltip.bottom="'Seleccione la raza de su canino.'" />
                </div>
              </div>
              <Select id="raza" v-model="form.raza" :options="Razas" filter optionLabel="label" placeholder="Seleccione una raza" checkmark :highlightOnSelect="false" class="w-full" />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Color del pelaje</label>
              <input type="text" v-model="form.color" class="mt-1 block w-full border rounded-lg p-2" placeholder="Ej: Negro, marrón..." />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Tamaño</label>
              <select v-model="form.tamano" class="mt-1 block w-full border rounded-lg p-2">
                <option value="">Seleccione un tamaño</option>
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Tipo de reporte *</label>
              <select v-model="form.tipo" class="mt-1 block w-full border rounded-lg p-2" required>
                <option value="">Seleccione una opción</option>
                <option value="Propietario">Soy el propietario y busco al canino</option>
                <option value="Canino perdido">Reporto un canino que encontré perdido</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Fecha y hora del incidente *</label>
              <input type="datetime-local" v-model="form.fecha_hora" class="mt-1 block w-full border rounded-lg p-2" required />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Lugar *</label>
              <input type="text" v-model="form.lugar" class="mt-1 block w-full border rounded-lg p-2" required />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Estado en que se encuentra</label>
              <select v-model="form.estado_encuentra" class="mt-1 block w-full border rounded-lg p-2">
                <option value="">Seleccione</option>
                <option value="bueno">Buen estado</option>
                <option value="regular">Estado regular</option>
                <option value="malo">Mal estado</option>
                <option value="herido">Herido / Lesionado</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Particularidades</label>
              <textarea v-model="form.particularidades" class="mt-1 block w-full border rounded-lg p-2" rows="2" placeholder="Ej: Tiene un collar rojo..."></textarea>
            </div>
            <div class="mb-4 col-span-2">
              <label class="block text-sm font-medium text-gray-700">Descripción *</label>
              <textarea v-model="form.descripcion" class="mt-1 block w-full border rounded-lg p-2" rows="3" required></textarea>
            </div>
            <div class="mb-4 col-span-2">
              <label class="block text-sm font-medium text-gray-700">Fotos (máximo 6, opcional)</label>
              <input type="file" multiple @change="onImagesChange" accept="image/*" class="mt-1 block w-full border rounded-lg p-2" />
              <div v-if="previews.length > 0" class="flex flex-wrap gap-2 mt-2">
                <div v-for="(preview, index) in previews" :key="index" class="relative">
                  <img :src="preview" class="w-20 h-20 object-cover rounded border" />
                  <button type="button" @click="removeFoto(index)" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">✕</button>
                </div>
              </div>
              <p class="text-xs text-gray-500 mt-1">Formatos: JPG, PNG, WebP.</p>
            </div>
            <div class="mb-4 col-span-2">
              <label class="flex items-start gap-2">
                <input type="checkbox" v-model="form.autorizacion" class="mt-1" required />
                <span class="text-sm text-gray-700">Autorizo la publicación de mis datos de contacto. *</span>
              </label>
            </div>
            <div class="mb-4 hidden col-span-2">
              <label class="block text-sm font-medium text-gray-700">No llenar</label>
              <input type="text" v-model="form.campo_obligatorio" class="mt-1 block w-full border rounded-lg p-2" tabindex="-1" autocomplete="off" />
            </div>
            <div class="flex justify-end mt-4 col-span-2">
              <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
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
import { Head, useForm, router } from "@inertiajs/vue3";
import { ref, inject, reactive } from "vue";
import PageLayout from "@/Layouts/PageLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import { RocketLaunchIcon, QuestionMarkCircleIcon } from "@heroicons/vue/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import Razas from "@/shared/razas.json";
import Select from "primevue/select";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { useReCaptcha } from "vue-recaptcha-v3";
import dayjs from "dayjs";

const { executeRecaptcha } = useReCaptcha();
AOS.init();
const swal = inject("$swal");

const props = defineProps({
  perdidos: { type: Object, default: () => ({ data: [], links: [] }) },
  filters: { type: Object, default: () => ({}) },
});

// ============================================================
// FILTROS DE BÚSQUEDA
// ============================================================
const filtroSearch = ref(props.filters?.search || "");
const filtroOrigen = ref(props.filters?.origen || "");
const filtroTipo = ref(props.filters?.tipo || "");
const filtroFechaDesde = ref(props.filters?.fecha_desde || "");
const filtroFechaHasta = ref(props.filters?.fecha_hasta || "");

const aplicarFiltros = () => {
  router.get("/busqueda-perdidos", {
    search: filtroSearch.value || null,
    origen: filtroOrigen.value || null,
    tipo: filtroTipo.value || null,
    fecha_desde: filtroFechaDesde.value || null,
    fecha_hasta: filtroFechaHasta.value || null,
  }, {
    preserveState: true,
    replace: true,
  });
};

const limpiarFiltros = () => {
  filtroSearch.value = "";
  filtroOrigen.value = "";
  filtroTipo.value = "";
  filtroFechaDesde.value = "";
  filtroFechaHasta.value = "";
  aplicarFiltros();
};

const imagenActiva = reactive({});

// Modal detalle
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

// Lightbox
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

// Utilidades
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
    clinica: "Una CLÍNICA veterinaria",
    fundacion: "Una FUNDACIÓN",
  };
  if (data.tipo === 'Propietario') return 'El DUEÑO';
  return origenes[data.origen] || 'Un CIUDADANO';
};

// Formulario
const ReportarCanino = ref(false);
const previews = ref([]);
const fotosSeleccionadas = ref([]);

const form = useForm({
  nombre_reportante: "", contacto: "", email: "", nombre: "", raza: "", color: "",
  tamano: "", particularidades: "", descripcion: "", estado_encuentra: "", lugar: "",
  fecha_hora: "", tipo: "", fotos: [], autorizacion: false,
  origen: "", campo_obligatorio: "", recaptcha_token: "",
});

const onImagesChange = (event) => {
  const files = Array.from(event.target.files);
  const maxFotos = 6;
  files.slice(0, maxFotos - fotosSeleccionadas.value.length).forEach((file) => {
    if (fotosSeleccionadas.value.length < maxFotos) {
      fotosSeleccionadas.value.push(file);
      const reader = new FileReader();
      reader.onload = (e) => previews.value.push(e.target.result);
      reader.readAsDataURL(file);
    }
  });
  form.fotos = fotosSeleccionadas.value;
};

const removeFoto = (index) => {
  fotosSeleccionadas.value.splice(index, 1);
  previews.value.splice(index, 1);
  form.fotos = fotosSeleccionadas.value;
};

const submit = async () => {
  try {
    form.recaptcha_token = await executeRecaptcha("register");
    form.post(route("crear-reporte"), {
      onSuccess: () => {
        swal.fire({ title: "Registro exitoso", text: "Tu reporte ha sido generado correctamente.", icon: "success", confirmButtonText: "OK" })
          .then(() => window.location.reload());
      },
      onError: () => {
        swal.fire({ title: "Error", text: "Revisa los campos o inténtalo nuevamente.", icon: "error", confirmButtonText: "OK" });
      },
    });
  } catch (error) {
    swal.fire({ title: "Error de reCAPTCHA", text: "Hubo un problema al validar reCAPTCHA.", icon: "error", confirmButtonText: "OK" });
  }
};
</script>
