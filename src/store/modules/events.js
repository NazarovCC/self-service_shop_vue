import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      events: [],
    };
  },
  getters: {
    getAllevent(state) {
      return state.events;
    },
  },
  mutations: {
    deleteEvent(state, value) {
      state.events = state.events.filter((arr) => arr.id !== value);
    },
    setEvents(state, value) {
      state.events = value;
    },
    updateEventCount(state, value) {
      const event = state.events.find((arr) => arr.id === value.id);
      event.productCount = value.count;
    },
    addNewEvent(state, value) {
      state.events.push(value);
    },
  },
  actions: {
    async loadEvent({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:3000/events");
        commit("setEvents", data);
      } catch (e) {
        console.log(e);
      }
    },
    async addNewEventProduct({ commit }, payload) {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/events",
          payload
        );
        console.log(data);
        commit("addNewEvent", data);
      } catch (e) {
        console.log(e);
      }
    },
    async removeEvent({ commit }, id) {
      try {
        await axios.delete(`http://localhost:3000/events/${id}`);
        commit("deleteEvent", id);
      } catch (e) {
        console.log(e);
      }
    },
    async updateCountEvent({ commit }, request) {
      try {
        const { data } = await axios.put(
          `http://localhost:3000/events/${request.id}`,
          request
        );
        console.log(data);
        commit("updateEventCount", {
          id: request.id,
          count: request.productCount,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
