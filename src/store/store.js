import { createStore } from 'vuex';

const store = createStore({
  state: {
    results: '',
  },
  mutations: {
    setResults(state, results) {
      state.results = results;
    },
  },
  actions: {
    setResults({ commit }, results) {
      commit('setResults', results);
    },
  },
  getters: {
    getResults(state) {
      return state.results;
    },
  },
});

export default store;
