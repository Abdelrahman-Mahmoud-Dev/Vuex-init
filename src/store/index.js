import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    mutateTodos(state, payload) {
      state.todos = payload;
    },
    resetTodos(state) {
      state.todos = [];
    },
  },
  actions: {
    async getTodos({ commit }) {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        let data = await response.json();
        commit("mutateTodos", data);
      }
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
});
