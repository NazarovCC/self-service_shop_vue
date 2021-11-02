<template>
  <li class="list-group-item list-group-item-action">
      <div class="one_event">
         <div class="descriptions_event">
           <p>{{oneEvent.productName}}</p>
         </div>
           <p>{{oneEvent.productCount}}</p>
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
   .descriptions_event p {
  text-align: left;
}
</style>