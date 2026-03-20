<template>
    <Head title="Agregar usuario" />

    <AuthenticatedLayout>
        <template #header>
            Nuevo usuario
        </template>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl lg:w-1/2 md:w-2/3">
            <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid grid-cols-2 gap-4">
                <h3 class="mt-1 text-gray-500">
                    Nuevo Usuario
                </h3>
                <div class="text-right">
                    <SecondaryLink :href="route('users.index')">
                        Regresar
                    </SecondaryLink>
                </div>

            </div>
            <div class="p-4 md:p-5">
                <form @submit.prevent="submit" class="grid lg:grid-cols-2 gap-4">
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
                        <InputLabel for="password" value="Contraseña" />
                        <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                            autocomplete="new-password" />
                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>

                    <div>
                        <InputLabel for="password_confirmation" value="Confirmar contraseña" />
                        <TextInput id="password_confirmation" type="password" class="mt-1 block w-full"
                            v-model="form.password_confirmation" required autocomplete="new-password" />
                        <InputError class="mt-2" :message="form.errors.password_confirmation" />


                    </div>
                    <div>
                        <InputLabel for="roles" value="Roles" />

                        <div class="card flex justify-content-center">
                            <MultiSelect id="roles" v-model="form.roles_user" display="chip" :options="Object.values(roles)"
                                placeholder="Seleccione rol" :maxSelectedLabels="3" class="w-full md:w-20rem" />
                        </div>
                        <InputError class="mt-2" :message="form.errors.roles_user" />
                    </div>
                    <!-- Información del Usuario -->
                    <div class="col-span-2 mt-4 border-t pt-4">
                        <h3 class="text-md font-medium text-gray-900 mb-4">Información Personal (Opcional)</h3>
                        <div class="grid lg:grid-cols-2 gap-4">
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

                    <div class="col-span-2 mt-4">
                        <div class="flex flex-col items-end">
                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Registrar Usuario
                            </PrimaryButton>
                        </div>
                    </div>

                </form>

            </div>
        </div>

    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import SecondaryLink from "@/Components/SecondaryLink.vue";
import MultiSelect from 'primevue/multiselect';
import { inject } from 'vue';

const swal = inject('$swal');

const props = defineProps({
    roles: {
        type: Object,
        default: () => ({}),
    }
});

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
    roles_user: '',
    informacion_usuario: {
        nombre_completo: '',
        tipo_documento: 'CC',
        numero_documento: '',
        telefono: '',
        celular: '',
        direccion: '',
        comuna: '',
        zona: '',
        edad: ''
    }
});

const submit = () => {
    form.post(route('users.store'), {
        onSuccess: function () {
            form.reset('password', 'password_confirmation');
            swal({
                title: "Registro Guardado",
                text: "El usuario se ha almacenado exitosamente",
                icon: "success"

            })
        }
    });
};
</script>
