<template>
  <add-product-modal v-if="showModal" @close="closeModal">
    <template #header><h3>Modalka</h3></template>
    <template #body><input type="text" name="zzz" id="lll" /></template>
    <template #footer><button class="btn btn-primary">Отправить</button></template>
  </add-product-modal>
  <div class="container text-center">
    <router-view @open="showModal=true"/>
  </div>
</template>

<script>
import { computed } from "vue";
import {useStore} from 'vuex'
import AddProductModal from "./components/AddProductModal";

export default {
  components: {
    AddProductModal,
  },
  setup() {
    const store = useStore()
    const showModal = computed(()=>store.getters['session/getShowModal'])
    const closeModal = ()=>{
      store.commit('session/changeShowModal',false)

    }
    return {
      showModal,
      closeModal,
    };
  },
};
</script>
