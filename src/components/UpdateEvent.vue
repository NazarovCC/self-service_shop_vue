<template>
  <li class="list-group-item list-group-item-action">
    <div class="one_event">
      <div class="descriptions_event">
        <p>{{ oneEvent.productName }}</p>
      </div>
      <div class="action_event">
        <img src="https://img.icons8.com/color/20/000000/empty-trash--v1.png" @click="deleteEvent(oneEvent.id)"/>
        <img src="https://img.icons8.com/offices/20/000000/minus--v1.png" v-if="buttonMinus()" @click="handlerMinus"/>
        <p>{{eve.productCount}}</p>
        <img src="https://img.icons8.com/color/20/000000/plus--v1.png" @click="handlerPlus" />
        <img
          src="https://img.icons8.com/fluency-systems-regular/15/000000/append-clip.png"
        />
      </div>
    </div>
  </li>
</template>

<script>
import {reactive, watch} from 'vue'
import { useStore } from 'vuex';
export default {
  props: {
    oneEvent: {
      type: Object,
    },
  },
  setup(props){
      const store = useStore()
      const eve = reactive(props.oneEvent)
      const deleteEvent = async (id)=> {
         await store.dispatch('events/removeEvent',id)
      }
      watch(eve,value=>{
        store.dispatch('events/updateCountEvent',value)

      })
      const buttonMinus = ()=>{
        return eve.productCount!==-1&&eve.productCount!==1
      }
      const handlerPlus = ()=>{
        if (eve.productCount <0){
            eve.productCount -= 1
        }
        else{
            eve.productCount += 1
        }

      }
      const handlerMinus = ()=>{
         if (eve.productCount<0){
           eve.productCount +=1
         }
         else{
           eve.productCount -=1
         }


      }
      return{
        deleteEvent,
        handlerPlus,
        handlerMinus,
        buttonMinus,
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
