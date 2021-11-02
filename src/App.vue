<template>
  <div>
  <add-product-modal v-if="showModal" @close="closeModal">
    <template #header><h3>Новое событие</h3></template>
    <template #body>
      <label v-if="productName.length ===0" class="form-label" for="name">Введите имя продукта</label>
      <br>
      <input type="text" class="form-control" id="name" v-model.trim="productName" />
      <br>
      <select class="form-select" id="type_event" v-model="productType">
         <option selected disabled>Выберите тип события</option>
        <option value="put_on">Положить в корзину</option>
        <option value="turn_off">Вернуть на полку</option>
      </select>
      <br>
      <label class="form-label" v-if="productCount.length ===0" for="count">Введите кол-во продукта</label>
      <br>
      <input type="text" class="form-control" id="count" v-model.number.trim="productCount" />


    </template>
    <template #footer><button :disabled="valid()" class="btn btn-primary" @click="sendEvent">Отправить</button></template>
  </add-product-modal>

   <div class="container text-center">
    <router-view />
  </div>
  </div>


</template>

<script>
import AddProductModal from './components/AddProductModal';
import {modalNewProduct} from './use/modalNewProduct'


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
