import mutations from '../mutations';

const { ADD_TODO, TOGGLE_DONE_TODO, DELETE_TODO } = mutations;

const todoStore = {
  state: {
    toDoList: [
      {
        id: 1,
        title: 'Learn Vue.js',
        Done: false,
        created: '',
      },
    ],
  },
  getters: {
    toDoList: ({ toDoList }) => toDoList,
  },
  mutations: {
    [ADD_TODO](state, todoItem) {
      state.toDoList.push(todoItem);
    },
    [TOGGLE_DONE_TODO](state, doneTodoIdx) {
      state.getDoneToDo[doneTodoIdx].isDone = !state.getDoneToDo[doneTodoIdx].isDone;
    },
    [DELETE_TODO](state, todoIdx) {
      state.toDoList.splice(todoIdx, 1);
    },
  },
  actions: {
    addToDo({ commit }, todoItem) {
      commit('ADD_TODO', todoItem);
    },
    getDoneToDo({ state, commit }, id) {
      const doneTodoIdx = state.toDoList.findIndex((item) => item.id === id);
      commit('TOGGLE_DONE_TODO', doneTodoIdx);
    },
    deleteToDo({ commit, state }, id) {
      const todoIdx = state.toDoList.findIndex((item) => item.id === id);
      commit('DELETE_TODO', todoIdx);
    },
  },
};

export default todoStore;
