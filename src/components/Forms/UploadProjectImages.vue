<template>
  <div class="mt-3 mb-3">
    <label for="formFile" class="form-label text-white-50"
      >Add or change project pictures</label
    >
    <input
      class="form-control"
      type="file"
      id="formFile"
      accept="image/*"
      @change="uploadProjectPictures($event, projectData)"
    />
  </div>
</template>

<script>
export default {
  props: {
    projectData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    uploadProjectPictures(event, project) {
      const formData = new FormData();

      formData.append(`upload`, event.target.files[0]);

      let meta = JSON.stringify({ project_id: project.id });

      formData.append(`meta`, meta);

      this.$store.dispatch(`UPLOAD_PROJECT_IMAGES`, formData);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>