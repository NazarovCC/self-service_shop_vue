<template>
  <div class="container text-center">
      <button class="btn btn-primary" style="marginTop:30px" @click="router.push('/')">На главную</button>
      <one-track :track="session"></one-track>
  </div>

</template>

<script>
import { computed } from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {useStore} from 'vuex'
import OneTrack from '../components/OneTrack.vue'
export default {
   components:{
     OneTrack
   },
   setup(){
      const route = useRoute()
      const router = useRouter();
      const store = useStore()
      const session = computed(()=>
      {return store.getters['trunstileEvents/getAllTrack'].filter(eve=>eve.sessionId===route.params.id)})
      return{
        session,
        router
      }

   }
}
</script>

<style>

</style>