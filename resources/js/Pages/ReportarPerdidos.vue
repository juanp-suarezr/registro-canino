<template>
  <Head :title="tituloPagina">
    <link rel="preload" href="/assets/img/apoyoCanino.jpg" as="image" />
  </Head>

  <PageLayout>
    <div class="flex items-center justify-center py-5 mt-0 mb-6 bg-azul">
      <h1 class="text-4xl sm:text-5xl font-bold text-white">{{ tituloPagina }}</h1>
    </div>

    <div class="container mx-auto sm:px-12 px-3 py-8">
      <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <div class="mb-10 text-center">
          <p class="text-xl sm:text-2xl text-gray-800 leading-relaxed">{{ descripcionPagina }}</p>
          <div class="mt-5 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-3 text-base text-blue-800">
            <span class="text-xl">ℹ️</span>
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

        <form @submit.prevent="submit" enctype="multipart/form-data" class="space-y-10">
          <input type="hidden" v-model="form.tipo" />

          <div class="hidden">
            <label>No llenar</label>
            <input type="text" v-model="form.campo_obligatorio" tabindex="-1" autocomplete="off" />
          </div>

          <section class="rounded-2xl border-2 border-orange-100 bg-orange-50/60 p-6 sm:p-8">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <div class="flex items-center gap-3">
                <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-100 text-3xl">🐾</span>
                <div>
                  <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900">Datos de la mascota</h2>
                  <p class="text-base text-gray-600 mt-0.5">Describe cómo es el animal y lo que ocurrió.</p>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
                <button
                  v-if="audioEstado === 'idle'"
                  type="button"
                  @click="hablar('Sección uno: Datos de la mascota. Por favor completa la información del animal: nombre, raza, color, tamaño, fecha y lugar del incidente, estado físico, particularidades, descripción y fotos si tienes.')"
                  class="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-base font-medium text-orange-700 hover:bg-orange-50"
                >
                  <span class="text-xl">🔊</span>
                  <span>Escuchar esta sección</span>
                </button>

                <button
                  v-if="audioEstado === 'playing'"
                  type="button"
                  @click="hablar('Sección uno: Datos de la mascota. Por favor completa la información del animal: nombre, raza, color, tamaño, fecha y lugar del incidente, estado físico, particularidades, descripción y fotos si tienes.')"
                  class="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-4 py-2 text-base font-medium text-orange-800 hover:bg-orange-100"
                >
                  <span class="text-xl">⏸️</span>
                  <span>Pausar</span>
                </button>

                <button
                  v-if="audioEstado === 'paused'"
                  type="button"
                  @click="hablar('Sección uno: Datos de la mascota. Por favor completa la información del animal: nombre, raza, color, tamaño, fecha y lugar del incidente, estado físico, particularidades, descripción y fotos si tienes.')"
                  class="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-4 py-2 text-base font-medium text-orange-800 hover:bg-orange-100"
                >
                  <span class="text-xl">▶️</span>
                  <span>Continuar</span>
                </button>

                <button
                  v-if="audioEstado !== 'idle'"
                  type="button"
                  @click="detenerAudio"
                  class="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-base font-medium text-red-700 hover:bg-red-50"
                >
                  <span class="text-xl">⏹️</span>
                  <span>Detener</span>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-lg font-medium text-gray-800">Nombre del canino (opcional)</label>
                <input type="text" v-model="form.nombre" class="mt-2 block w-full border rounded-xl p-4 text-lg" placeholder="Ej: Max, Luna..." />
              </div>

              <div>
                <div class="flex items-center gap-2">
                  <label class="block text-lg font-medium text-gray-800">¿Qué raza es o a cuál se parece?</label>
                  <div class="relative group">
                    <QuestionMarkCircleIcon class="w-6 h-6 text-blue-500" v-tooltip.bottom="'Seleccione la raza de su canino.'" />
                  </div>
                </div>
                <Select id="raza" v-model="form.raza" :options="Razas" filter optionLabel="label" placeholder="Seleccione una raza" checkmark :highlightOnSelect="false" class="w-full mt-2" />
              </div>

              <div>
                <label class="block text-lg font-medium text-gray-800">¿De qué color es?</label>
                <input type="text" v-model="form.color" class="mt-2 block w-full border rounded-xl p-4 text-lg" placeholder="Ej: Negro, marrón, blanco..." />
              </div>

              <div>
                <label class="block text-lg font-medium text-gray-800">¿Qué tamaño tiene?</label>
                <select v-model="form.tamano" class="mt-2 block w-full border rounded-xl p-4 text-lg">
                  <option value="">Seleccione un tamaño</option>
                  <option value="pequeno">Pequeño</option>
                  <option value="mediano">Mediano</option>
                  <option value="grande">Grande</option>
                </select>
              </div>

              <div>
                <label class="block text-lg font-medium text-gray-800">¿Cuándo lo viste o encontraste?</label>
                <input type="datetime-local" v-model="form.fecha_hora" class="mt-2 block w-full border rounded-xl p-4 text-lg" required />
              </div>

              <div>
                <label class="block text-lg font-medium text-gray-800">{{ etiquetaLugar }} *</label>
                <input type="text" v-model="form.lugar" class="mt-2 block w-full border rounded-xl p-4 text-lg" :placeholder="etiquetaLugar" required />
              </div>

              <div class="md:col-span-2">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-lg font-medium text-gray-800">¿Estado en que se encuentra?</label>
                    <select v-model="form.estado_encuentra" class="mt-2 block w-full border rounded-xl p-4 text-lg">
                      <option value="">Seleccione</option>
                      <option value="muy_bien">Muy bien</option>
                      <option value="bien">Bien</option>
                      <option value="regular">Regular</option>
                      <option value="delicado">Delicado</option>
                      <option value="herido_enfermo">Herido / Enfermo</option>
                    </select>
                  </div>
                  <div v-if="form.estado_encuentra" class="flex items-center">
                    <div class="w-full rounded-xl border border-blue-200 bg-blue-50 p-4 text-base text-gray-700">
                      <div class="font-semibold text-blue-800 mb-1">Información del estado</div>
                      {{ descripcionEstado }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="md:col-span-2">
                <label class="block text-lg font-medium text-gray-800">¿Tiene alguna característica que lo haga fácil de reconocer?</label>
                <textarea v-model="form.particularidades" class="mt-2 block w-full border rounded-xl p-4 text-lg" rows="3" placeholder="Ej: Tiene un collar rojo, una mancha en el ojo izquierdo..."></textarea>
              </div>

              <div class="md:col-span-2">
                <label class="block text-lg font-medium text-gray-800">Cuéntanos qué ocurrió</label>
                <textarea v-model="form.descripcion" class="mt-2 block w-full border rounded-xl p-4 text-lg" rows="5" required></textarea>
              </div>

              <div class="md:col-span-2">
                <label class="block text-lg font-medium text-gray-800">Fotos (máximo 6, opcional)</label>
                <input type="file" multiple @change="onImagesChange" accept="image/*" class="mt-2 block w-full border rounded-xl p-4 text-lg" />
                <div v-if="previews.length > 0" class="flex flex-wrap gap-3 mt-3">
                  <div v-for="(preview, index) in previews" :key="index" class="relative">
                    <img :src="preview" class="h-24 w-24 object-cover rounded-lg border" />
                    <button type="button" @click="removeFoto(index)" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center shadow-sm">✕</button>
                  </div>
                </div>
                <p class="text-base text-gray-500 mt-1">Formatos: JPG, PNG, WebP.</p>
              </div>
            </div>
          </section>

          <section class="rounded-2xl border-2 border-blue-100 bg-blue-50/60 p-6 sm:p-8">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <div class="flex items-center gap-3">
                <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-3xl">👤</span>
                <div>
                  <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900">Datos personales</h2>
                  <p class="text-base text-gray-600 mt-0.5">Información de contacto para que puedan comunicarse contigo.</p>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
                <button
                  v-if="audioEstado === 'idle'"
                  type="button"
                  @click="hablar('Sección dos: Datos personales. Por favor indica quién realiza el reporte, tu nombre completo, número de contacto, correo electrónico y autoriza el uso de tus datos.')"
                  class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-base font-medium text-blue-700 hover:bg-blue-50"
                >
                  <span class="text-xl">🔊</span>
                  <span>Escuchar esta sección</span>
                </button>

                <button
                  v-if="audioEstado === 'playing'"
                  type="button"
                  @click="hablar('Sección dos: Datos personales. Por favor indica quién realiza el reporte, tu nombre completo, número de contacto, correo electrónico y autoriza el uso de tus datos.')"
                  class="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-base font-medium text-blue-800 hover:bg-blue-100"
                >
                  <span class="text-xl">⏸️</span>
                  <span>Pausar</span>
                </button>

                <button
                  v-if="audioEstado === 'paused'"
                  type="button"
                  @click="hablar('Sección dos: Datos personales. Por favor indica quién realiza el reporte, tu nombre completo, número de contacto, correo electrónico y autoriza el uso de tus datos.')"
                  class="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-base font-medium text-blue-800 hover:bg-blue-100"
                >
                  <span class="text-xl">▶️</span>
                  <span>Continuar</span>
                </button>

                <button
                  v-if="audioEstado !== 'idle'"
                  type="button"
                  @click="detenerAudio"
                  class="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-base font-medium text-red-700 hover:bg-red-50"
                >
                  <span class="text-xl">⏹️</span>
                  <span>Detener</span>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-lg font-medium text-gray-800">¿Quién realiza el reporte? *</label>
                <select v-model="form.origen" class="mt-2 block w-full border rounded-xl p-4 text-lg" required>
                  <option value="">Seleccione quién reporta</option>
                  <option value="ciudadano">🧑 Ciudadano (particular)</option>
                  <option value="policia">👮 Policía</option>
                  <option value="hospivet">🏥 Hospivet (Hospital veterinario público)</option>
                  <option value="clinica">🏪 Clínica veterinaria</option>
                  <option value="fundacion">🤝 Fundación de animales</option>
                </select>
              </div>

              <div>
                <label class="block text-lg font-medium text-gray-800">Tu nombre completo *</label>
                <input type="text" v-model="form.nombre_reportante" class="mt-2 block w-full border rounded-xl p-4 text-lg" required />
              </div>

              <div>
                <label class="block text-lg font-medium text-gray-800">Tu número de contacto *</label>
                <input type="tel" v-model="form.contacto" class="mt-2 block w-full border rounded-xl p-4 text-lg" required />
              </div>

              <div>
                <label class="block text-lg font-medium text-gray-800">Email de contacto (opcional)</label>
                <input type="email" v-model="form.email" class="mt-2 block w-full border rounded-xl p-4 text-lg" required />
              </div>

              <div class="md:col-span-2">
                <label class="flex items-start gap-4 rounded-xl border-2 border-gray-200 bg-white p-5 hover:border-gray-300">
                  <input type="checkbox" v-model="form.autorizacion" class="mt-1 h-6 w-6 rounded border-gray-300" required />
                  <span class="text-lg text-gray-700 leading-relaxed">Autorizo la publicación de mis datos de contacto para que la comunidad pueda comunicarse conmigo y ayudar a encontrar al animal, de acuerdo con la <a href="https://www.pereira.gov.co/publicaciones/38/politicas-de-privacidad-y-condiciones-de-uso/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">política de tratamiento de datos</a>. *</span>
                </label>
              </div>
            </div>
          </section>

          <div class="mt-10 flex flex-col-reverse sm:flex-row justify-end gap-4">
            <button type="button" @click="router.visit(route('busqueda.perdidos'))" class="rounded-xl border-2 border-gray-300 bg-white px-6 py-4 text-center text-lg font-medium text-gray-700 hover:bg-gray-50">
              Cancelar
            </button>
            <button type="submit" class="rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-4 text-center text-lg font-medium text-white shadow-sm transition disabled:opacity-50" :class="{ 'opacity-50': form.processing }" :disabled="form.processing">
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
    return "Reportar perro encontrado";
  }
  return "Reportar canino perdido";
});

