import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Category from "./modules/Category";
import Income from "./modules/Income";
import Expense from "./modules/Expense";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Category,
    Income,
    Expense
  },
  plugins: [
    createPersistedState({
      key: 'my-budget',
    }),
  ],
});
