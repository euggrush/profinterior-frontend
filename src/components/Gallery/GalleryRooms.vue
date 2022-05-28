<template>
  <section
    class="container-fluid ps-lg-5 pe-lg-5 position-relative"
    @click.self="hideLargePhoto"
    tabindex="0"
    @keydown.esc="hideLargePhoto"
  >
    <img
      v-if="showLargeImage"
      :src="largeImageUrl"
      class="
        large-image
        img-fluid
        position-absolute
        top-0
        start-50
        translate-middle-x
        p-0
      "
      alt="image"
      v-click-outside="hideLargePhoto"
      @click="hideLargePhoto"
    />
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
          :key="picture.pictureId"
          :src="`${FILE_URL}${picture.fullPath}`"
          class="img-thumbnail p-0 col"
          alt="image"
          @click="enlargePhoto(`${FILE_URL}${picture.fullPath}`)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ClickOutside from "vue-click-outside";

import { BASE_FILE_URL } from "../../constants";

export default {
  data() {
    return {
      showLargeImage: false,
      largeImageUrl: ``,
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
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
  methods: {
    hideLargePhoto() {
      this.showLargeImage = false;
      this.largeImageUrl = ``;
    },
    enlargePhoto(arg) {
      this.scrollToTop();
      this.showLargeImage = true;
      this.largeImageUrl = arg;
      // this.$nextTick(function () {
      //   this.$refs.modal.focus();
      // });
    },
    getProjectsByCategory(id) {
      this.$store.dispatch(`GET_PROJECTS`, `?categoryId=${id}`);
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

img {
  width: 100%;
  transition: all 2s ease-in-out;
  box-shadow: 0 8px 16px rgb(0 0 0 / 76%);
  cursor: pointer;

  @include media-breakpoint-up(lg) {
    width: 10%;
  }
}
.large-image {
  display: block;
  width: auto;
  height: 96vh;
  // min-height: 100vh;
  margin-top: 1em;
}
</style>