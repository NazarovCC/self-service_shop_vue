import { computed } from "vue";
import { useStore } from "vuex";

export function listEvent(id) {
  const store = useStore();
  const listsEvent = computed(() =>
    store.getters["events/getAllevent"].filter((arr) => arr.sessionId === id)
  );

  return {
    listsEvent,
  };
}
