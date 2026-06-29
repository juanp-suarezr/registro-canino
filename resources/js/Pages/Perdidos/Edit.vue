<template>
  <Head :title="'Editar reporte #' + reporte.id" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Editar reporte #{{ reporte.id }}</h1>
        <div class="flex gap-2">
          <SecondaryLink :href="route('perdidos.show', { id: reporte.id })">Ver detalle</SecondaryLink>
          <SecondaryLink :href="route('perdidos.index')">Volver a la lista</SecondaryLink>
        </div>
      </div>
    </template>

    <div class="max-w-4xl mx-auto bg-white border shadow-sm rounded-xl mt-8">
      <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
        <h3 class="text-gray-500">Editando reporte #{{ reporte.id }}</h3>
      </div>
      <div class="p-4 md:p-5">
        <form @submit.prevent="submit" enctype="multipart/form-data">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Columna 1 -->
            <div>
              <InputLabel for="nombre_reportante" value="Nombre del reportante *" />
              <TextInput
                id="nombre_reportante"
                type="text"
                class="mt-1 block w-full"
                v-model="form.nombre_reportante"
                required
              />
              <InputError class="mt-2" :message="form.errors.nombre_reportante" />
            </div>

            <div>
              <InputLabel for="contacto" value="Contacto / Celular *" />
              <TextInput
                id="contacto"
                type="tel"
                class="mt-1 block w-full"
                v-model="form.contacto"
                required
              />
              <InputError class="mt-2" :message="form.errors.contacto" />
            </div>

            <div>
              <InputLabel for="email" value="Email *" />
              <TextInput
                id="email"
                type="email"
                class="mt-1 block w-full"
                v-model="form.email"
                required
              />
              <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div>
              <InputLabel for="nombre" value="Nombre del animal" />
              <TextInput
                id="nombre"
                type="text"
                class="mt-1 block w-full"
                v-model="form.nombre"
              />
              <InputError class="mt-2" :message="form.errors.nombre" />
            </div>

            <div>
              <InputLabel for="raza" value="Raza" />
              <TextInput
                id="raza"
                type="text"
                class="mt-1 block w-full"
                v-model="form.raza"
              />
              <InputError class="mt-2" :message="form.errors.raza" />
            </div>

            <div>
              <InputLabel for="color" value="Color" />
              <TextInput
                id="color"
                type="text"
                class="mt-1 block w-full"
                v-model="form.color"
              />
              <InputError class="mt-2" :message="form.errors.color" />
            </div>

            <div>
              <InputLabel for="tamano" value="Tamaño" />
              <select
                id="tamano"
                v-model="form.tamano"
                class="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
              >
                <option value="">Seleccione</option>
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
              <InputError class="mt-2" :message="form.errors.tamano" />
            </div>

            <div>
              <InputLabel for="tipo" value="Tipo de reporte *" />
              <select
                id="tipo"
                v-model="form.tipo"
                class="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                required
              >
                <option value="Propietario">Dueño busca a su mascota (Perdido)</option>
                <option value="Canino perdido">Alguien encontró un animal (Encontrado)</option>
              </select>
              <InputError class="mt-2" :message="form.errors.tipo" />
            </div>

            <!-- Columna 2 -->
            <div>
              <InputLabel for="fecha_hora" value="Fecha y hora *" />
              <input
                id="fecha_hora"
                type="datetime-local"
                v-model="form.fecha_hora"
                class="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                required
              />
              <InputError class="mt-2" :message="form.errors.fecha_hora" />
            </div>

            <div>
              <InputLabel for="lugar" value="Lugar *" />
              <TextInput
                id="lugar"
                type="text"
                class="mt-1 block w-full"
                v-model="form.lugar"
                required
              />
              <InputError class="mt-2" :message="form.errors.lugar" />
            </div>

            <div>
              <InputLabel for="estado_encuentra" value="Estado en que se encuentra" />
              <select
                id="estado_encuentra"
                v-model="form.estado_encuentra"
                class="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
              >
                <option value="">Seleccione</option>
                <option value="bueno">Buen estado</option>
                <option value="regular">Estado regular</option>
                <option value="malo">Mal estado</option>
                <option value="herido">Herido / Lesionado</option>
              </select>
              <InputError class="mt-2" :message="form.errors.estado_encuentra" />
            </div>

            <div>
              <InputLabel for="origen" value="Origen del reporte *" />
              <select
                id="origen"
                v-model="form.origen"
                class="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                required
              >
                <option value="ciudadano">Ciudadano</option>
                <option value="policia">Policía</option>
                <option value="hospivet">Hospivet</option>
                <option value="clinica">Clínica veterinaria</option>
                <option value="fundacion">Fundación</option>
              </select>
              <InputError class="mt-2" :message="form.errors.origen" />
            </div>

            <div>
              <InputLabel for="estado" value="Estado del reporte *" />
              <select
                id="estado"
                v-model="form.estado"
                class="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                required
              >
                <option value="activo">Activo</option>
                <option value="pendiente">Pendiente</option>
                <option value="aprobado">Aprobado</option>
                <option value="rechazado">Rechazado</option>
                <option value="resuelto">Resuelto</option>
                <option value="no_encontrado">No encontrado</option>
              </select>
              <InputError class="mt-2" :message="form.errors.estado" />
            </div>

            <!-- Campos que ocupan ambas columnas -->
            <div class="md:col-span-2">
              <InputLabel for="particularidades" value="Particularidades" />
              <textarea
                id="particularidades"
                v-model="form.particularidades"
                class="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                rows="2"
              ></textarea>
              <InputError class="mt-2" :message="form.errors.particularidades" />
            </div>

            <div class="md:col-span-2">
              <InputLabel for="descripcion" value="Descripción *" />
              <textarea
                id="descripcion"
                v-model="form.descripcion"
                class="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                rows="3"
                required
              ></textarea>
              <InputError class="mt-2" :message="form.errors.descripcion" />
            </div>

            <!-- Fotos actuales -->
            <div class="md:col-span-2">
              <InputLabel value="Fotos actuales" />
              <div v-if="reporte.fotos && reporte.fotos.length > 0" class="flex flex-wrap gap-2 mt-1">
                <div v-for="(foto, index) in reporte.fotos" :key="index" class="relative">
                  <img
                    :src="'/storage/uploads/perdidos/' + foto"
                    class="w-20 h-20 object-cover rounded border"
                  />
                  <button
                    type="button"
                    @click="eliminarFotoExistente(index)"
                    class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div v-else class="text-gray-400 italic text-sm mt-1">No hay fotos actuales</div>
              <input type="hidden" name="fotos_existentes" :value="JSON.stringify(fotosExistentes)" />
            </div>

            <!-- Agregar nuevas fotos -->
            <div class="md:col-span-2">
              <InputLabel value="Agregar nuevas fotos (máximo {{ 6 - fotosExistentes.length }})" />
              <input
                type="file"
                multiple
                @change="onImagesChange"
                accept="image/*"
                class="mt-1 block w-full border rounded-lg p-2"
                :disabled="fotosExistentes.length >= 6"
              />
              <div v-if="previews.length > 0" class="flex flex-wrap gap-2 mt-2">
                <div v-for="(preview, index) in previews" :key="index" class="relative">
                  <img :src="preview" class="w-20 h-20 object-cover rounded border" />
                  <button
                    type="button"
                    @click="removeFotoNueva(index)"
                    class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <InputError class="mt-2" :message="form.errors.fotos" />
            </div>

            <!-- Autorización -->
            <div class="md:col-span-2">
              <label class="flex items-start gap-2">
                <input
                  type="checkbox"
                  v-model="form.autorizacion"
                  class="mt-1 rounded border-gray-300"
                />
                <span class="text-sm text-gray-700">
                  Autoriza la publicación de datos de contacto
                </span>
              </label>
              <InputError class="mt-2" :message="form.errors.autorizacion" />
            </div>
          </div>

          <div class="mt-6 flex justify-end">
            <PrimaryButton
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
            >
              Guardar cambios
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Head, useForm, router } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import TextInput from "@/Components/TextInput.vue";
import dayjs from "dayjs";

