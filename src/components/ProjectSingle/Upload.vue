<template>
  <section class="container">
    <form
      @submit.prevent="createPicture"
      method="post"
      enctype="multipart/form-data"
    >
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Project id</label>
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="projectId"
        />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label"
          >Default file input example</label
        >
        <input
          class="form-control"
          type="file"
          id="formFile"
          name="upload"
          @change="onFileChange($event)"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      file: ``,
      projectId: ``,
    };
  },
  methods: {
    createPicture() {
      const formData = new FormData();
      formData.append(
        `meta`,
        JSON.stringify({
          project_id: this.projectId,
        })
      );
      formData.append(`upload`, this.file);

      this.$store.dispatch(`UPLOAD`, formData);
    },
    onFileChange(event) {
      this.file = event.target.files[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  margin-top: 10em;
}
</style>