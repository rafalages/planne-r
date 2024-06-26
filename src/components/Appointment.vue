<script setup>
import { ref } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  duration: String,
  type: String,
})

const cssClasses = ref({
  "col-span-7": props.type === 'full-week',
  "col-span-5": props.type === '5-days',
  "col-span-2": props.type === '2-days',
  "row-span-2": props.duration === 'double',
  "h-1/2": props.duration === 'half',
})
</script>

<template>
  <div :class="cssClasses" class="appointment text-2xl p-1.5 flex flex-wrap align-middle text-center content-center justify-center text-white font-bold">
    <span v-if="icon" class="icon">{{ icon }}&nbsp;</span>
    <span class="title">{{ title }}</span>
  </div>
</template>

<style scoped>

.morning .appointment {
  @apply bg-amber-500
}
.afternoon .appointment {
  @apply bg-green-600
}
.night .appointment {
  @apply bg-blue-600
}
.next-week .appointment {
  @apply bg-gray-400
}
.appointment-group .appointment {
  @apply text-lg
}
.icon {
  font-size: 1.2em;
  transform: translateY(0.13em);
}
</style>
