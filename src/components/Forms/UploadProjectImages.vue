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
      let picture = event.target.files[0];
      const formData = new FormData();
      formData.append(`asset`, picture);
      this.$store.dispatch(`UPLOAD_PROJECT_IMAGES`, {
        asset: formData,
        id: project.projectId,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>