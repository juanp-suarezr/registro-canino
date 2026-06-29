<template>
  <Head title="Detalle del reporte" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Detalle del reporte #{{ reporte.id }}</h1>
        <SecondaryButton @click="goBack">Volver a la lista</SecondaryButton>
      </div>
    </template>

    <div class="p-4">
      <!-- Estado actual -->
      <div class="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <b>Estado:</b>
          <Tag
            :value="estadoLabel(reporte.estado)"
            :severity="estadoSeverity(reporte.estado)"
            class="text-sm"
          />
          <span class="text-sm text-gray-500">
            ({{ reporte.origen_label }})
          </span>
        </div>
        <div class="flex gap-2 flex-wrap">
          <PrimaryButton
            v-if="reporte.estado === 'pendiente'"
            @click="aprobarReporte"
            :disabled="form.processing"
          >
            Aprobar
          </PrimaryButton>
          <SecondaryButton
            v-if="reporte.estado === 'pendiente' || reporte.estado === 'activo'"
            @click="abrirModalRechazo"
            class="!bg-orange-500 text-white hover:!bg-orange-600"
            :disabled="form.processing"
          >
            Rechazar
          </SecondaryButton>
          <SecondaryButton
            v-if="reporte.estado === 'activo'"
            @click="resolverReporte"
            class="!bg-green-600 text-white hover:!bg-green-700"
            :disabled="form.processing"
          >
            Resuelto
          </SecondaryButton>
          <SecondaryButton
            v-if="reporte.estado === 'activo'"
            @click="noEncontradoReporte"
            class="!bg-gray-500 text-white hover:!bg-gray-600"
            :disabled="form.processing"
          >
            No encontrado
          </SecondaryButton>
        </div>
      </div>

      <!-- Datos del reportante -->
      <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 class="text-lg font-bold mb-4 text-blue-900">Datos del reportante</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><b>Nombre:</b> {{ reporte.nombre_reportante }}</div>
          <div><b>Contacto:</b> {{ reporte.contacto }}</div>
          <div><b>Email:</b> {{ reporte.email || "No registrado" }}</div>
          <div><b>Origen:</b> {{ reporte.origen_label }}</div>
          <div v-if="reporte.usuario">
            <b>Usuario del sistema:</b> {{ reporte.usuario.name }} (ID: {{ reporte.usuario.id }})
          </div>
        </div>
      </div>

      <!-- Datos del animal -->
      <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 class="text-lg font-bold mb-4 text-blue-900">Datos del animal</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><b>Nombre:</b> {{ reporte.nombre || "No reporta" }}</div>
          <div><b>Raza:</b> {{ reporte.raza || "No especificada" }}</div>
          <div><b>Color:</b> {{ reporte.color || "No especificado" }}</div>
          <div><b>Tamaño:</b> {{ reporte.tamano_label }}</div>
          <div><b>Particularidades:</b> {{ reporte.particularidades || "Ninguna" }}</div>
          <div class="md:col-span-2">
            <b>Descripción:</b>
            <p class="mt-1 text-gray-700">{{ reporte.descripcion }}</p>
          </div>
        </div>
      </div>

      <!-- Incidente -->
      <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 class="text-lg font-bold mb-4 text-blue-900">Información del incidente</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><b>Tipo:</b> {{ reporte.tipo_label }}</div>
          <div><b>Fecha y hora:</b> {{ formatDate(reporte.fecha_hora) }}</div>
          <div><b>Lugar:</b> {{ reporte.lugar }}</div>
          <div>
            <b>Estado al ser encontrado:</b>
            {{ reporte.estado_encuentra_label }}
          </div>
          <div><b>Autorización:</b> {{ reporte.autorizacion ? "Sí" : "No" }}</div>
        </div>
      </div>

      <!-- Fotos -->
      <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 class="text-lg font-bold mb-4 text-blue-900">
          Fotos ({{ reporte.cantidad_fotos || 0 }})
        </h2>
        <div v-if="reporte.fotos_urls && reporte.fotos_urls.length > 0" class="flex flex-wrap gap-4">
          <div
            v-for="(url, index) in reporte.fotos_urls"
            :key="index"
            class="relative cursor-pointer"
            @click="abrirLightbox(index)"
          >
            <img
              :src="url"
              :alt="'Foto ' + (index + 1)"
              class="w-40 h-40 object-cover rounded-lg border shadow hover:opacity-80 transition"
            />
            <span class="absolute bottom-1 right-1 bg-black bg-opacity-60 text-white text-xs px-1 rounded">
              {{ index + 1 }}
            </span>
          </div>
        </div>
        <div v-else class="text-gray-400 italic">No se adjuntaron fotos</div>
      </div>

      <!-- Motivo de rechazo (si aplica) -->
      <div
        v-if="reporte.estado === 'rechazado' && reporte.motivo_rechazo"
        class="bg-red-100 border border-red-400 rounded-lg p-4 mb-6"
      >
        <b class="text-red-700">Motivo del rechazo:</b>
        <p class="text-red-600 mt-1">{{ reporte.motivo_rechazo }}</p>
      </div>

      <!-- Información de aprobación -->
      <div
        v-if="reporte.aprobador"
        class="bg-gray-100 rounded-lg p-4 text-sm text-gray-600"
      >
        <b>Última acción por:</b> {{ reporte.aprobador.name }}
        <span v-if="reporte.updated_at">
          ({{ formatDate(reporte.updated_at) }})
        </span>
      </div>
    </div>

    <!-- Modal de motivo de rechazo -->
    <div
      v-if="showModalRechazo"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6">
        <h3 class="text-lg font-bold mb-4">Motivo del rechazo</h3>
        <textarea
          v-model="form.motivo_rechazo"
          class="w-full border rounded-lg p-2"
          rows="4"
          placeholder="Indique el motivo por el cual se rechaza este reporte..."
          required
        ></textarea>
        <div class="flex justify-end gap-2 mt-4">
          <SecondaryButton @click="showModalRechazo = false">Cancelar</SecondaryButton>
          <PrimaryButton
            @click="rechazarReporte"
            :disabled="form.processing || !form.motivo_rechazo"
            class="!bg-red-500"
          >
            Rechazar reporte
          </PrimaryButton>
        </div>
      </div>
    </div>

    <!-- Lightbox de fotos -->
    <div
      v-if="lightboxVisible"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click="cerrarLightbox"
    >
      <button
        class="absolute top-4 right-4 text-white text-2xl"
        @click="cerrarLightbox"
      >
        ✕
      </button>
      <img
        :src="reporte.fotos_urls[lightboxIndex]"
        class="max-w-[90vw] max-h-[90vh] object-contain"
        @click.stop
      />
      <div class="absolute bottom-4 text-white text-sm">
        {{ lightboxIndex + 1 }} / {{ reporte.fotos_urls.length }}
      </div>
      <button
        v-if="lightboxIndex > 0"
        class="absolute left-4 text-white text-4xl hover:text-gray-300"
        @click="lightboxIndex--"
      >
        ‹
      </button>
      <button
        v-if="lightboxIndex < reporte.fotos_urls.length - 1"
        class="absolute right-4 text-white text-4xl hover:text-gray-300"
        @click="lightboxIndex++"
      >
        ›
      </button>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { Head, useForm, router } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import Tag from "primevue/tag";
