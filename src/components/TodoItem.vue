<template>
 <transition appear>
    <div class="todo-item transition-box">
      <el-card class="box-card" shadow="hover">
          <el-checkbox
            v-model="isChecked"
            class="todo-item__checkbox"
            @change="onCheckboxChange(todoItem.id)">
            {{ todoItem.title }}
          </el-checkbox>
      <el-button
        class="todo-item__btn"
        type="danger"
        icon="el-icon-delete"
        @click="deleteTodo(todoItem.id)"
        circle />
      </el-card>
    </div>
   </transition>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todoItem: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    checked: false,
  }),
  methods: {
    onCheckboxChange(id) {
      this.$emit('onCheckboxChange', id);
    },
    deleteTodo(id) {
      this.$emit('onDeleteTodo', id);
    },
  },
  computed: {
    isChecked: {
      get() {
        return this.todoItem.isDone;
      },
      set(isDone) {
        return isDone;
      },
    },
  },
};
</script>

<style>
.todo-item {
  widows: 100%;
}
.box-card .el-card__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-item__checkbox .el-checkbox__label {
  font-size: 22px;
}
.todo-item__checkbox.is-checked .el-checkbox__label {
  opacity: 0.4;
  text-decoration: line-through;
}
.todo-item__btn.el-button.is-circle {
  margin-left: 15px;
}

</style>
