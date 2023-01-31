<template>
  <div class="mt-3 mb-3">
    <label for="formFile" class="form-label text-white-50"
      >Add or change category picture</label
    >
    <input
      class="form-control"
      type="file"
      id="formFile"
      accept="image/*"
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
      formData.append(`upload`, picture);
      this.$store.dispatch(`UPLOAD_CATEGORY_PICTURE`, {
        upload: formData,
        category_id: category.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>