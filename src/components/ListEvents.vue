<template>
  <div>
    <ul class="list-group" v-for="m in mass" :key="m.id">
      <update-event v-if="isExit" :oneEvent="m"></update-event>
      <one-event v-else :oneEvent="m"></one-event>
    </ul>
  </div>
</template>

<script>
import OneEvent from "./OneEvent";
import UpdateEvent from "./UpdateEvent";
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

<style></style>
