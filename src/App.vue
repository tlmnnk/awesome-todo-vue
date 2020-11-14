<template>
  <div id="app">
    <h1 class="todo__title">Awesome ToDo App</h1>
    <hr size="3" color="#f7f7f7" width="100%">
    <div class="todo__wrapper">
      <AddTodo />
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo,
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
