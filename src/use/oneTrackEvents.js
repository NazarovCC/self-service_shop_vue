import { computed } from "vue";
import { useStore } from "vuex";

export function openEventTrack() {
  const store = useStore();
  const lists = computed(() =>
    store.getters["trunstileEvents/getAllTrack"].filter(
      (list) => list.type === "open"
    )
  );

  return {
    lists,
  };
}
