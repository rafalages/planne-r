<script setup>
import { computed } from 'vue'

defineProps({
  name: String,
  type: String,
})

const cssClasses = computed(()=>{
  return 'bg-gray-600'
})

</script>

<template>
  <div :class="cssClasses" class="day-part text-4xl p-2 flex flex-wrap text-center content-center justify-center bg-gray-400 font-bold">
    {{ name }}
  </div>
</template>

<style scoped>
.week-day-header {

}
</style>
