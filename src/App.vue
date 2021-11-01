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
import AddProductModal from "./components/AddProductModal";
import {modalNewProduct} from "./use/modalNewProduct"


export default {
  components: {
    AddProductModal,
  },
  setup() {

    return {
      ...modalNewProduct()
    };
  },
};
</script>