const descripcionPagina = computed(() => {
  if (props.tipoPreseleccionado === "Propietario") {
    return "¿Perdiste a tu mascota? Cuéntanos lo sucedido y comparte la información para que más personas puedan ayudarte a encontrarla.";
  }
  if (props.tipoPreseleccionado === "Canino perdido") {
    return "¿Encontraste un perro perdido? Repórtalo aquí con fotos y datos para ayudar a que vuelva a casa con su dueño.";
  }
  return "Completa el formulario para generar un reporte.";
});

const previews = ref([]);
const fotosSeleccionadas = ref([]);

const audioEstado = ref("idle");
const textoAuditivoActual = ref("");

const etiquetaLugar = computed(() => {
  if (props.tipoPreseleccionado === "Propietario") {
    return "Dirección de residencia o lugar de vivienda de la mascota";
  }
  if (props.tipoPreseleccionado === "Canino perdido") {
    return "Sector o último lugar visto";
  }
  return "Lugar";
});

const resetearAudio = () => {
  try {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  } catch (e) {
    // silencioso
  }
  audioEstado.value = "idle";
  textoAuditivoActual.value = "";
};

const hablar = (texto) => {
  if (!("speechSynthesis" in window)) {
    alert("Tu navegador no soporta voz.");
    return;
  }

  if (audioEstado.value === "playing" && textoAuditivoActual.value === texto) {
    resetearAudio();
    return;
  }

  if (audioEstado.value === "paused" && textoAuditivoActual.value === texto) {
    resetearAudio();
    return;
  }

  resetearAudio();

  setTimeout(() => {
    try {
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = "es-MX";
      utterance.rate = 0.95;
      utterance.pitch = 1;

      textoAuditivoActual.value = texto;
      audioEstado.value = "playing";

      utterance.onend = () => {
        audioEstado.value = "idle";
        textoAuditivoActual.value = "";
      };

      utterance.onerror = () => {
        audioEstado.value = "idle";
        textoAuditivoActual.value = "";
      };

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      audioEstado.value = "idle";
      textoAuditivoActual.value = "";
    }
  }, 50);
};

const detenerAudio = () => {
  resetearAudio();
};

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

const descripcionEstado = computed(() => {
  const descripciones = {
    muy_bien: "Sano, limpio, cuidado y parece haberse extraviado hace poco.",
    bien: "Sano, pero está algo sucio o despeinado; puede llevar un par de días en la calle.",
    regular: "Flaco, con hambre, sed o desorientado, pero sin heridas ni dolor evidente.",
    delicado: "Flaco, débil o visiblemente demacrado, aunque no presenta lesiones abiertas.",
    herido_enfermo: "Tiene heridas, cojea, sangra o muestra signos claros de dolor o enfermedad.",
  };
  return descripciones[form.estado_encuentra.value] || "";
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
