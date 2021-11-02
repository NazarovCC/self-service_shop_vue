<template>
  <div class="backmodal">
     <div class="modal-container">
        <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>
         <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>
           <div class="modal-footer">
                <slot name="footer">
                  default footer

                </slot>
                <button class="btn btn-danger" @click="$emit('close')">
                    Закрыть
                  </button>
              </div>
     </div>
  </div>


</template>

<script>
export default {

}
</script>

<style>
.backmodal{
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 500;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  transition: opacity 5s ease;
}
.modal-container {
  width: 500px;
  margin: 100px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 1s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #4276b9;
}

.modal-body {
  margin: 20px auto;
}



</style>