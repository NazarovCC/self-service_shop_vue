import {computed,ref} from 'vue'
import {useStore} from 'vuex'

export function listEvent(id){
  const store = useStore()
  const listsEvent = computed(()=>store.getters['events/getAllevent'].filter((l)=>l.sessionId===id))

  const searchArray = [...new Set(listsEvent.value.map(a =>a.productName))]
  const newArr = []

  searchArray.forEach(ar=>{
    const loges = listsEvent.value.filter(a=>a.productName === ar).reduce((acc,el,index)=>{
      if (index === 0){
          acc['productName'] = el.productName
          acc['productCount'] = 0
      }
      acc['productCount'] +=el.productCount
      return acc
    },{})
    newArr.push(loges)
  })


  const finalArr = ref(newArr.filter(a=>a.productCount < 0))
  const handlerMinus = (name)=>{
    const searchA =  finalArr.value.find(arr=>arr.productName===name)
    searchA.productCount += 1

  }


  return {
     listsEvent,
     finalArr,
     handlerMinus

}
}
