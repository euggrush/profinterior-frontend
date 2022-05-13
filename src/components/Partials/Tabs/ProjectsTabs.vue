<template>
  <ul class="nav nav-tabs mt-3">
    <li v-for="category in categoriesList" :key="category.id" class="nav-item">
      <button
        class="nav-link"
        aria-current="page"
        type="button"
        @click="getProjectsByCategory(category.id)"
      >
        {{ category.name }}
      </button>
    </li>

    <li class="nav-item">
      <button
        class="nav-link"
        aria-current="page"
        type="button"
        @click="getAllProjects"
      >
        All
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    categoriesList() {
      return this.$store.state.categories.categories;
    },
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.$store.dispatch(`GET_CATEGORIES`);
    },
    getProjectsByCategory(id) {
      this.$store.dispatch(`GET_PROJECTS`, `?categoryId=${id}`);
    },
    getAllProjects() {
      this.$store.dispatch(`GET_PROJECTS`, ``);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>