<template>
  <Head title="Validación del canino" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Detalle del Registro</h1>
        <SecondaryButton
          @click="goBack"
        >
          Volver a la lista
        </SecondaryButton>
      </div>
    </template>

    <div class="p-4">
      <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 class="text-lg font-bold mb-4 text-blue-900">
          Datos del Propietario
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <b>Nombre:</b>
            {{
              canino.user?.informacion_usuario?.nombre_completo ||
              "Sin información"
            }}
          </div>
          <div>
            <b>Tipo de documento:</b>
            {{ canino.user?.informacion_usuario?.tipo_documento || "N/A" }}
          </div>
          <div>
            <b>Número de documento:</b>
            {{ canino.user?.informacion_usuario?.numero_documento || "N/A" }}
          </div>
          <div>
            <b>Sector:</b>
            {{ canino.user?.informacion_usuario?.comuna || "N/A" }}
          </div>
          <div>
            <b>Zona:</b>
            {{ canino.user?.informacion_usuario?.zona || "N/A" }}
          </div>
          <div>
            <b>Dirección:</b>
            {{ canino.user?.informacion_usuario?.direccion || "N/A" }}
          </div>
        </div>
      </div>

      <div
        class="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-8 items-start"
      >
        <!-- Foto del canino -->
        <div class="flex-shrink-0 flex flex-col items-center">
          <img
            v-if="canino.foto_url"
            :src="getUrl(canino.foto_url)"
            alt="Foto del canino"
            class="w-48 h-48 object-cover rounded-lg border shadow"
          />
          <span v-else class="text-gray-400 italic">Sin foto</span>
        </div>
        <!-- Datos del canino -->
        <div class="flex-1">
          <h2 class="text-lg font-bold mb-4 text-blue-900">Datos del Canino</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><b>Nombre:</b> {{ canino.nombre }}</div>
            <div><b>Edad:</b> {{ canino.edad_canino }}</div>
            <div><b>Raza:</b> {{ canino.raza }}</div>
            <div><b>Sexo:</b> {{ canino.sexo }}</div>
            <div>
              <b>¿Es peligroso?:</b>
              <span
                :class="
                  canino.es_peligroso === 'Sí'
                    ? 'text-red-600 font-bold'
                    : 'text-green-700 font-bold'
                "
              >
                {{ canino.es_peligroso === "Sí" ? "Sí" : "No" }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Botones para ver PDFs -->
      <div
        class="bg-white shadow-md rounded-lg p-6 mt-6 flex flex-col md:flex-row gap-8 items-start"
      >
        <div class="flex flex-col gap-2">
          <b>Vacunas:</b>
          <template v-if="canino.vacunas && canino.vacunas !== 'NA'">
            <SecondaryButton @click="verPdf('vacunas')"
              >Ver Carnet de Vacunación</SecondaryButton
            >
          </template>
          <template v-else>
            <span class="text-gray-400 italic"
              >No tiene carnet de vacunación</span
            >
          </template>
        </div>
        <div class="flex flex-col gap-2">
          <b>Póliza:</b>
          <template v-if="canino.poliza && canino.poliza !== 'NA'">
            <SecondaryButton @click="verPdf('poliza')"
              >Ver Póliza</SecondaryButton
            >
          </template>
          <template v-else>
            <span class="text-gray-400 italic">No tiene póliza</span>
          </template>
        </div>
        
        <!-- Select de motivos de rechazo -->
        <div class="flex flex-col gap-2 w-full md:w-1/3">
          <b>Motivo de rechazo:</b>
          <select
            v-model="form.motivo"
            class="border rounded p-2"
          >
          <option value="" disabled>Seleccione un motivo</option>
            <option value="aprobado">No hay motivos (aprobado)</option>
            <option value="vacunas_vencidas">Vacunas vencidas</option>
            <option value="pdf_vacunas_no_visible">PDF de vacunas no visible</option>
            <option value="pdf_vacunas_incorrecto">PDF de vacunas incorrecto</option>
            <option value="pdf_poliza_incorrecto">PDF de Póliza incorrecto</option>
            <option value="pdf_poliza_no_visible">PDF de Póliza no visible</option>
            <option value="foto_incorrecta">Foto incorrecta o poco visible</option>
          </select>
        </div>
      </div>

      <!-- Botones aprobar/rechazar -->
      <div class="flex flex-col md:flex-row gap-4 mt-8 justify-center items-center h-full">
        <PrimaryButton v-if="canino.estado != 'Aprobado'"
          @click="aprobarRegistro"
          class="flex h-full items-center"
          :disabled="form.processing"
        >
          Aprobar
        </PrimaryButton>
        <SecondaryButton v-if="canino.estado != 'Rechazado'"
          @click="rechazarRegistro"
          class="!bg-red-500 text-white"
          :disabled="form.processing"
        >
          Rechazar
        </SecondaryButton>
      </div>

      <!-- Modal PDF -->
      <div
        v-if="showPdf"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          class="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 h-[80vh] flex flex-col"
        >
          <div class="flex justify-between items-center p-4 border-b">
            <h2 class="text-lg font-bold text-gray-800">
              {{ pdfTitle }}
            </h2>
            <button class="text-gray-500 hover:text-gray-800" @click="closePdf">
              ✕
            </button>
          </div>
          <div class="flex-1 overflow-auto">
            <iframe
              v-if="pdfUrl"
              :src="pdfUrl"
              class="w-full h-full"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { Head, useForm, router } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { ref, inject } from "vue";

const swal = inject('$swal');

const props = defineProps({
  canino: {
    type: Object,
    required: true,
  },
});

const form = useForm({
    id: props.canino.id,
    motivo: "",
})

const getUrl = (url) => `/storage/uploads/caninos/${url}`;

const showPdf = ref(false);
const pdfUrl = ref("");
const pdfTitle = ref("");

const verPdf = (tipo) => {
  if (tipo === "vacunas") {
    pdfUrl.value = `/storage/uploads/vacunas/${props.canino.vacunas}`;
    pdfTitle.value = "Carnet de Vacunación";
  } else if (tipo === "poliza") {
    pdfUrl.value = `/storage/uploads/poliza/${props.canino.poliza}`;
    pdfTitle.value = "Póliza";
  } else if (tipo === "certificado_sanidad") {
    pdfUrl.value = `/storage/uploads/certificado_sanidad/${props.canino.certificado_sanidad}`;
    pdfTitle.value = "Certificado sanidad";
  }
  showPdf.value = true;
};

const closePdf = () => {
  showPdf.value = false;
  pdfUrl.value = "";
  pdfTitle.value = "";
};

const aprobarRegistro =() => {

    form.post(route('aprobarRegistro'), {
        onSuccess: function () {
            swal({
                title: "Registro Aprobado",
                text: "El registro ha sido aprobado exitosamente",
                icon: "success"
            }).then(() => {
                window.location.href = route('gestion_registros.index');
            });
        },
        onError: function () {
            swal({
                title: "Error al aprobar registro",
                text: "Error al intentar aprobar este registro, por favor vuelve a intentar",
                icon: "error"
            })
        }
    });
}

const rechazarRegistro =() => {

    form.post(route('rechazarRegistro'), {
        onSuccess: function () {
            swal({
                title: "Registro Rechazado",
                text: "El registro ha sido rechazado exitosamente",
                icon: "success"
            }).then(() => {
                window.location.href = route('gestion_registros.index');
            });
        },
        onError: function () {
            swal({
                title: "Error al rechazar registro",
                text: "Error al intentar rechazar este registro, por favor vuelve a intentar",
                icon: "error"
            })
        }
    });
}

function goBack() {
  window.history.back()
}


</script>
