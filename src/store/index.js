import { createStore } from "vuex";
import evaluation from "./modules/evaluation";

export default createStore({
  modules: {
    evaluation
  },
  strict: false
});
