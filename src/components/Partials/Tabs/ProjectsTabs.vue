<template>
  <ul class="nav nav-tabs mt-3">
    <li
      v-for="category in categoriesList"
      :key="category.categoryId"
      class="nav-item"
    >
      <button
        class="nav-link"
        :class="{ active: defaultActive == category.categoryId }"
        aria-current="page"
        type="button"
        @click="getProjectsByCategory(category.categoryId)"
      >
        {{ category.name }}
      </button>
    </li>

    <li class="nav-item">
      <button
        class="nav-link"
        :class="{ active: defaultActive == `ALL` }"
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
  data() {
    return {
      defaultActive: false,
    };
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories.categories;
    },
  },
  mounted() {
    this.fetchCategories();
    this.$nextTick(() => {
      this.getDefaultTab();
    });
  },
  methods: {
    getDefaultTab() {
      this.defaultActive = `ALL`;
      this.$store.dispatch(`GET_PROJECTS`, ``);
    },
    fetchCategories() {
      this.$store.dispatch(`GET_CATEGORIES`);
    },
    getProjectsByCategory(id) {
      this.$store.commit(`SET_PICKED_CATEGORY_ID`, id);
      this.defaultActive = id;
      this.$store.dispatch(`GET_PROJECTS`, `?categoryId=${id}`);
    },
    getAllProjects() {
      this.$store.commit(`SET_PICKED_CATEGORY_ID`, `ALL`);
      this.defaultActive = `ALL`;
      this.$store.dispatch(`GET_PROJECTS`, ``);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>