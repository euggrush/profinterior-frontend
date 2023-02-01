<template>
  <form @submit.prevent="modifyCategory">
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
      type: Number,
      default: 0,
    },
  },
  methods: {
    modifyCategory() {
      const yourKeyVariable = `name`;
      const someValueArray = this.categoryName;

      const payloadBody = {
        [yourKeyVariable]: someValueArray,
      };
      this.$store
        .dispatch(`MODIFY_CATEGORY`, {
          id: this.myProps,
          body: payloadBody,
        })
        .then(() => {
          this.name = ``;
          this.$emit(`closeForm`, { close: true });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>