<template>
  <section class="container-fluid ps-5 pe-5">
    <h1 class="text-white">{{ title }}</h1>
    <div class="row row-cols-auto row-cols-lg-2 mt-5">
      <div
        v-for="(project, index) in projectssList"
        :key="index"
        class="col p-5"
        @click="getProject(project)"
      >
        <p class="text-light">{{ project.title }}</p>
        <p class="text-light fst-italic">
          {{ project.description }}
        </p>
        <img
          v-if="project.pictures.length > 0"
          :src="`${FILE_URL}${project.pictures[0].fullPath}`"
          class="img-thumbnail p-0"
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
      FILE_URL: `${BASE_FILE_URL}`,
      title: ``,
    };
  },
  computed: {
    projectssList() {
      return this.$store.state.projects.projects ?? [];
    },
  },
  mounted() {
    this.title = this.$route.query.name;
    this.getProjectsByCategory(this.$route.query.id);
  },
  methods: {
    getProjectsByCategory(id) {
      this.$store.dispatch(`GET_PROJECTS`, `?categoryId=${id}`);
    },
    getProject(arg) {
      this.$router.push({
        path: `/gallery/${arg}`,
        query: { id: arg.projectId, project: arg.title },
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
.img-thumbnail {
  background-color: $mainBlack !important;
  border: none !important;
}
.col {
  cursor: pointer;
}
img {
  transition: all 2s ease-in-out;
  box-shadow: 0 8px 16px rgb(0 0 0 / 76%);
}

img:hover {
  transform: scale(1.1);
}
.col {
  min-height: 550px;
}
</style>