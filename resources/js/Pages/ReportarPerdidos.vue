<template>
  <Head :title="tituloPagina">
    <link rel="preload" href="/assets/img/apoyoCanino.jpg" as="image" />
  </Head>

  <PageLayout>
    <div class="flex items-center justify-center py-5 mt-0 mb-6 bg-azul">
      <h1 class="text-4xl sm:text-5xl font-bold text-white">{{ tituloPagina }}</h1>
    </div>

    <div class="container mx-auto sm:px-12 px-3 py-8">
      <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <div class="mb-8 text-center">
          <p class="text-lg sm:text-xl text-gray-700 leading-relaxed">{{ descripcionPagina }}</p>
          <div class="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-800">
            <span class="text-base">ℹ️</span>
            <span>
              <span v-if="tipoPreseleccionado === 'Propietario'">
                Al enviar este reporte, compartirás tu información de contacto para que quienes hayan visto a tu mascota puedan comunicarse contigo.
              </span>
              <span v-else>
                Al enviar este reporte, compartirás tu información de contacto para que el dueño del animal pueda comunicarse contigo.
              </span>
            </span>
          </div>
        </div>

        <form @submit.prevent="submit" enctype="multipart/form-data" class="space-y-8">
          <input type="hidden" v-model="form.tipo" />

          <div class="hidden">
            <label>No llenar</label>
            <input type="text" v-model="form.campo_obligatorio" tabindex="-1" autocomplete="off" />
          </div>

          <section class="rounded-xl border border-orange-100 bg-orange-50/60 p-5 sm:p-6">
            <div class="flex items-center gap-2 mb-5">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xl">🐾</span>
              <h2 class="text-xl font-semibold text-gray-900">Información del canino</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-base font-medium text-gray-800">Nombre del canino (opcional)</label>
                <input type="text" v-model="form.nombre" class="mt-1.5 block w-full border rounded-xl p-3 text-base" placeholder="Ej: Max, Luna..." />
              </div>

              <div>
                <div class="flex items-center gap-2">
                  <label class="block text-base font-medium text-gray-800">Raza o parecido</label>
                  <div class="relative group">
                    <QuestionMarkCircleIcon class="w-5 h-5 text-blue-500" v-tooltip.bottom="'Seleccione la raza de su canino.'" />
                  </div>
                </div>
                <Select id="raza" v-model="form.raza" :options="Razas" filter optionLabel="label" placeholder="Seleccione una raza" checkmark :highlightOnSelect="false" class="w-full mt-1.5" />
              </div>

              <div>
                <label class="block text-base font-medium text-gray-800">Color del pelaje</label>
                <input type="text" v-model="form.color" class="mt-1.5 block w-full border rounded-xl p-3 text-base" placeholder="Ej: Negro, marrón, blanco..." />
              </div>

              <div>
                <label class="block text-base font-medium text-gray-800">Tamaño</label>
                <select v-model="form.tamano" class="mt-1.5 block w-full border rounded-xl p-3 text-base">
                  <option value="">Seleccione un tamaño</option>
                  <option value="pequeno">Pequeño</option>
                  <option value="mediano">Mediano</option>
                  <option value="grande">Grande</option>
                </select>
              </div>

              <div>
                <label class="block text-base font-medium text-gray-800">Fecha y hora del incidente *</label>
                <input type="datetime-local" v-model="form.fecha_hora" class="mt-1.5 block w-full border rounded-xl p-3 text-base" required />
              </div>

              <div>
                <label class="block text-base font-medium text-gray-800">Lugar *</label>
                <input type="text" v-model="form.lugar" class="mt-1.5 block w-full border rounded-xl p-3 text-base" placeholder="Ej: Parque Central, carrera 5 # 10-20..." required />
              </div>

              <div>
                <label class="block text-base font-medium text-gray-800">Estado en que se encuentra</label>
                <select v-model="form.estado_encuentra" class="mt-1.5 block w-full border rounded-xl p-3 text-base">
                  <option value="">Seleccione</option>
                  <option value="bueno">Buen estado</option>
                  <option value="regular">Estado regular</option>
                  <option value="malo">Mal estado</option>
                  <option value="herido">Herido / Lesionado</option>
                </select>
              </div>

              <div class="md:col-span-2">
                <label class="block text-base font-medium text-gray-800">Particularidades</label>
                <textarea v-model="form.particularidades" class="mt-1.5 block w-full border rounded-xl p-3 text-base" rows="2" placeholder="Ej: Tiene un collar rojo, una mancha en el ojo izquierdo..."></textarea>
              </div>

              <div class="md:col-span-2">
                <label class="block text-base font-medium text-gray-800">Descripción *</label>
                <textarea v-model="form.descripcion" class="mt-1.5 block w-full border rounded-xl p-3 text-base" rows="4" required></textarea>
              </div>

              <div class="md:col-span-2">
                <label class="block text-base font-medium text-gray-800">Fotos (máximo 6, opcional)</label>
                <input type="file" multiple @change="onImagesChange" accept="image/*" class="mt-1.5 block w-full border rounded-xl p-3 text-base" />
                <div v-if="previews.length > 0" class="flex flex-wrap gap-3 mt-3">
                  <div v-for="(preview, index) in previews" :key="index" class="relative">
                    <img :src="preview" class="h-20 w-20 object-cover rounded-lg border" />
                    <button type="button" @click="removeFoto(index)" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center shadow-sm">✕</button>
                  </div>
                </div>
                <p class="text-sm text-gray-500 mt-1">Formatos: JPG, PNG, WebP.</p>
              </div>
            </div>
          </section>

          <section class="rounded-xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
            <div class="flex items-center gap-2 mb-5">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl">👤</span>
              <h2 class="text-xl font-semibold text-gray-900">Datos del reportante</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-base font-medium text-gray-800">¿Quién realiza el reporte? *</label>
                <select v-model="form.origen" class="mt-1.5 block w-full border rounded-xl p-3 text-base" required>
                  <option value="">Seleccione quién reporta</option>
                  <option value="ciudadano">🧑 Ciudadano (particular)</option>
                  <option value="policia">👮 Policía</option>
                  <option value="hospivet">🏥 Hospivet (Hospital veterinario público)</option>
                  <option value="clinica">🏪 Clínica veterinaria</option>
                  <option value="fundacion">🤝 Fundación de animales</option>
                </select>
              </div>

              <div>
                <label class="block text-base font-medium text-gray-800">Tu nombre completo *</label>
                <input type="text" v-model="form.nombre_reportante" class="mt-1.5 block w-full border rounded-xl p-3 text-base" required />
              </div>

              <div>
                <label class="block text-base font-medium text-gray-800">Tu número de contacto *</label>
                <input type="tel" v-model="form.contacto" class="mt-1.5 block w-full border rounded-xl p-3 text-base" required />
              </div>

              <div>
                <label class="block text-base font-medium text-gray-800">Email de contacto *</label>
                <input type="email" v-model="form.email" class="mt-1.5 block w-full border rounded-xl p-3 text-base" required />
              </div>

              <div class="md:col-span-2">
                <label class="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                  <input type="checkbox" v-model="form.autorizacion" class="mt-0.5 h-5 w-5 rounded border-gray-300" required />
                  <span class="text-base text-gray-700">Autorizo la publicación de mis datos de contacto. *</span>
                </label>
              </div>
            </div>
          </section>

          <div class="mt-8 flex flex-col-reverse sm:flex-row justify-end gap-3">
            <button type="button" @click="router.visit(route('busqueda.perdidos'))" class="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center text-base font-medium text-gray-700 hover:bg-gray-50">
              Cancelar
            </button>
            <button type="submit" class="rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3 text-center text-base font-medium text-white shadow-sm transition disabled:opacity-50" :class="{ 'opacity-50': form.processing }" :disabled="form.processing">
              Enviar reporte
            </button>
          </div>
        </form>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { computed, inject, ref } from "vue";
