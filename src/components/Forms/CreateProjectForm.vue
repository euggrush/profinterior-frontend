<template>
  <form
    @submit.prevent="createProject"
    class="border border-warning rounded mt-3 p-5"
  >
    <select
      class="form-select mb-3"
      aria-label="Default select example"
      v-model="selectedCategory"
      required
    >
      <option selected disabled value="">Категория...</option>
      <option
        v-for="(category, index) in categoriesList"
        :key="index"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </select>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label text-white-50"
        >Название проекта</label
      >
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="название проекта..."
        v-model="projectTitle"
        required
      />
    </div>
    <div class="mb-5">
      <label for="exampleFormControlTextarea1" class="form-label text-white-50"
        >Описание</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Описание..."
        v-model="projectDescription"
        required
      ></textarea>
    </div>
    <button type="submit" class="btn btn-outline-info rounded-pill mt-3">
      Добавить
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      projectTitle: ``,
      projectDescription: ``,
      selectedCategory: `Категория...`,
    };
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories;
    },
    projectssList() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch(`GET_CATEGORIES`).then(() => {
      this.$store.dispatch(`GET_PROJECTS`);
    });
  },
  methods: {
    createProject() {
      this.$store
        .dispatch(`CREATE_PROJECT`, {
          title: this.projectTitle,
          description: this.projectDescription,
          category_id: this.selectedCategory,
        })
        .then(() => {
          this.$store.dispatch(`GET_PROJECTS`);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>