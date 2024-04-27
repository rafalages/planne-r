<script setup>
defineProps({
  name: String,
})
</script>

<template>
  <div class="week-day-header text-2xl p-1.5 flex flex-wrap text-center content-center justify-center bg-gray-600 text-white font-bold">
    {{ name }}
  </div>
</template>

<style scoped>
.week-day-header {
}
</style>
