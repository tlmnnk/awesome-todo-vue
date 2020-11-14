<template>
  <div class="add-todo">
    <el-form ref="todoForm" v-model="todoForm" @submit.native.prevent="onSubmitTodo">
      <el-card  class="box-card">
        <el-input
          placeholder="Whats poppin?..."
          v-model="todoForm.inputTodo"
          ref="addTodoItem"></el-input>
        <el-button
          class="add-todo__btn"
          type="primary"
          icon="el-icon-plus"
          circle @click="onSubmitTodo"></el-button>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex';

export default {
  name: 'AddTodo',
  data: () => ({
    todoForm: {
      inputTodo: '',
    },
  }),
  methods: {
    ...mapActions('todo', ['addToDo']),
    onSubmitTodo() {
      const newTodo = {
        id: uuidv4(),
        title: this.todoForm.inputTodo,
        isDone: false,
        created: '',
      };
      this.todoForm.inputTodo = '';
      this.addToDo(newTodo);
    },
  },
};
</script>

<style>
.add-todo {
  width: 100%;
  margin-bottom: 25px;
}
.add-todo .add-todo__btn {
  margin-left: 15px;
}
</style>
