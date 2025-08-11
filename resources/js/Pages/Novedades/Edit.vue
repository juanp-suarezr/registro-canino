<template>
  <Head title="Editar novedad" />

  <AuthenticatedLayout>
    <template #header> Editar Novedad </template>

    <div class="w-full grid md:grid-cols-3 gap-4">
      <div class="md:col-span-2 p-4 bg-white rounded-md shadow-md h-full">
        <h2 class="text-lg font-bold mb-4">Editar novedad</h2>
        <form @submit.prevent="submit" class="sm:grid sm:grid-cols-2 gap-4">
          <!-- nombre -->
          <div class="mb-4">
            <label
              for="nombre"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Nombre</label
            >
            <TextInput
              id="nombre"
              type="text"
              class="mt-1 block w-full"
              v-model="form.nombre"
              required
              autofocus
              autocomplete="nombre"
            />

            <InputError class="mt-2" :message="form.errors.nombre" />
          </div>

          <!-- estado -->
          <div class="mb-4">
            <label
              for="estado"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Estado</label
            >
            <select
              id="estado"
              v-model="form.estado"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            >
              <option value="1">Activo</option>
              <option value="0">Bloqueado</option>
            </select>
            <InputError class="mt-2" :message="form.errors.estado" />
          </div>

          <div class="mt-4 flex flex-col items-end">
            <PrimaryButton
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
            >
              Actualizar novedad
            </PrimaryButton>
          </div>
        </form>
      </div>

      <div
        class="md:col-span-1 flex flex-col items-center h-full p-5 bg-white shadow-sm rounded-md"
      >
        <div class="p-4 md:p-5 w-full border border-gray rounded-md shadow-sm">
          <!-- Contenido adicional -->
          <!-- nombre novedad -->
          <div class="mb-6">
            <h3 class="pb-4">
              <span class="bg-azul text-white px-2 py-1 rounded-md shadow-md">
                Nombre
              </span>
            </h3>
            <p class="">{{ form.nombre }}</p>
          </div>
          <!-- código -->
          <div class="mb-8">
            <h3 class="mb-3">
              <span class="bg-azul text-white px-2 py-1 rounded-md shadow-md">
                Estado
              </span>
            </h3>
            <p
              class="font-bold"
              :class="[form.estado == 1 ? 'text-azul' : 'text-red-600']"
            >
              {{ form.estado == 1 ? "Activo" : "Bloqueado" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { ref, computed, watch, inject } from "vue";
import { useForm } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const swal = inject("$swal");

const props = defineProps({
    novedad: {
        type: Object,
        default: () => ({}),
    },

});

const form = useForm({
  nombre: props.novedad.nombre,
  estado: props.novedad.estado,
});

const submit = () => {
  form.patch(route("novedades.update", props.novedad.id), {
    onSuccess: () =>
      swal({
        title: "Novedad actualizada",
        text: "La novedad se ha actualizado exitosamente",
        icon: "success",
      }).then((result) => {
        window.location = route("parametros.index");
      }),
    onError: (errors) => {
      swal({
        title: "Error",
        text: "Ocurrió un error al actualizar el parámetro.",
        icon: "error",
      });
    },
  });
};
</script>
