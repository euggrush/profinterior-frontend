<template>
  <ul class="nav nav-tabs mt-3">
    <li v-for="category in categoriesList" :key="category.id" class="nav-item">
      <button
        class="nav-link"
        :class="{ active: defaultActive == category.id }"
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
      return this.$store.state.categories;
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
      this.$store.dispatch(`GET_PROJECTS`, `?category_id=${id}`);
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