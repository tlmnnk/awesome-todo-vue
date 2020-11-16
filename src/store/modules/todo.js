import mutations from '../mutations';

const { ADD_TODO, TOGGLE_DONE_TODO, DELETE_TODO } = mutations;

const todoStore = {
  namespaced: true,
  state: {
    toDoList: [
      {
        id: 1,
        title: 'Learn Vue.js',
        isDone: false,
        created: '',
      },
      {
        id: 2,
        title: 'Make an Awesome ToDo app',
        isDone: true,
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
      state.toDoList[doneTodoIdx].isDone = !state.toDoList[doneTodoIdx].isDone;
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
