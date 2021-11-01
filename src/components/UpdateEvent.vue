<template>
  <li class="list-group-item list-group-item-action">
    <div class="one_event">
      <div class="descriptions_event">
        <p>{{ oneEvent.productName }}</p>
      </div>
      <div class="action_event">
        <img src="https://img.icons8.com/color/20/000000/empty-trash--v1.png" />
        <img src="https://img.icons8.com/offices/20/000000/minus--v1.png" @click="handlerMinus"/>
        <p>{{Math.abs(eve)}}</p>
        <img src="https://img.icons8.com/color/20/000000/plus--v1.png" @click="handlerPlus" />
        <img
          src="https://img.icons8.com/fluency-systems-regular/15/000000/append-clip.png"
        />
      </div>
    </div>
  </li>
</template>

<script>
import {ref} from 'vue'
export default {
  props: {
    oneEvent: {
      type: Object,
    },
    handlerMinus:{
      type: Function
    }

  },
  setup(props){
      const eve = ref(props.oneEvent.productCount)
      // const handlerMinus = ()=>{
      //     eve.value += 1
      // }
      const handlerPlus = ()=>{
          eve.value -= 1
      }
      return{

        handlerPlus,
        eve
      }
    }
};
</script>

<style>
p {
  margin: 0;
}
.one_event {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.action_event {
  display: flex;
  justify-content: space-between;
}
.descriptions_event p {
  text-align: left;
}
.action_event p,
.action_event img {
  margin-right: 5px;
}
</style>
