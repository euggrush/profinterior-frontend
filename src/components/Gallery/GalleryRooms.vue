<template>
  <section class="container-fluid ps-lg-5 pe-lg-5">
    <h1 class="text-white">{{ title }}</h1>
    <div
      class="mt-5 p-3 border"
      v-for="project in projectssList"
      :key="project.id"
    >
      <h2 class="text-light">{{ project.title }}</h2>
      <p class="text-light fst-italic mt-3">
        {{ project.description }}
      </p>
      <div class="row gap-3" v-if="project.pictures.length > 0">
        <img
          v-for="picture in project.pictures"
          :key="picture"
          :src="`${FILE_URL}${picture.fullPath}`"
          class="img-thumbnail p-0 col"
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
    // getProject(arg) {
    //   this.$router.push({
    //     path: `/gallery/${arg}`,
    //     query: { id: arg.projectId, project: arg.title },
    //   });
    // },
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
  width: 100%;
  // height: auto;
  transition: all 2s ease-in-out;
  box-shadow: 0 8px 16px rgb(0 0 0 / 76%);
  @include media-breakpoint-up(lg) {
    width: 10%;
  }
}

// img:hover {
//   transform: scale(1.1);
// }
// .col {
//   min-height: 550px;
// }
</style>