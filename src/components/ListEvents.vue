<template>
  <div v-if="mass.length !==0">
    <transition-group name="events">
    <ul class="list-group" v-for="m in mass" :key="m.id">
      <update-event v-if="isExit" :oneEvent="m"></update-event>
      <one-event v-else :oneEvent="m"></one-event>
    </ul>
    </transition-group>
  </div>
  <h4 v-else>Нет событий</h4>
</template>

<script>
import OneEvent from './OneEvent';
import UpdateEvent from './UpdateEvent';
export default {
  components: {
    OneEvent,
    UpdateEvent,
  },
  props: {
    mass: {
      type: Array,
    },
    isExit: {
      type: Boolean,
    },
  },
};
</script>

<style>
.events-enter-active,
.events-leave-active {
  transition: all 1s ease;
}
.events-enter-from,
.events-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
