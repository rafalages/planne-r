<script setup>
const props = defineProps({
  name: String,
  hasClock: {
    type: Boolean,
    default: true
  },
})
const cssCLass = {
  'grid-cols-2': props.hasClock
}
const clockDict = {
  'Manhã': [
    '06:00',
    '07:30',
    '09:00',
    '10:30',
  ],
  'Tarde': [
    '12:00',
    '13:30',
    '15:00',
    '16:30',
  ],
  'Noite': [
    '18:00',
    '19:30',
    '21:00',
    '22:30',
  ],
}

</script>

<template>
  <div :class="cssCLass" class="day-part text-4xl grid grid-rows-subgrid grid-cols-[1fr_min-content] text-center items-center content-center justify-between font-bold">
    <span class="row-span-full">{{ name }}</span>
    <div v-if="hasClock" class="clocks text-lg grid grid-rows-subgrid row-span-full relative right-[-2px] items-start">
      <span v-for="clock in clockDict[name]" class="border-t-2 border-current px-1 py-0.5 h-[34.55px]">
<!--      <span v-for="clock in clockDict[name]" class="border-2 border-current text-transparent bg-white rounded-l-lg px-1 py-0.5 h-[34.55px]">-->
        {{clock}}
      </span>
    </div>
  </div>
</template>

<style>

</style>
