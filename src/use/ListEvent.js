import {computed,ref} from 'vue'
import {useStore} from 'vuex'

export function listEvent(id){
  const store = useStore()
  const listsEvent = computed(()=>store.getters['events/getAllevent'].filter((l)=>l.sessionId===id))
  //формируем массив уникальных названий
  const newarr = ref([...new Set(listsEvent.value.map(a =>a.productName))]);
  const countArr = ref([])
  //перербираем уникальные имена
  newarr.value.forEach(ar=>{
    //фильтруем массив с event по имени продукта
    const loges = ref(listsEvent.value.filter(a=>a.productName === ar))
    //создаем массив счетчика
    const count = ref(loges.value.reduce((acc,el)=>{
      acc+=el.productCount
      return acc
    },0))
    countArr.value.push(count.value)
  })
  console.log(countArr.value);
  const nextArr = ref(newarr.value.reduce((acc,el,index)=>{
    const obj = {}
    obj['productName']= el
    obj['productCount'].value = countArr[index].value
    acc.push(obj)
    return acc
  },[]))
  console.log(nextArr.value);
  const finalArr = ref(nextArr.value.filter(a=>a.productCount < 0))


  return {
     listsEvent,
     finalArr

}
}
