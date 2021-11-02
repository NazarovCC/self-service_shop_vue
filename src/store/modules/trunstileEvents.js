import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      turnstileEvents: [],
    };
  },
  getters: {
    getAllTrack(state) {
      return state.turnstileEvents;
    },
  },
  mutations: {
    setAllTrack(state, value) {
      state.turnstileEvents = value;
    },
    updateActiveEvent(state, id) {
      const session = state.turnstileEvents.find(
        (arr) => arr.id === id && arr.type === "open"
      );
      session.isActive = false;
    },
  },
  actions: {
    async loadTrunstileEvent({ commit }) {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/trunstile-events"
        );
        commit("setAllTrack", data);
      } catch (e) {
        console.log(e);
      }
    },
    async updateActive({ commit }, request) {
      try {
        const { data } = await axios.put(
          `http://localhost:3000/trunstile-events/${request.id}`,
          request
        );
        console.log(data);
        commit("updateActiveEvent", request.id);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
