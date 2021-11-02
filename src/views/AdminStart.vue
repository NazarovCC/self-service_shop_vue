<template>
   <div>
      <h2>EventsTrac</h2>
    <list-tracks></list-tracks>
   </div>

</template>

<script>
import ListTracks from '../components/ListTracks'
import {useStore} from 'vuex'
import { onMounted } from '@vue/runtime-core'
export default {
    components:{
      ListTracks
    },
    setup(){
      const store = useStore()
      onMounted(async()=>{
          await store.dispatch('trunstileEvents/loadTrunstileEvent')
          await store.dispatch('events/loadEvent')
      })
    }
}
</script>

<style>

</style>