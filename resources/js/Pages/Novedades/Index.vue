<template>
  <Head title="Novedades" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Novedades</h1>
        <PrimaryLink :href="route('novedades.create')"> Agregar </PrimaryLink>
      </div>
    </template>

    <div class="p-4">
      <!-- Tabla -->
      <div class="bg-white shadow-md rounded-lg p-4">
        <DataTable
          :value="novedades.data"
          responsive-layout="scroll"
          class="p-datatable-sm p-4"
        >
          <template #header>
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-bold">Novedades</h2>
              <Pagination :links="novedades.links" />
            </div>
          </template>

          <Column header="#">
            <template #body="slotProps">
              {{ slotProps.index+1 }}
            </template>
          </Column>
          <Column header="Novedad">
            <template #body="slotProps">
              <p>
                <b>Nombre:</b>
                {{ slotProps.data.nombre || "Sin información" }}
              </p>
            </template>
          </Column>

          <Column header="Estado">
            <template #body="slotProps">
              <span
                class="text-green-600 font-bold"
                v-if="slotProps.data.estado"
              >
                Activo
              </span>
              <span class="text-red-600 font-bold" v-else>
                Bloqueado
              </span>
            </template>
          </Column>
          <Column header="Acciones">
            <template #body="slotProps">
              <div class="flex gap-2">
                <SecondaryLink
                  class="hover:scale-105 cursor-pointer"
                  v-tooltip.bottom="'Editar'"
                  :href="route('novedades.edit', slotProps.data.id)"
                >
                  <PencilIcon class="h-6 w-6 text-blue-800" />
                </SecondaryLink>


              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>


  </AuthenticatedLayout>
</template>

<script setup>
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import Pagination from "@/Components/Pagination.vue";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import VueEasyLightbox from "vue-easy-lightbox";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  novedades: {
    type: Object,
    default: () => ({}),
  },
});





</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
