<template>
  <div class="todo-list">
    <TodoItem
      v-for="item in filteredTodos"
      :key="item.id"
      :todoItem="item"
      @onCheckboxChange="onCheckboxChange"
      @onDeleteTodo="onDeleteTodo"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoItem from './TodoItem.vue';
import constants from '../constants';

const { ALL, ACTIVE, DONE } = constants.FILTER;

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  methods: {
    ...mapActions('todo', ['getDoneToDo', 'deleteToDo']),
    onCheckboxChange(id) {
      this.getDoneToDo(id);
    },
    onDeleteTodo(id) {
      this.deleteToDo(id);
    },
  },
  computed: {
    ...mapGetters('todo', ['toDoList']),
    ...mapGetters('filter', ['getFilter']),
    filteredTodos() {
      console.log();
      switch (this.getFilter) {
        case ALL:
          return this.toDoList;
        case ACTIVE:
          return this.toDoList.filter((item) => item.isDone === false);
        case DONE:
          return this.toDoList.filter((item) => item.isDone === true);
        default:
          return this.toDoList;
      }
    },
  },
};
</script>

<style>
.todo-list {
  width: 400px;
}

</style>
