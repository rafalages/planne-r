<script setup>
import Appointment from './components/Appointment.vue'
import DayPart from './components/DayPart.vue'
import WeekDayHeader from './components/WeekDayHeader.vue'
import ConfigMenu from './components/ConfigMenu.vue'
</script>

<template>
  <div class="planner grid w-full h-full text-white">
    <div class="Title flex items-center justify-between">
    <div class="flex items-center justify-between overflow-hidden">
      <span class="text-6xl">🦖</span>
      <span class="text-6xl text-black font-bold p-1 text-center leading-[0.75]">2024 Mateus</span>
<!--      <span class="text-6xl">🤣</span>-->
<!--      <span class="text-6xl text-black font-bold p-1 text-center leading-[0.75]">2024 Marcella</span>-->
    </div>
    <div class="Header grid grid-cols-subgrid">
      <WeekDayHeader name="Segunda"/>
      <WeekDayHeader name="Terça"/>
      <WeekDayHeader name="Quarta"/>
      <WeekDayHeader name="Quinta"/>
      <WeekDayHeader name="Sexta"/>
      <WeekDayHeader name="Sábado"/>
      <WeekDayHeader name="Domingo"/>
    </div>
    <div class="Sidebar grid grid-rows-subgrid overflow-x-visible">
      <DayPart name="Manhã" class="bg-amber-100 text-amber-500 row-span-4"/>
      <DayPart name="Tarde" class="bg-green-100 text-green-600 row-span-4"/>
      <DayPart name="Noite" class="bg-blue-100 text-blue-600 row-span-4"/>
      <DayPart name="Próx. Semana" class="bg-gray-100 text-gray-400" :has-clock="false"/>
    </div>
    <div class="Main grid grid-cols-subgrid grid-rows-subgrid">
      <div class="morning day-period bg-amber-100 border-amber-500 grid grid-cols-subgrid grid-rows-subgrid col-span-7 row-span-4">
        <Appointment title="Acordar" icon="😃" duration="half" type="5-days"/>
        <div class="appointment-group grid grid-cols-subgrid grid-rows-7 border-inherit col-span-5 row-span-3">
          <Appointment title="Escola" icon="🎓" type="5-days"/>

          <Appointment title="Português" icon="🇧🇷" duration="double"/>
          <Appointment title="Ciências" icon="🔬"/>
          <Appointment title="Recreio" icon="🥪" type="5-days" class="row-start-5 row-end-6"/>
          <Appointment title="Matemática" icon="🔢" duration="double"/>

          <Appointment title="Ens. Religioso" icon="🛐"/>
          <Appointment title="Ed. Física" icon="🏐️"/>
          <Appointment title="Geografia" icon="🗺️"/>
          <Appointment title="Português" icon="🇧🇷" duration="double"/>

          <Appointment title="Inglês" icon="🇬🇧" duration="double"/>
          <Appointment title="História" icon="🏛️"/>
          <Appointment title="Matemática" icon="🔢" duration="double"/>

          <Appointment title="Português" icon="🇧🇷"/>
          <Appointment title="Prod. de Texto" icon="📝"/>
          <Appointment title="Geografia" icon="🗺️"/>
          <Appointment title="Ed. Física" icon="🏐️"/>
          <Appointment title="Inglês" icon="🇬🇧"/>

          <Appointment title="Artes" icon="🎨"/>
          <Appointment title="Matemática" icon="🔢"/>
          <Appointment title="História" icon="🏛️"/>
          <Appointment title="Ciências" icon="🔬" duration="double"/>
        </div>
        <Appointment title="Acordar" icon="😃" type="2-days" duration="half" class="saturday"/>
        <Appointment title="Futebol" icon="⚽️" class="saturday"/>
        <Appointment title="Artes" icon="🎨" class="saturday"/>
      </div>
      <div class="afternoon day-period bg-green-100 border-green-600 grid grid-cols-subgrid grid-rows-subgrid col-span-7 row-span-4">
        <Appointment title="Almoço" icon="🍽️" type="full-week"/>
        <Appointment title="PROEI" icon="📚" class="row-span-3" type="5-days"/>
      </div>
      <div class="night day-period bg-blue-100 border-blue-600 grid grid-cols-subgrid grid-rows-subgrid col-span-7 row-span-4">
        <Appointment title="Missa com a Vovó" icon="⛪️" class="sunday"/>
        <Appointment title="Dormir" icon="😴" type="full-week" class="row-start-3"/>
      </div>
    </div>
    <div class="Next next-week bg-gray-100 grid grid-cols-subgrid">
<!--      <Appointment title="Prova de matemática" class="monday"/>-->
<!--      <Appointment title="Trabalho de ciências" class="thursday"/>-->
    </div>
  </div>
</template>

<style scoped>
.planner {
  --gap: .5mm;
  grid-template-columns: 1fr repeat(7, 5cm);
  grid-template-rows: 100px repeat(12, minmax(0, 71px)) 3.8cm;
  gap: var(--gap);
  grid-template-areas:
    "Title Header Header Header Header Header Header Header"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Main Main Main Main Main Main Main"
    "Sidebar Next Next Next Next Next Next Next";
}
/*
.day-period:has(.appointment-group) {
  @apply grid-rows-8;
  row-gap: var(--gap);
}
*/

.appointment-group {
  border-width: 0.1mm;
  gap: calc(var(--gap) / 2);
  grid-auto-flow: column;
}

.Title {
  grid-area: Title;
}

.Header {
  grid-area: Header;
}

.Sidebar {
  grid-area: Sidebar;
}

.Main {
  grid-area: Main;

}

.Next { grid-area: Next; }

.day-period {
  .monday {
    @apply col-start-1
  }
  .tuesday {
    @apply col-start-2
  }
  .wednesday {
    @apply col-start-3
  }
  .thursday {
    @apply col-start-4
  }
  .friday {
    @apply col-start-5
  }
  .saturday {
    @apply col-start-6
  }
  .sunday {
    @apply col-start-7
  }
}

</style>
