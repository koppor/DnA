import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 1,
  },
  getters: {},
  mutations: {
    addOne(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
