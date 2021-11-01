<template>
  <div class="container text-center">
       <!-- <pre>{{session}}</pre> -->
      <h2>{{headerSession}}</h2>
      <one-track :track="session"></one-track>
  </div>

</template>

<script>
import { computed } from 'vue'
import {useRoute} from "vue-router"
import {useStore} from "vuex"
import OneTrack from '../components/OneTrack.vue'
export default {
   components:{
     OneTrack
   },
   setup(){
      const route = useRoute()
      const store = useStore()
      const session = computed(()=>
      {return store.getters['trunstileEvents/getAllTrack'].filter(eve=>eve.sessionId===route.params.id)})
      return{
        headerSession: route.params.id,
        session,
      }

   }
}
</script>

<style>

</style>