const props = defineProps({
  reporte: {
    type: Object,
    required: true,
  },
});

const previews = ref([]);
const fotosNuevas = ref([]);
const fotosExistentes = ref([]);

const form = useForm({
  nombre_reportante: props.reporte.nombre_reportante || "",
  contacto: props.reporte.contacto || "",
  email: props.reporte.email || "",
  nombre: props.reporte.nombre || "",
  raza: props.reporte.raza || "",
  color: props.reporte.color || "",
  tamano: props.reporte.tamano || "",
  particularidades: props.reporte.particularidades || "",
  descripcion: props.reporte.descripcion || "",
  estado_encuentra: props.reporte.estado_encuentra || "",
  lugar: props.reporte.lugar || "",
  fecha_hora: props.reporte.fecha_hora
    ? dayjs(props.reporte.fecha_hora).format("YYYY-MM-DDTHH:mm")
    : "",
  tipo: props.reporte.tipo || "Propietario",
  fotos: [],
  autorizacion: Boolean(props.reporte.autorizacion),
  origen: props.reporte.origen || "ciudadano",
  estado: props.reporte.estado || "pendiente",
  fotos_existentes: [],
});

onMounted(() => {
  // Inicializar fotos existentes
  if (props.reporte.fotos && Array.isArray(props.reporte.fotos)) {
    fotosExistentes.value = [...props.reporte.fotos];
  }
});

const eliminarFotoExistente = (index) => {
  fotosExistentes.value.splice(index, 1);
};

const onImagesChange = (event) => {
  const files = Array.from(event.target.files);
  const disponibles = 6 - fotosExistentes.value.length;

  files.slice(0, disponibles).forEach((file) => {
    fotosNuevas.value.push(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      previews.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  });

  form.fotos = fotosNuevas.value;
};

const removeFotoNueva = (index) => {
  fotosNuevas.value.splice(index, 1);
  previews.value.splice(index, 1);
  form.fotos = fotosNuevas.value;
};

const submit = () => {
  form.fotos_existentes = fotosExistentes.value;
  form.fotos = fotosNuevas.value;

  form.put(route("perdidos.update", { id: props.reporte.id }), {
    forceFormData: true,
    onSuccess: () => {
      fotosNuevas.value = [];
      previews.value = [];
    },
  });
};
</script>
