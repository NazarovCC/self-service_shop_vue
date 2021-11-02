export default {
  namespaced: true,
  state() {
    return {
      activeSession: "",
      showModal: false,
    };
  },
  getters: {
    getShowModal(state) {
      return state.showModal;
    },
    getActiveSession(state) {
      return state.activeSession;
    },
  },
  mutations: {
    setActiveSession(state, value) {
      state.activeSession = value;
    },
    changeShowModal(state, value) {
      state.showModal = value;
    },
  },
};
