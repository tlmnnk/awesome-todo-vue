<template>
  <div class="add-todo">
    <el-form
      ref="todoForm"
      :model="formData"
      @submit.native.prevent="onSubmitTodo"
      :rules="rules">
      <el-card  class="box-card">
        <el-form-item prop="todoValue" class="add-todo__form-item">
          <el-input
            placeholder="Whats poppin?..."
            v-model="formData.todoValue"
            ref="addTodoItem"/>
        </el-form-item>
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
    formData: {
      todoValue: '',
    },
    rules: {
      todoValue: [
        {
          min: 3, max: 99, message: 'Length should be 3 to 99', trigger: 'change', required: true,
        },
      ],
    },
  }),
  methods: {
    ...mapActions('todo', ['addToDo']),
    onSubmitTodo() {
      this.$refs.todoForm.validate((isValid) => {
        if (isValid) {
          const newTodo = {
            id: uuidv4(),
            title: this.formData.todoValue,
            isDone: false,
            created: '',
          };
          this.$refs.todoForm.resetFields();
          this.addToDo(newTodo);
        }
      });
    },
  },
};
</script>

<style>
.add-todo {
  width: 100%;
  margin-bottom: 12px;
}
.add-todo__form-item {
  width: 100%;
}
.add-todo .add-todo__btn {
  height: 45px;
  margin-left: 15px;
}
.add-todo .el-form-item {
  margin-bottom: 0;
}
</style>
