<template>
    <div class="h-screen flex items-center justify-center bg-option1 px-6" :class="{ '!h-full': isRegister }">

        <div class="w-full rounded-md p-6 shadow-md z-20"
            :class="[isRegister ? 'max-w-4xl' : 'max-w-sm ', HandleContrast ? 'bg-black' : 'bg-white']">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, inject } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { useToast } from 'vue-toast-notification';

defineProps(['isRegister']);
const $toast = useToast();

const HandleContrast = ref(usePage().props.accesibilidad.contraste);
const HandleLetra = ref(usePage().props.accesibilidad.letra);
const HandleActivated = ref('');

const toggleContrast = () => {
    HandleContrast.value = !HandleContrast.value;
    console.log(HandleContrast.value);
    usePage().props.accesibilidad.contraste = HandleContrast.value;
}

const toggleLetra = (num, estado) => {

    if (num >= 2) {
        HandleLetra.value = 2;
        let instance = $toast.open({
            message: "Limite de aumento de letra alcanzado",
            type: 'warning',
            position: 'top-right',
            duration: 4000,
            pauseOnHover: true,

        });
    } else if (num <= -2) {
        HandleLetra.value = -2;
        let instance = $toast.open({
            message: "Limite de reducción de letra alcanzado",
            type: 'warning',
            position: 'top-right',
            duration: 4000,
            pauseOnHover: true,

        });
    } else {
        HandleLetra.value = num;
    }

    HandleActivated.value = estado;
    usePage().props.accesibilidad.letra = HandleLetra.value;
}

</script>

<style scoped>
.p-tooltip {
    background: #3366cc;
}
</style>
