<template>
  <div class="filter-todo">
      <el-radio-group v-model="filterComputed">
        <el-radio-button label="ALL"></el-radio-button>
        <el-radio-button label="ACTIVE"></el-radio-button>
        <el-radio-button label="DONE"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FilterTodo',
  computed: {
    ...mapGetters('filter', ['getFilter']),
    filterComputed: {
      get: 'getFilter',
      set(val) {
        this.setFilter(val);
      },
    },
  },
  methods: {
    ...mapActions('filter', ['setFilter']),
  },
};
</script>

<style>
.filter-todo {
  margin-bottom: 12px
}

</style>
