<template>
  <div class="todo-list">
    <TodoItem
      v-for="item in toDoList"
      :key="item.id"
      :todoItem="item"
      @onCheckboxChange="onCheckboxChange"
      @onDeleteTodo="onDeleteTodo"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoItem from './TodoItem.vue';

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
  },
};
</script>

<style>
.todo-list {
  width: 400px;
}

</style>
