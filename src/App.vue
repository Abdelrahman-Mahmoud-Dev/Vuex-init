<template>
  <button @click="resetTodos">Click</button>
  <button @click="getTodos">Get All dATA</button>

  <div>
    <div v-if="Todos.length > 0">
      <p v-for="(todo, index) in Todos" :key="index">{{ todo.title }}</p>
    </div>
    <div v-else>Eorro</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {
      title: this.$store.getters.getTitle,
    };
  },
  computed: {
    ...mapGetters({
      Todos: "getTodos",
    }),
  },
  methods: {
    ...mapMutations({
      resetTodos: "resetTodos",
    }),
    getTodos() {
      this.$store.dispatch("getTodos");
    },
  },
  created() {
    this.$store.dispatch("getTodos");
  },
};
</script>

<style></style>
