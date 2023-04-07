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
      const formData = new FormData();

      formData.append(`upload`, event.target.files[0]);

      let meta = JSON.stringify({ category_id: category.id });

      formData.append(`meta`, meta);

      this.$store.dispatch(`UPLOAD_CATEGORY_PICTURE`, formData);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>