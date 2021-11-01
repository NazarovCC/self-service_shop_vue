import { computed, ref } from "vue";
import {useStore} from 'vuex'
import { useRoute } from 'vue-router';
export function modalNewProduct(){
  const store = useStore()
    const route = useRoute()
    const productName = ref('')
    const showModal = computed(()=>store.getters['session/getShowModal'])
    const sendEvent = () =>{
      store.commit('session/addNewProduct',{name:productName.value, id:route.params.id})
      store.commit('session/changeShowModal',false)
    }
    const closeModal = ()=>{
      store.commit('session/changeShowModal',false)

    }
  return{
      productName,
      showModal,
      sendEvent,
      closeModal
  }
}