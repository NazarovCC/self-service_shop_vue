import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export function modalNewProduct() {
  const store = useStore();
  const route = useRoute();
  const productName = ref("");
  const productCount = ref("");
  const productType = ref("");
  const showModal = computed(() => store.getters["session/getShowModal"]);
  const sendEvent = async () => {
    const newObj = {};
    newObj["id"] = Date.now();
    newObj["type"] = productType.value;
    newObj["productName"] = productName.value;
    if (productType.value === "turn_off") {
      newObj["productCount"] = -Number(productCount.value);
    } else {
      newObj["productCount"] = Number(productCount.value);
    }

    newObj["timestamp"] = Date.now();
    newObj["sessionId"] = route.params.id;
    await store.dispatch("events/addNewEventProduct", newObj);
    store.commit("session/changeShowModal", false);
  };
  const closeModal = () => {
    store.commit("session/changeShowModal", false);
  };
  const valid = () => {
    return (
      productName.value.length === 0 ||
      productCount.value.length === 0 ||
      isNaN(productCount.value) ||
      productType.value.length === 0 ||
      productCount.value === "0"
    );
  };
  return {
    productName,
    productCount,
    productType,
    showModal,
    sendEvent,
    closeModal,
    valid,
  };
}
