export default {
  namespaced: true,
  state() {
    return{
      activeSession:'',
      count:0,
       mass:[],  //массив открытой сессии
       showModal: false

    }
  },
  getters:{
     getShowModal(state){
        return state.showModal
     },
     getActiveSession(state){
      return state.activeSession
    },
    getSessionEvent(state){
      return state.mass
    }

  },
  mutations:{
    setActiveSession(state,value){
      state.activeSession = value
    },
    changeShowModal(state,value){
      state.showModal = value
    },
    addNewProduct(state,value){
      const newObj = {}
      newObj['id'] =Date.now()
      newObj['type'] = 'put_on'
      newObj['productName'] = value.name
      newObj['productCount'] = -1
      newObj['session_id'] = value.id
      state.mass.push(newObj)

    },
    copyEvent(state,arr){
      state.mass = [...arr]

    },
    addPutOnEvent(state,value){
       const newObj = {}
       newObj['id'] = Date.now()
       newObj['type'] = 'put_on'
       newObj['productName'] = value.name
       newObj['productCount'] = state.count
       newObj['session_id'] = value.id
       state.mass.push(newObj)
    },
    addCount(state){
      state.count += -1
    }

  }
}
