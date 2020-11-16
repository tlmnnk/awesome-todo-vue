import mutations from '../mutations';
import constants from '../../constants';

const { ALL } = constants.FILTER;
const { SET_FILTER } = mutations;

const filterStore = {
  namespaced: true,
  state: {
    filter: ALL,
  },
  getters: {
    getFilter: ({ filter }) => filter,
  },
  mutations: {
    [SET_FILTER](state, filter) {
      state.filter = filter;
    },
  },
  actions: {
    setFilter({ commit }, filter) {
      commit('SET_FILTER', filter);
    },
  },
};

export default filterStore;
