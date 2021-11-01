<template>
  <add-product-modal v-if="showModal" @close="closeModal">
    <template #header><h3>Modalka</h3></template>
    <template #body>
      <label v-if="productName.length ===0" for="name">Введите имя продукта</label>
      <br>
      <input type="text" id="name" v-model.trim="productName" />


    </template>
    <template #footer><button :disabled="productName.length ===0" class="btn btn-primary" @click="sendEvent">Отправить</button></template>
  </add-product-modal>
  <div class="container text-center">
    <router-view @open="showModal=true"/>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import {useStore} from 'vuex'
import AddProductModal from "./components/AddProductModal";
import { useRoute } from 'vue-router';

export default {
  components: {
    AddProductModal,
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const productName = ref('')
    const showModal = computed(()=>store.getters['session/getShowModal'])
    const sendEvent = () =>{
      store.commit('session/addNewProduct',{name:productName.value, id:route.params.id})
      store.commit('session/changeShowModal',false)
    }
    const closeModal = ()=>{
      store.commit('session/changeShowModal',false)

    }
    return {
      showModal,
      closeModal,
      sendEvent,
      productName,
    };
  },
};
</script>
