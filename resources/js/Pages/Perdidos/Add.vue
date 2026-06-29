<template>
  <Head title="Nuevo reporte de animal perdido/encontrado" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Nuevo reporte</h1>
        <SecondaryLink :href="route('perdidos.index')">Volver a la lista</SecondaryLink>
      </div>
    </template>

    <div class="max-w-4xl mx-auto bg-white border shadow-sm rounded-xl mt-8">
      <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
        <h3 class="text-gray-500">Crear nuevo reporte de animal perdido/encontrado</h3>
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
                autocomplete="off"
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
                autocomplete="off"
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
                autocomplete="off"
              />
              <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div>
              <InputLabel for="nombre" value="Nombre del animal (opcional)" />
              <TextInput
                id="nombre"
                type="text"
                class="mt-1 block w-full"
                v-model="form.nombre"
                autocomplete="off"
              />
              <InputError class="mt-2" :message="form.errors.nombre" />
            </div>

            <div>
              <InputLabel for="raza" value="Raza o parecido" />
              <TextInput
                id="raza"
                type="text"
                class="mt-1 block w-full"
                v-model="form.raza"
                placeholder="Ej: Criollo, Pastor Alemán..."
                autocomplete="off"
              />
              <InputError class="mt-2" :message="form.errors.raza" />
            </div>

            <div>
              <InputLabel for="color" value="Color del pelaje" />
              <TextInput
                id="color"
                type="text"
                class="mt-1 block w-full"
                v-model="form.color"
                placeholder="Ej: Negro, marrón, blanco..."
                autocomplete="off"
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
                <option value="">Seleccione</option>
                <option value="Propietario">Dueño busca a su mascota (Perdido)</option>
                <option value="Canino perdido">Alguien encontró un animal (Encontrado)</option>
              </select>
              <InputError class="mt-2" :message="form.errors.tipo" />
            </div>

            <!-- Columna 2 -->
            <div>
              <InputLabel for="fecha_hora" value="Fecha y hora del incidente *" />
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
                placeholder="Ej: Parque Central, carrera 5 # 10-20..."
                required
                autocomplete="off"
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

            <!-- Campos que ocupan ambas columnas -->
            <div class="md:col-span-2">
              <InputLabel for="particularidades" value="Particularidades (señas distintivas)" />
              <textarea
                id="particularidades"
                v-model="form.particularidades"
                class="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                rows="2"
                placeholder="Ej: Tiene un collar rojo, una mancha en el ojo izquierdo..."
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

            <!-- Fotos -->
            <div class="md:col-span-2">
              <InputLabel value="Fotos (máximo 6)" />
              <input
                type="file"
                multiple
                @change="onImagesChange"
                accept="image/*"
                class="mt-1 block w-full border rounded-lg p-2"
              />
              <div v-if="previews.length > 0" class="flex flex-wrap gap-2 mt-2">
                <div v-for="(preview, index) in previews" :key="index" class="relative">
                  <img :src="preview" class="w-20 h-20 object-cover rounded border" />
                  <button
                    type="button"
                    @click="removeFoto(index)"
                    class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <InputError class="mt-2" :message="form.errors.fotos" />
              <p class="text-xs text-gray-500 mt-1">Formatos: JPG, PNG, WebP. Máx 10MB c/u.</p>
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
                  Autorizo la publicación de los datos de contacto para facilitar la comunicación.
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
              Crear reporte
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { ref } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import TextInput from "@/Components/TextInput.vue";

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
  tipo: "",
  fotos: [],
  autorizacion: false,
  origen: "ciudadano",
});

const onImagesChange = (event) => {
  const files = Array.from(event.target.files);
  const maxFotos = 6;

  const nuevasFotos = files.slice(0, maxFotos - fotosSeleccionadas.value.length);

  nuevasFotos.forEach((file) => {
    if (fotosSeleccionadas.value.length < maxFotos) {
      fotosSeleccionadas.value.push(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.value.push(e.target.result);
      };
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

const submit = () => {
  form.post(route("perdidos.store"), {
    forceFormData: true,
    onSuccess: () => {
      form.reset();
      fotosSeleccionadas.value = [];
      previews.value = [];
    },
  });
};
</script>
