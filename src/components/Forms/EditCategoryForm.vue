<template>
  <form
    @submit.prevent="modifyCategory"
    class="border border-info mt-3 mb-1 p-3"
  >
    <input
      type="text"
      class="form-control"
      placeholder="название категории"
      aria-label="название категории"
      aria-describedby="basic-addon1"
      required
      v-model="categoryName"
    />
    <button type="submit" class="btn btn-outline-info mt-3 w-100">
      submit
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
  props: {
    myProps: {
      type: String,
      default: ``,
    },
  },
  methods: {
    modifyCategory() {
      this.$store
        .dispatch(`MODIFY_CATEGORY`, {
          categoryId: this.myProps,
          name: this.categoryName,
        })
        .then(() => {
          this.name = ``;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>