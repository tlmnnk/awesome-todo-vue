<template>
  <div id="app">
    <h1 class="todo__title">Awesome ToDo App</h1>
    <hr size="3" color="#f7f7f7" width="100%">
    <div class="todo__wrapper">
      <AddTodo />
      <FilterTodo />
      <TodoList />
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue';
import FilterTodo from './components/FilterTodo.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo,
    FilterTodo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.todo__wrapper {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