import { ref, inject } from "vue";
import dayjs from "dayjs";

const swal = inject("$swal");

const props = defineProps({
  reporte: {
    type: Object,
    required: true,
  },
});

const form = useForm({
  id: props.reporte.id,
  motivo_rechazo: "",
});

const showModalRechazo = ref(false);
const lightboxVisible = ref(false);
const lightboxIndex = ref(0);

// Utilities
const getFotoUrl = (foto) => {
  if (!foto || foto === "NA") return null;
  return `/storage/uploads/perdidos/${foto}`;
};

const formatDate = (date) => {
  if (!date) return "N/A";
  return dayjs(date).format("DD/MM/YYYY h:mm A");
};

const estadoLabel = (estado) => {
  const labels = {
    activo: "Activo",
    pendiente: "Pendiente",
    aprobado: "Aprobado",
    rechazado: "Rechazado",
    resuelto: "Resuelto",
    no_encontrado: "No encontrado",
  };
  return labels[estado] || estado;
};

const estadoSeverity = (estado) => {
  const severities = {
    activo: "success",
    pendiente: "warn",
    aprobado: "info",
    rechazado: "danger",
    resuelto: "info",
    no_encontrado: "secondary",
  };
  return severities[estado] || "secondary";
};

// Acciones
const aprobarReporte = () => {
  swal
    .fire({
      title: "¿Aprobar reporte?",
      text: "El reporte será visible al público.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, aprobar",
      cancelButtonText: "Cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        form.post(route("perdidos.aprobar", { id: props.reporte.id }), {
          onSuccess: () => {
            swal.fire("Aprobado", "Reporte visible al público.", "success");
          },
          onError: () => {
            swal.fire("Error", "No se pudo aprobar el reporte.", "error");
          },
        });
      }
    });
};

