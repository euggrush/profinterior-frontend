<template>
  <div class="row row-cols-auto project-item mt-3">
    <div
      v-for="(project, index) in projectssList"
      :key="index"
      class="col border m-3 p-3"
    >
      <p class="text-white-50">{{ project.title }}</p>
      <p class="text-white-50">{{ project.description }}</p>
      <p class="text-white-50">Категория: {{ project.categories.name }}</p>
      <div class="row row-cols-auto gap-1">
        <img
          v-for="(picture, index) in project.pictures"
          :key="index"
          :src="`${FILE_URL}${picture.path}`"
          class="img-thumbnail col"
          alt="picture"
        />
      </div>
      <div v-if="project.pictures.length < 6" class="mt-3 mb-3">
        <label for="formFile" class="form-label text-white-50"
          >Default file input example</label
        >
        <input
          class="form-control"
          type="file"
          id="formFile"
          @change="uploadPrijectPicture($event, project)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL_API } from "../../constants";

export default {
  data() {
    return {
      FILE_URL: `${BASE_URL_API}/upload`,
    };
  },
  computed: {
    projectssList() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch(`GET_PROJECTS`);
  },
  methods: {
    uploadPrijectPicture(event, project) {
      let picture = event.target.files[0];
      const formData = new FormData();
      formData.append(
        `meta`,
        JSON.stringify({
          project_id: project.id,
        })
      );
      formData.append("upload", picture);
      this.$store.dispatch(`UPLOAD`, formData).then(() => {
        setTimeout(() => {
          this.$store.dispatch(`GET_PROJECTS`);
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>