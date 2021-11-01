export default {
  namespaced: true,
  state() {
    return{
      activeSession:'',
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

    }
  }
}
