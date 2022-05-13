<template>
  <ProjectsTabs />
  <div class="row row-cols-auto mt-3">
    <div
      v-for="(project, index) in projectssList"
      :key="index"
      class="col border m-1 p-3 project-item"
    >
      <button
        type="button"
        class="btn-close btn-close-white float-end p-0"
        aria-label="Close"
      ></button>

      <p class="text-white-50">{{ project.title }}</p>
      <p class="text-white-50">{{ project.description }}</p>
      <p class="text-white-50">Категория: {{ project.categoryName }}</p>
      <div v-if="project.pictures" class="row row-cols-auto gap-1">
        <img
          v-for="(picture, index) in project.pictures"
          :key="index"
          :src="`${FILE_URL}${picture.path}`"
          class="img-thumbnail col"
          alt="picture"
        />
      </div>
      <div
        v-if="!project.pictures || project.pictures.length < 6"
        class="mt-3 mb-3"
      >
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
import ProjectsTabs from "../Partials/Tabs/ProjectsTabs.vue";

export default {
  components: { ProjectsTabs },
  data() {
    return {
      FILE_URL: `${BASE_URL_API}/upload`,
    };
  },
  computed: {
    projectssList() {
      return this.$store.state.projects.projects ?? [];
    },
  },
  mounted() {
    this.$store.dispatch(`GET_PROJECTS`, ``);
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
          this.$store.dispatch(`GET_PROJECTS`, ``);
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  width: 97%;
  @include media-breakpoint-up(md) {
    width: 48%;
  }
  @include media-breakpoint-up(lg) {
    width: 49%;
  }
  @include media-breakpoint-up(xl) {
    width: 32%;
  }
  @include media-breakpoint-up(xxl) {
    width: 32%;
  }
}
</style>