<template>
  <div class="mt-3 mb-3">
    <label for="formFile" class="form-label text-white-50"
      >Add or change category picture</label
    >
    <input
      class="form-control"
      type="file"
      id="formFile"
      @change="uploadCategoryPicture($event, categoryData)"
    />
  </div>
</template>

<script>
export default {
  props: {
    categoryData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    uploadCategoryPicture(event, category) {
      let picture = event.target.files[0];
      const formData = new FormData();
      formData.append(`asset`, picture);
      this.$store
        .dispatch(`UPLOAD_CATEGORY_PICTURE`, {
          asset: formData,
          id: category.categoryId,
        })
        .then(() => {
          // eslint-disable-next-line vue/custom-event-name-casing
          this.$emit("imageUploaded");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>