<template>
    <label class="block text-sm text-parrafo">
        <template v-if="value">
            <span v-html="formattedValue"></span>
        </template>
        <template v-else>
            <slot />
        </template>
    </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['value'])

const formattedValue = computed(() => {
  if (!props.value) return ''
  // Reemplaza (*) por la misma secuencia en rojo
  return props.value.replace(
    /\(\*\)/g,
    '<span class="text-red-500 font-semibold">*</span>'
  )
})
</script>
