<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import MultiSelect from 'primevue/multiselect';

import { Link, useForm, usePage } from '@inertiajs/vue3';
import { inject } from 'vue';
const swal = inject('$swal');
const props = defineProps({
    user: {
        type: Object,
        default: () => ({}),
    },
    roles: {
        type: Object,
        default: () => ({}),
    },
    userRoles: {
        type: Object,
        default: () => ({}),
    },
});

const selectedRoles = Object.values(props.userRoles);
const user = props.user;

const submit = () => {
    form.patch(route('users.update', user.id), {
        onSuccess: () => swal({
            title: "Registro Actualizado",
            text: "El usuario se ha actualizado exitosamente",
            icon: "success"
        })
    });
};

const form = useForm({
    name: user.name,
    email: user.email,
    estado: user.estado,
    roles_user: selectedRoles,
    informacion_usuario: {
        nombre_completo: user.informacion_usuario?.nombre_completo || '',
        tipo_documento: user.informacion_usuario?.tipo_documento || 'CC',
        numero_documento: user.informacion_usuario?.numero_documento || '',
        telefono: user.informacion_usuario?.telefono || '',
        celular: user.informacion_usuario?.celular || '',
        direccion: user.informacion_usuario?.direccion || '',
        comuna: user.informacion_usuario?.comuna || '',
        zona: user.informacion_usuario?.zona || '',
        edad: user.informacion_usuario?.edad || ''
    }
});
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Información usuario</h2>

            <p class="mt-1 text-sm text-gray-600">
                Actualice la información del usuario y la dirección de correo electrónico.
            </p>
        </header>
        <form @submit.prevent="submit" class="mt-6 space-y-6">
            <div>
                <InputLabel for="name" value="Nombre" />
                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus
                    autocomplete="name" />
                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div>
                <InputLabel for="email" value="Correo electronico" />

                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required
                    autocomplete="username" />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div>
                <InputLabel for="roles" value="Roles" />

                <div class="card flex justify-content-center">
                    <MultiSelect id="roles" v-model="form.roles_user" display="chip" :options="Object.values(roles)"
                        placeholder="Seleccione rol" :maxSelectedLabels="3" class="w-full md:w-20rem" />
                </div>
                <InputError class="mt-2" :message="form.errors.roles_user" />
            </div>
            <div>
                <InputLabel for="estado" value="Estado" />

                <select id="estado" v-model="form.estado"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option value="Activo">Activo</option>
                    <option value="Bloqueado">Bloqueado</option>
                </select>
                <InputError class="mt-2" :message="form.errors.estado" />
            </div>
            <!-- Información del Usuario -->
            <div class="mt-6 border-t pt-6">
                <h3 class="text-md font-medium text-gray-900 mb-4">Información Personal</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <InputLabel for="nombre_completo" value="Nombre Completo" />
                        <TextInput id="nombre_completo" type="text" class="mt-1 block w-full"
                            v-model="form.informacion_usuario.nombre_completo" />
                    </div>
                    <div>
                        <InputLabel for="tipo_documento" value="Tipo de Documento" />
                        <select id="tipo_documento" v-model="form.informacion_usuario.tipo_documento"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="CC">Cédula de Ciudadanía</option>
                            <option value="CE">Cédula de Extranjería</option>
                            <option value="TI">Tarjeta de Identidad</option>
                            <option value="RC">Registro Civil</option>
                            <option value="NIT">NIT</option>
                        </select>
                    </div>
                    <div>
                        <InputLabel for="numero_documento" value="Número de Documento" />
                        <TextInput id="numero_documento" type="text" class="mt-1 block w-full"
                            v-model="form.informacion_usuario.numero_documento" />
                    </div>
                    <div>
                        <InputLabel for="telefono" value="Teléfono" />
                        <TextInput id="telefono" type="text" class="mt-1 block w-full"
                            v-model="form.informacion_usuario.telefono" />
                    </div>
                    <div>
                        <InputLabel for="celular" value="Celular" />
                        <TextInput id="celular" type="text" class="mt-1 block w-full"
                            v-model="form.informacion_usuario.celular" />
                    </div>
                    <div>
                        <InputLabel for="direccion" value="Dirección" />
                        <TextInput id="direccion" type="text" class="mt-1 block w-full"
                            v-model="form.informacion_usuario.direccion" />
                    </div>
                    <div>
                        <InputLabel for="comuna" value="Comuna" />
                        <TextInput id="comuna" type="text" class="mt-1 block w-full"
                            v-model="form.informacion_usuario.comuna" />
                    </div>
                    <div>
                        <InputLabel for="zona" value="Zona" />
                        <TextInput id="zona" type="text" class="mt-1 block w-full"
                            v-model="form.informacion_usuario.zona" />
                    </div>
                    <div>
                        <InputLabel for="edad" value="Edad" />
                        <TextInput id="edad" type="number" class="mt-1 block w-full"
                            v-model="form.informacion_usuario.edad" />
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-4 mt-6">
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Guardar
                </PrimaryButton>
                <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Actualizado.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
