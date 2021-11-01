import {computed,ref} from 'vue'
import {useStore} from 'vuex'

export function listEvent(id){
  const store = useStore()
  const listsEvent = computed(()=>store.getters['events/getAllevent'].filter((l)=>l.sessionId===id))
  store.commit('session/copyEvent',listsEvent.value)
  const sessionEvent = computed(()=>store.getters['session/getSessionEvent'])
  console.log(sessionEvent.value);
  const searchArray = [...new Set(sessionEvent.value.map(a =>a.productName))]
  const newArr = ref([])

  searchArray.forEach(ar=>{
    const loges = sessionEvent.value.filter(a=>a.productName === ar).reduce((acc,el,index)=>{
      if (index === 0){
          acc['productName'] = el.productName
          acc['productCount'] = 0
      }
      acc['productCount'] +=el.productCount
      return acc
    },{})
    newArr.value.push(loges)
  })


  const finalArr = ref(newArr.value.filter(a=>a.productCount < 0))
  const handlerMinus = (name)=>{
    const searchA =  finalArr.value.find(arr=>arr.productName===name)
    searchA.productCount += 1

  }


  return {
    sessionEvent,
     finalArr,
     handlerMinus

}
}
