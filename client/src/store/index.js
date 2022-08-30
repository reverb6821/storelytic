import { createStore } from "vuex";
import { auth } from "./authModule";

const store = createStore({
  modules: {
    auth,
  },
});

export default store;