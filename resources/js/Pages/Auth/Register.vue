<template>
  <Head title="Registro" />

  <GuestLayout :isRegister="true">
    <!-- <div class="absolute sm:top-0 top-6 sm:right-[-18%] xl:right-12 xs:left-6">
            <button v-if="isFirstTime" class="w-[15%]" @click="playInfo">
                <PlayCircleIcon class="w-full text-gray-600" />
            </button>
            <button v-if="!isFirstTime && handledAudio" class="w-[15%]">
                <SpeakerWaveIcon class="w-full text-blue-800" />
            </button>
        </div> -->
    <div class="flex w-full">
      <Link href="/" class="flex items-center justify-center">
        <ApplicationLogo class="w-full sm:w-2/6 fill-current text-gray-500" />
      </Link>

      <!-- <div class="flex items-center justify-center">
                <img :src="logoViveD">
            </div> -->
    </div>

    <form @submit.prevent="submit">
      <div class="mt-6 justify-center">
        <Steps :model="items" v-model:activeStep="active" />
      </div>

      <div class="rounded-xl shadow-xl p-4">
        <!-- Formulario de registro 1 -->
        <div class="justify-center font-medium" v-if="active == 0">
          <div class="w-full mt-6 sm:grid grid-cols-2 gap-4">
            <!-- nombre completo -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="nombres"
                value="Nombre Completo(*)"
              />
              <TextInput
                id="nombres"
                type="text"
                class="mt-1 block w-full p-0 sm:p-2"
                v-model="form.nombre"
                required
                autocomplete="nombre"
              />
              <InputError class="mt-1" :message="form.errors.nombre" />
            </div>

            <!-- edad e identificacion -->
            <div class="col-span-2 mb-4 sm:flex">
              <!-- edad -->
              <div class="w-3/12 sm:pe-6">
                <InputLabel
                  class="sm:text-sm text-xs"
                  for="edad"
                  value="Edad(*)"
                />
                <TextInput
                  id="edad"
                  type="number"
                  class="mt-1 p-0 sm:p-2 block w-full"
                  v-model="form.edad"
                  required
                  autocomplete="edad"
                />
                <InputError class="mt-1" :message="form.errors.edad" />
              </div>

              <!-- identificacion -->
              <div class="w-full sm:w-9/12 grid grid-cols-4 gap-4 mt-4 sm:mt-0">
                <!-- tipo de identificacion -->
                <div class="col-span-1">
                  <InputLabel
                    for="tipo"
                    value="Tipo(*)"
                    class="text-neutral-500 sm:text-sm text-xs"
                  />
                  <select
                    id="tipo"
                    name="tipo"
                    v-model="form.tipo_documento"
                    class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option
                      class="text-black text-[9px] sm:text-xs"
                      v-for="tipo in tipoIden"
                      :key="tipo.id"
                      :value="tipo.nombre"
                    >
                      {{ tipo.nombre }}
                    </option>
                  </select>
                  <InputError
                    class="mt-1"
                    :message="form.errors.tipo_documento"
                  />
                </div>
                <!-- Identificacion -->
                <div class="col-span-3">
                  <InputLabel
                    for="identificacion"
                    value="Identificación(*)"
                    class="sm:text-sm text-xs"
                  />
                  <TextInput
                    id="identificacion"
                    type="number"
                    class="mt-1 block w-full p-0 sm:p-2"
                    v-model="form.identificacion"
                    required
                    autocomplete="identificacion"
                  />
                  <InputError
                    class="mt-1"
                    :message="form.errors.identificacion"
                  />
                </div>
              </div>
            </div>

            <!-- zona -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="zona(*)"
                value="Zona(*)"
              />
              <select
                name="zona"
                id="zona"
                v-model="form.zona"
                class="mt-1 block w-full p-0 sm:p-2 rounded-md"
              >
                <option value="" disabled>Seleccione una zona</option>
                <option value="Urbana">Urbana</option>
                <option value="Rural">Rural</option>
              </select>
              <InputError class="mt-1" :message="form.errors.zona" />
            </div>
            <!-- Sector -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="sector"
                value="Comuna o corregimiento(*)"
              />

              <Select
                :disabled="!form.zona"
                id="sector"
                v-model="form.sector"
                :options="lugaresFiltrados"
                filter
                optionLabel="label"
                placeholder="Seleccione una comuna o corregimiento"
                checkmark
                :highlightOnSelect="false"
                class="w-full"
              />
              <InputError class="mt-1" :message="form.errors.sector" />
            </div>

            <!-- direccion -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="direccion"
                value="Dirección de residencia(*)"
              />
              <TextInput
                id="direccion"
                type="text"
                class="mt-1 block w-full p-0 sm:p-2"
                v-model="form.direccion"
                required
                autocomplete="dirección"
              />
              <InputError class="mt-1" :message="form.errors.direccion" />
            </div>

            <!-- telefono -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="fijo"
                value="Teléfono Fijo"
              />
              <TextInput
                id="fijo"
                class="mt-1 block w-full p-0 sm:p-2"
                v-model="form.telefono"
                autocomplete="telefono"
              />
              <InputError class="mt-1" :message="form.errors.telefono" />
            </div>
            <!-- telefono celular -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="celular"
                value="Teléfono Celular(*)"
              />
              <TextInput
                id="celular"
                type="number"
                class="mt-1 block w-full p-0 sm:p-2"
                v-model="form.celular"
                required
                autocomplete="celular"
              />
              <InputError class="mt-1" :message="form.errors.celular" />
            </div>
            <!-- email -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="email"
                value="Correo electrónico(*)"
              />
              <TextInput
                id="email"
                type="email"
                class="mt-1 block w-full p-0 sm:p-2"
                v-model="form.email"
                autofocus
                required
                autocomplete="username"
              />
              <InputError class="mt-1" :message="form.errors.email" />
            </div>
            <!-- aviso contraseña -->
            <div class="mb-4">
              <div class="bg-azul rounded-md p-2 w-full h-full">
                <p class="text-white text-base">
                  Asegúrese de que la contraseña sea fácil de recordar para
                  usted, ya que la necesitará para acceder a su cuenta para
                  descargar certificados o registrar nuevos caninos.
                </p>
              </div>
            </div>
            <!-- Contraseña -->
            <div class="mb-4">
              <InputLabel
                for="password"
                value="Contraseña (mínimo: 8 caracteres)"
              />
              <Password
                id="password"
                v-model="form.password"
                required
                toggleMask
              />

              <InputError class="mt-2" :message="form.errors.password" />
            </div>
          </div>

          <!-- botones -->
          <div class="flex pt-4 justify-end">
            <button
              type="button"
              @click="nextStep(1)"
              class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white p-2 rounded-md shadow-xl"
            >
              Siguiente
            </button>
          </div>
        </div>

        <!-- Formulario de registro 2 -->
        <div class="justify-center font-medium" v-if="active == 1">
          <div class="w-full mt-6 sm:grid grid-cols-2 gap-4">
            <!-- nombre canino -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="nombre_canino"
                value="Nombre del canino(*)"
              />
              <TextInput
                id="nombre_canino"
                type="text"
                class="mt-1 block w-full p-0 sm:p-2"
                v-model="form.nombre_canino"
                required
                autocomplete="nombre_canino"
              />
              <InputError class="mt-1" :message="form.errors.nombre_canino" />
            </div>

            <!-- sexo -->
            <div class="mb-4">
              <InputLabel
                class="sm:text-sm text-xs"
                for="sexo"
                value="Sexo(*)"
              />
              <select
                id="sexo"
                name="sexo"
                v-model="form.sexo"
                class="mt-1 block w-full p-0 sm:p-2 rounded-md"
              >
                <option value="" disabled>Seleccione un sexo</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
              <InputError class="mt-1" :message="form.errors.sexo" />
            </div>

            <!-- caracteristicas -- observaciones -->
            <div class="flex flex-wrap gap-2">
              <!-- caractristicas -->
              <div class="mb-4">
                <InputLabel
                  class="sm:text-sm text-xs"
                  for="caracteristicas"
                  value="Características del canino(*)"
                />
                <Textarea
                  id="caracteristicas"
                  type="text"
                  class="mt-1 block w-full p-0 sm:p-2"
                  v-model="form.caracteristicas"
                  required
                  autocomplete="caracteristicas"
                  autoResize
                  rows="4"
                  cols="20"
                  placeholder="con manchas negras, orejas caídas, etc."
                />
                <InputError
                  class="mt-1"
                  :message="form.errors.caracteristicas"
                />
              </div>
              <!-- observaciones -->
              <div class="mb-4">
                <InputLabel
                  class="sm:text-sm text-xs"
                  for="observaciones"
                  value="Observaciones del canino(*)"
                />
                <Textarea
                  id="observaciones"
                  type="text"
                  class="mt-1 block w-full p-0 sm:p-2"
                  v-model="form.observaciones"
                  required
                  autocomplete="observaciones"
                  autoResize
                  rows="4"
                  cols="20"
                  placeholder="jugueton, ladrador, amigable, etc."
                />
                <InputError class="mt-1" :message="form.errors.observaciones" />
              </div>
            </div>
            <!-- esterilizado -- entrenamiento -- es agresivo ... -->
            <div class="mb-4 relative">
              <table class="border border-gray-200 w-full rounded-lg">
                <thead class="bg-gray-200">
                  <tr>
                    <th
                      class="text-center items-center text-xs sm:text-sm"
                    ></th>
                    <th class="text-center items-center text-xs sm:text-sm">
                      Si
                    </th>
                    <th class="text-center items-center text-xs sm:text-sm">
                      No
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- esterilizado -->
                  <tr class="mb-4">
                    <td class="border border-gray-200 p-2">
                      ¿Ha sido esterilizado?
                    </td>
                    <td class="border border-gray-200 p-2 w-auto">
                      <div class="flex justify-center w-full">
                        <RadioButton
                          class="flex justify-center items-center"
                          v-model="form.esterilizado"
                          value="Si"
                          variant="filled"
                        />
                      </div>
                    </td>
                    <td class="border border-gray-200 p-2 w-auto">
                      <div class="flex justify-center w-full">
                        <RadioButton
                          class="flex justify-center items-center"
                          v-model="form.esterilizado"
                          value="No"
                          variant="filled"
                        />
                      </div>
                    </td>
                  </tr>
                  <!-- tiene agresiones -->
                  <tr class="mb-4">
                    <td class="border border-gray-200 p-2">
                      ¿Ha tenido episodios de agresiones a personas; o le ha
                      causado la muerte a otros perros?
                    </td>
                    <td class="border border-gray-200 p-2 w-auto">
                      <div class="flex justify-center w-full">
                        <RadioButton
                          class="flex justify-center items-center"
                          v-model="form.tiene_agresiones"
                          value="Si"
                          variant="filled"
                        />
                      </div>
                    </td>
                    <td class="border border-gray-200 p-2 w-auto">
                      <div class="flex justify-center w-full">
                        <RadioButton
                          class="flex justify-center items-center"
                          v-model="form.tiene_agresiones"
                          value="No"
                          variant="filled"
                        />
                      </div>
                    </td>
                  </tr>
                  <!-- entrenado para el ataque -->
                  <tr class="mb-4">
                    <td class="border border-gray-200 p-2">
                      ¿Ha sido adiestrado para el ataque y defensa?
                    </td>
                    <td class="border border-gray-200 p-2 w-auto">
                      <div class="flex justify-center w-full">
                        <RadioButton
                          class="flex justify-center items-center"
                          v-model="form.entrenado_ataque"
                          value="Si"
                          variant="filled"
                        />
                      </div>
                    </td>
                    <td class="border border-gray-200 p-2 w-auto">
                      <div class="flex justify-center w-full">
                        <RadioButton
                          class="flex justify-center items-center"
                          v-model="form.entrenado_ataque"
                          value="No"
                          variant="filled"
                        />
                      </div>
                    </td>
                  </tr>
                  <!-- entrenado para protección -->
                  <tr class="mb-4">
                    <td class="border border-gray-200 p-2">
                      ¿Destinado a Guarda Protección u actividades afines de
                      seguridad?
                    </td>
                    <td class="border border-gray-200 p-2 w-auto">
                      <div class="flex justify-center w-full">
                        <RadioButton
                          class="flex justify-center items-center"
                          v-model="form.entrenado_proteccion"
                          value="Si"
                          variant="filled"
                        />
                      </div>
                    </td>
                    <td class="border border-gray-200 p-2 w-auto">
                      <div class="flex justify-center w-full">
                        <RadioButton
                          class="flex justify-center items-center"
                          v-model="form.entrenado_proteccion"
                          value="No"
                          variant="filled"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- fecha nacimiento y edad -->
            <div class="flex flex-wrap gap-2">
              <!-- fecha de nacimiento -->
              <div class="mb-4 sm:w-4/6">
                <InputLabel
                  class="sm:text-sm text-xs"
                  for="fecha_nacimiento"
                  value="Fecha de nacimiento aproximada(*)"
                />
                <TextInput
                  id="fecha_nacimiento"
                  type="date"
                  class="mt-1 block w-full p-0 sm:p-2"
                  v-model="form.fecha_nacimiento"
                  required
                  autocomplete="fecha_nacimiento"
                  :max="hoy"
                />
                <InputError
                  class="mt-1"
                  :message="form.errors.fecha_nacimiento"
                />
              </div>
              <!-- edad canino -->
              <div class="mb-4">
                <InputLabel
                  class="sm:text-sm text-xs"
                  for="edad_canino"
                  value="Edad del canino(*)"
                />
                <div
                  class="block bg-gray-200/80 border-gray-400 mt-1 w-full rounded-md form-input focus:border-sky-600 p-0 sm:p-2"
                >
                  {{ form.edad_canino == 0 ? "Cachorro" : form.edad_canino }}
                </div>
              </div>
            </div>

            <!-- raza -->
            <div class="mb-4 relative">
              <div class="flex items-center gap-2">
                <InputLabel
                  class="sm:text-sm text-xs"
                  for="raza"
                  value="Raza(*)"
                />
                <!-- Icono de ayuda con tooltip -->
                <div class="relative group">
                  <QuestionMarkCircleIcon
                    class="w-5 h-5 text-blue-500"
                    v-tooltip.bottom="
                      'Seleccione la raza de su canino. Si no está en la lista, elija la opción más cercana. Si no está seguro, seleccione la opción Criollo.'
                    "
                  />
                </div>
              </div>

              <Select
                id="raza"
                v-model="form.raza"
                :options="razasVisibles"
                filter
                optionLabel="label"
                placeholder="Seleccione una raza"
                checkmark
                :highlightOnSelect="false"
                class="w-full"
              />
              <InputError class="mt-1" :message="form.errors.raza" />
            </div>
            <!-- imagen -->
            <div class="mb-4 relative col-span-2">
              <InputLabel
                class="sm:text-sm text-xs"
                for="foto_url"
                value="Foto del canino(*)"
              />

              <div class="flex flex-col gap-2">
                <!-- Apartado de ayuda -->
                <div
                  class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md"
                >
                  <p class="text-xs sm:text-sm text-blue-800 font-medium">
                    📸 Recomendación: La foto debe ser tomada de frente y el
                    canino debe ser claramente visible.
                  </p>
                  <div class="sm:flex items-center gap-3 mt-2">
                    <!-- imagen ejemplo -->
                    <div class="mb-4">
                      <p class="sm:text-base text-xs text-gray-600">
                        ejemplo foto de canino pastor alemán.
                      </p>
                      <img
                        :src="ejemploFoto"
                        alt="ejemplo foto canino"
                        class="sm:w-36 w-24 rounded-md border filter grayscale hover:grayscale-0 transition"
                      />
                    </div>
                    <!-- texto y input -->
                    <div class="mb-4">
                      <p class="sm:text-base text-xs text-gray-600">
                        Cargue o subida de foto del canino (formato jpg, png o
                        jpeg)
                      </p>
                      <div class="h-full">
                        <!-- Input para cargar la imagen -->
                        <TextInput
                          id="foto_url"
                          type="file"
                          class="mt-1 sm:h-36 block w-full p-0 sm:p-2"
                          @change="onImageChange"
                          accept="image/*"
                        />
                        <InputError
                          class="mt-1"
                          :message="form.errors.foto_url"
                        />

                        <!-- Vista previa de la imagen -->
                        <div v-if="previewImage" class="relative mt-2">
                          <img
                            :src="previewImage"
                            alt="Vista previa de la imagen"
                            class="w-40 h-40 object-contain rounded-md border"
                          />
                          <!-- Botón para eliminar la imagen -->
                          <button
                            type="button"
                            @click="removeImage"
                            class="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow-md hover:bg-red-600"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- carnet vacunacion -->
            <div class="mb-4 relative">
              <InputLabel
                class="sm:text-sm text-xs"
                for="foto_url"
                value="Carnet de vacunación vigente (un solo pdf con ambas caras)(*)"
              />
              <div class="flex flex-col gap-2">
                <!-- Input para cargar la imagen -->
                <TextInput
                  id="carnet_vacunacion (pdf)"
                  type="file"
                  class="mt-1 block w-full p-0 sm:p-2"
                  @change="onPdfChange"
                  accept="application/pdf"
                />
                <InputError class="mt-1" :message="form.errors.vacunas" />
              </div>
              <div class="mt-2">
                <em class="font-normal text-sm">
                  Cargar pdf con ambas caras de carnet de vacunación
                </em>
              </div>
            </div>
            <!-- Poliza -->
            <div class="mb-4 relative">
              <div class="flex items-center gap-2">
                <InputLabel
                  class="sm:text-sm text-xs"
                  for="poliza"
                  value="Póliza de responsabilidad civil extracontractual vigente (pdf)"
                />
                <!-- Icono de ayuda con tooltip -->
                <div class="relative group">
                  <QuestionMarkCircleIcon
                    class="w-5 h-5 text-blue-500"
                    v-tooltip.bottom="
                      'Aunque no es obligatoria, se recomienda subirla. Cubre daños o lesiones causados por el canino. El sistema no se hace responsable si no se adjunta.'
                    "
                  />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <!-- Input para cargar la imagen -->
                <TextInput
                  id="poliza"
                  type="file"
                  class="mt-1 block w-full p-0 sm:p-2"
                  @change="onPdfChange1"
                  accept="application/pdf"
                />
                <InputError class="mt-1" :message="form.errors.poliza" />
              </div>
              <div class="mt-2">
                <em class="font-normal text-sm">
                  debe ser expedida a través de una compañía de seguros
                  autorizada en el país
                  <a
                    class="underline text-blue-600"
                    target="_blank"
                    href="https://www.fasecolda.com/fasecolda/companias-afiliadas/"
                    >Más info</a
                  >
                </em>
              </div>
            </div>

            <!-- ncheck tratamiento datos -->
            <div class="mb-4 col-span-2">
              <input
                type="checkbox"
                id="consentimiento1"
                name="consentimiento1"
                required
                v-model="form.checked"
              />
              <label
                for="consentimiento1"
                class="ps-4 pe-12 sm:text-base text-sm text-gray-500"
                >Conozco y Acepto la Política de Privacidad de Datos
                <a
                  href="https://www.pereira.gov.co/publicaciones/38/politicas-de-privacidad-y-condiciones-de-uso/"
                  target="_blank"
                  class="underline !text-azul cursor-pointer"
                  >politica</a
                ></label
              >
              <InputError class="mt-1" :message="form.errors.checked" />
            </div>
            <!-- declaración juramentada -->
            <div class="mb-4 col-span-2">
              <input
                type="checkbox"
                id="consentimiento2"
                name="consentimiento2"
                required
                v-model="form.declaracion"
              />
              <label
                for="consentimiento2"
                class="ps-4 pe-12 sm:text-base text-sm text-gray-500"
                >Declaro bajo la gravedad de juramento que toda la información
                suministrada en este formulario es verídica, completa y
                corresponde a la realidad. Entiendo que proporcionar información
                falsa puede acarrear sanciones legales conforme a la normativa
                vigente.</label
              >
              <InputError class="mt-1" :message="form.errors.declaracion" />
            </div>
            <!-- CAMPO OBLIGATORIO PARA EL USUARIO -->
            <div class="w-full">
              <TextInput
                id="campo_obligatorio"
                type="text"
                class="mt-1 !border-0 hidden"
                v-model="form.campo_obligatorio"
              />
            </div>
          </div>

          <!-- botones -->
          <div class="pt-4 flex justify-between gap-2">
            <div class="flex pt-4 justify-end">
              <button
                type="button"
                @click="prevStep(0)"
                class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white p-2 rounded-md shadow-xl"
              >
                Atras
              </button>
            </div>
            <div class="flex pt-4 justify-end">
              <PrimaryButton
                class="justify-center !p-2 !mb-0 text-xs sm:text-sm"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
              >
                Enviar
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  </GuestLayout>
</template>