const abrirModalRechazo = () => {
  form.motivo_rechazo = "";
  showModalRechazo.value = true;
};

const rechazarReporte = () => {
  if (!form.motivo_rechazo) return;

  form.post(route("perdidos.rechazar", { id: props.reporte.id }), {
    onSuccess: () => {
      showModalRechazo.value = false;
      swal.fire("Rechazado", "Reporte rechazado correctamente.", "success");
    },
    onError: () => {
      swal.fire("Error", "No se pudo rechazar el reporte.", "error");
    },
  });
};

const resolverReporte = () => {
  swal
    .fire({
      title: "¿Marcar como resuelto?",
      text: "Confirma que el animal fue recuperado o reunido con su dueño.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, resolver",
      cancelButtonText: "Cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        form.post(route("perdidos.resolver", { id: props.reporte.id }), {
          onSuccess: () => {
            swal.fire("Resuelto", "Reporte marcado como resuelto.", "success");
          },
          onError: () => {
            swal.fire("Error", "No se pudo resolver el reporte.", "error");
          },
        });
      }
    });
};

const noEncontradoReporte = () => {
  swal
    .fire({
      title: "¿Marcar como no encontrado?",
      text: "Confirma que el animal no ha sido encontrado tras las gestiones de búsqueda.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, no encontrado",
      cancelButtonText: "Cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        form.put(route("perdidos.update", { id: props.reporte.id }), {
          nombre_reportante: props.reporte.nombre_reportante,
          contacto: props.reporte.contacto,
          email: props.reporte.email,
          nombre: props.reporte.nombre,
          raza: props.reporte.raza,
          color: props.reporte.color,
          tamano: props.reporte.tamano,
          particularidades: props.reporte.particularidades,
          descripcion: props.reporte.descripcion,
          estado_encuentra: props.reporte.estado_encuentra,
          lugar: props.reporte.lugar,
          fecha_hora: props.reporte.fecha_hora,
          tipo: props.reporte.tipo,
          fotos_existentes: props.reporte.fotos,
          autorizacion: props.reporte.autorizacion,
          origen: props.reporte.origen,
          estado: "no_encontrado",
        }, {
          onSuccess: () => {
            swal.fire("Actualizado", "Reporte marcado como no encontrado.", "success");
          },
          onError: () => {
            swal.fire("Error", "No se pudo actualizar el reporte.", "error");
          },
        });
      }
    });
};

const abrirLightbox = (index) => {
  lightboxIndex.value = index;
  lightboxVisible.value = true;
};

const cerrarLightbox = () => {
  lightboxVisible.value = false;
};

function goBack() {
  window.history.back();
}
</script>
