<template>
  <section class="container-fluid ps-5 pe-5 text-white">
    <h1>{{ projectData.title }}</h1>
    <div class="row row-cols-auto row-cols-md-2">
      <div
        v-for="picture in projectData.pictures"
        :key="picture.pictureId"
        class="col mt-3"
      >
        <img
          :src="`${FILE_URL}${picture.fullPath}`"
          class="img-fluid"
          alt="image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { BASE_FILE_URL } from "../../constants";
export default {
  data() {
    return {
      FILE_URL: BASE_FILE_URL,
      projectData: {},
    };
  },
  mounted() {
    this.fetchProjects(this.$route.query.id);
  },
  methods: {
    fetchProjects(id) {
      this.$store.dispatch(`GET_PROJECTS`, `?projectId=${id}`).then(() => {
        this.projectData = this.$store.state.projects.projects[0];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: $mainBlack;
  padding-top: 10em;
  min-height: 100vh;
}
</style>