import { Head, useForm, router } from "@inertiajs/vue3";
import PageLayout from "@/Layouts/PageLayout.vue";
import { QuestionMarkCircleIcon } from "@heroicons/vue/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import Razas from "@/shared/razas.json";
import Select from "primevue/select";
import { useReCaptcha } from "vue-recaptcha-v3";
import dayjs from "dayjs";

const { executeRecaptcha } = useReCaptcha();
AOS.init();
const swal = inject("$swal");

const props = defineProps({
  tipoPreseleccionado: { type: String, default: "" },
});

const tituloPagina = computed(() => {
  if (props.tipoPreseleccionado === "Propietario") {
    return "Reportar mi perro perdido";
  }
  if (props.tipoPreseleccionado === "Canino perdido") {
    return "Reportar perro extraviado";
  }
  return "Reportar canino perdido";
});

const descripcionPagina = computed(() => {
  if (props.tipoPreseleccionado === "Propietario") {
    return "?Perdiste a tu mascota? Cuéntanos lo sucedido y comparte la información para que más personas puedan ayudarte a encontrarla.";
  }
  if (props.tipoPreseleccionado === "Canino perdido") {
    return "?Encontraste un perro perdido? Reportalo aquí con fotos y datos para ayudar a que vuelva a casa con su due?o.";
  }
  return "Completa el formulario para generar un reporte.";
});

const previews = ref([]);
const fotosSeleccionadas = ref([]);

const form = useForm({
  nombre_reportante: "",
  contacto: "",
  email: "",
  nombre: "",
  raza: "",
  color: "",
  tamano: "",
  particularidades: "",
  descripcion: "",
  estado_encuentra: "",
  lugar: "",
  fecha_hora: "",
  tipo: props.tipoPreseleccionado || "",
  fotos: [],
  autorizacion: false,
  origen: "",
  campo_obligatorio: "",
  recaptcha_token: "",
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
          .then(() => router.visit(route("busqueda.perdidos")));
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
