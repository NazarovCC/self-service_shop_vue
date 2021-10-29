import { createStore } from "vuex";
import trunstileEvents from './modules/trunstileEvents'
import events from './modules/events'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    trunstileEvents,
    events,
  },
});
