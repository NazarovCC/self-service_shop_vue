import { createStore } from "vuex";
import trunstileEvents from "./modules/trunstileEvents";
import events from "./modules/events";
import session from "./modules/session";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    trunstileEvents,
    events,
    session,
  },
});
