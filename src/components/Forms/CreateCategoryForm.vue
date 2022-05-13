<template>
  <form
    @submit.prevent="createCategory"
    class="border border-warning rounded mt-3 p-5"
  >
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label text-white-50"
        >Название категории</label
      >
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="название категории..."
        v-model="categoryName"
        required
      />
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
      categoryName: ``,
    };
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories;
    },
  },
  mounted() {
    this.$store.dispatch(`GET_CATEGORIES`);
  },
  methods: {
    createCategory() {
      this.$store
        .dispatch(`CREATE_CATEGORY`, {
          name: this.categoryName,
        })
        .then(() => {
          this.categoryName = ``;
          this.$store.dispatch(`GET_CATEGORIES`);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.$store.dispatch(`GET_CATEGORIES`);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>