<script setup>
import ejemploFoto from "../../../../public/assets/img/ejemplo_foto.jpeg";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm, router, usePage } from "@inertiajs/vue3";
import { useReCaptcha } from "vue-recaptcha-v3";

import { ref, watch, inject } from "vue";

import { useToast } from "vue-toast-notification";
import {
  SpeakerWaveIcon,
  PlayCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/solid";
// import audioIntro from '../../../../public/assets/audios/inicioForm.wav'

import comunas from "@/shared/comunas.json"; // Importa el JSON
import Razas from "@/shared/razas.json"; // Importa el JSON
import Select from "primevue/select";
import Steps from "primevue/steps";
import Textarea from "primevue/textarea";
import RadioButton from "primevue/radiobutton";
import Password from "primevue/password";

const $toast = useToast();
const { executeRecaptcha } = useReCaptcha();
const swal = inject("$swal");

const props = defineProps({});

const info_usuario = ref([]);

const razasVisibles = ref([]); // lista que se mostrará en el select

const form = useForm({
  nombre: "",
  edad: 0,
  tipo_documento: "",
  identificacion: 0,
  direccion: "",
  zona: "",
  sector: "",
  telefono: "",
  celular: 0,
  email: "",
  password: "",
  //canino
  nombre_canino: "",
  sexo: "",
  fecha_nacimiento: "",
  edad_canino: "edad",
  raza: "",
  caracteristicas: "",
  es_peligroso: "",
  tiene_agresiones: "",
  entrenado_ataque: "",
  entrenado_proteccion: "",
  esterilizado: "",
  observaciones: "",
  foto_url: "",
  vacunas: "",
  poliza: "",
  checked: "",
  declaracion: "",
  recaptcha_token: "", // Campo para el token de reCAPTCHA
  campo_obligatorio: "",
});

//valida si ya se reprodujo el audio
const isFirstTime = ref(true);

//handled audio
const handledAudio = ref(true);
// referencia al audio intro
const infoAudio = ref(null);

const lugaresFiltrados = ref([]);

//es peligroso segun ataques o entrenamiento
const esPeligroso = ref(false);

//previsualizacion de la imagen
const previewImage = ref(null);

//ITEMS DEL STEP
const items = ref([
  {
    label: "Propietario",
  },
  {
    label: "Canino",
  },
]);

//ITEMS DEL TIPO DE IDENTIFICACION
const tipoIden = ref([
  { id: "2", nombre: "Cédula Ciudadanía", code: "CC" },
  { id: "3", nombre: "Cédula Extranjería", code: "CE" },
  { id: "4", nombre: "Pasaporte", code: "PP" },
]);

const razasPeligrosasIds = [
  16, 17, 86, 87, 121, 122, 123, 124, 136, 200, 201, 202, 203, 204, 263, 278,
  290, 350, 376,
];

//step activo
const active = ref(0);
//validado
const isValidate = ref(false);

//SABER SI SE ACTIVA EL INPUT DE OTROS
const IsNewGenero = ref(false);

watch(IsNewGenero, (value) => {
  if (value) {
    form.genero = "";
  }
});

// Observa el cambio en la zona seleccionada
watch(
  () => form.zona,
  (nuevaZona) => {
    if (nuevaZona) {
      // Filtra los lugares según la zona seleccionada
      const zonaSeleccionada = comunas.find((zona) => zona.zona === nuevaZona);
      lugaresFiltrados.value = zonaSeleccionada ? zonaSeleccionada.lugares : [];
    } else {
      lugaresFiltrados.value = [];
    }
    // Limpia el sector seleccionado si cambia la zona
    form.sector = "";
  }
);

// Observa todos los campos del formulario y elimina errores automáticamente
watch(
  () => form.data(),
  (nuevoValor) => {
    Object.keys(form.errors).forEach((campo) => {
      if (nuevoValor[campo]) {
        form.errors[campo] = null;
      }
    });
  },
  { deep: true }
);

//watch para detectar el cambio en el input de la edad
watch(
  () => form.fecha_nacimiento,
  (nuevaFecha) => {
    if (nuevaFecha) {
      const fechaActual = new Date();
      const fechaNacimiento = new Date(nuevaFecha);
      let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
      let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
      if (
        mes < 0 ||
        (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())
      ) {
        edad--;
      }
      form.edad_canino = edad;
    } else {
      form.edad_canino = "";
    }
  }
);

// Observa el cambio en la si es peligroso
watch(
  [
    () => form.tiene_agresiones,
    () => form.entrenado_ataque,
    () => form.entrenado_proteccion,
  ],
  ([agresiones, ataque, proteccion]) => {
    const algunoEsSi = [agresiones, ataque, proteccion].includes("Si");
    const todosSonNoOVacio = [agresiones, ataque, proteccion].every(
      (v) => v === "No" || v === ""
    );

    if (algunoEsSi) {
      if (!esPeligroso.value) {
        esPeligroso.value = true;
        razasVisibles.value = obtenerTodasRazas(); // Muestra todas las razas
      }
    }

    if (todosSonNoOVacio) {
      esPeligroso.value = false;
      razasVisibles.value = obtenerRazasPeligrosas(); // Vuelve a mostrar solo peligrosas
    }
  }
);

const hoy = new Date().toISOString().split("T")[0]; // Obtiene la fecha actual en formato YYYY-MM-DD

const obtenerRazasPeligrosas = () => {
  return Razas.filter((raza) => razasPeligrosasIds.includes(raza.id));
};

const obtenerTodasRazas = () => {
  return Razas;
};

// Inicializa solo con las razas peligrosas
razasVisibles.value = obtenerRazasPeligrosas();

//STEP PART
//prev
const prevStep = (num) => {
  active.value = num;
};
//next
const nextStep = (num) => {
  isValidate.value = false;
  switch (num) {
    case 1:
      if (
        form.nombre &&
        form.identificacion &&
        form.edad &&
        form.tipo_documento &&
        form.celular &&
        form.direccion &&
        form.sector &&
        form.email &&
        form.password
      ) {
        isValidate.value = true;
      }
      break;

    default:
      break;
  }

  if (isValidate.value) {
    active.value = num;
  } else {
    if (!form.nombre) {
      form.errors.nombre = "Este campo es requerido.";
    }
    if (!form.identificacion) {
      form.errors.identificacion = "Este campo es requerido.";
    }
    if (!form.edad) {
      form.errors.edad = "Este campo es requerido.";
    }
    if (!form.tipo_documento) {
      form.errors.tipo_documento = "Este campo es requerido.";
    }

    if (!form.direccion) {
      form.errors.direccion = "Este campo es requerido.";
    }
    if (!form.sector) {
      form.errors.sector = "Este campo es requerido.";
    }
    if (!form.zona) {
      form.errors.zona = "Este campo es requerido.";
    }
    if (!form.celular) {
      form.errors.celular = "Este campo es requerido.";
    }
    if (!form.email) {
      form.errors.email = "Este campo es requerido.";
    }
    if (!form.password) {
      form.errors.password = "Este campo es requerido.";
    }
  }
};
//play button
const playInfo = () => {
  isFirstTime.value = false;
  const audio = infoAudio.value;
  audio.play();
  usePage().props.accesibilidad.audio = true;
};

//activar/desactivar sonido
const handleAudio = (num) => {
  isFirstTime.value = false;
  if (num == 0) {
    usePage().props.accesibilidad.audio = true;
  } else if (num == 1) {
    usePage().props.accesibilidad.audio = false;
  }
};

const submit = async () => {
  try {
    // Ejecuta reCAPTCHA y obtiene el token
    const recaptchaToken = await executeRecaptcha("register");

    // Agrega el token al formulario
    form.recaptcha_token = recaptchaToken;

    let esPeligrosa =
      form.tiene_agresiones == "Si" ||
      form.entrenado_ataque == "Si" ||
      form.entrenado_proteccion == "Si";

    if (esPeligrosa) {
      form.es_peligroso = "Si";
    } else {
      form.es_peligroso = "No";
    }

    console.log(form);

    // Envía el formulario
    form.post(route("register"), {
      onSuccess: () => {
        swal
          .fire({
            title: "Registro exitoso",
            text: "Tu registro se ha completado correctamente. el registro del canino será validado internamente. Puedes iniciar sesión con tu correo y contraseña creada, para gestión de nuevos registros o generación de certificados.",
            icon: "success",
            confirmButtonText: "OK",
          })
          .then(() => {
            router.visit(route("login")); // Redirige al login
          });
      },
      onError: () => {
        swal.fire({
          title: "Error en el registro",
          text: "Algo salió mal en el registro. Por favor, revisa los campos o inténtalo nuevamente.",
          icon: "error",
          confirmButtonText: "OK",
        });
      },
    });
  } catch (error) {
    console.log(error);

    swal.fire({
      title: "Error de reCAPTCHA",
      text: "Hubo un problema al validar reCAPTCHA. Por favor, inténtalo nuevamente.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

const onImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
      form.foto_url = file;
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = () => {
  previewImage.value = null;
  form.foto_url = "";
  // Limpia el valor del input file
  const fileInput = document.getElementById("foto_url");
  if (fileInput) {
    fileInput.value = ""; // Restablece el valor del input file
  }
};

const onPdfChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type === "application/pdf") {
    form.vacunas = file;
  } else {
    form.vacunas = "";
    swal.fire({
      title: "Archivo inválido",
      text: "Por favor, selecciona un archivo PDF.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

const onPdfChange1 = (event) => {
  const file = event.target.files[0];
  if (file && file.type === "application/pdf") {
    form.poliza = file;
  } else {
    form.poliza = "";
    swal.fire({
      title: "Archivo inválido",
      text: "Por favor, selecciona un archivo PDF.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
</script>
