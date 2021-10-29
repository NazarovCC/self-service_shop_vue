<template>
  <li class="list-group-item list-group-item-action">
      <div class="one_event">
           <p>{{oneEvent.productName}}</p>
           <p>{{Math.abs(oneEvent.productCount)}}</p>
      </div>
    </li>
</template>

<script>
export default {
  props:{
    oneEvent:{
      type: Object
    }
  }

}
</script>

<style>
  p{
      margin: 0
    }
   .one_event{
     display: flex;
     justify-content: space-between;
     align-items: center;


   }
</style>