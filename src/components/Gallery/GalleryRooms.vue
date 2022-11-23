<template>
  <section
    class="container-fluid gallery-page ps-lg-5 pe-lg-5 position-relative"
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
        fixed-top
        top-0
        start-50
        translate-middle-x
        p-0
      "
      alt="image"
      v-click-outside="hideLargePhoto"
      @click="hideLargePhoto"
    />
    <h3 class="text-light border-bottom pb-3">{{ title }}</h3>
    <div
      class="p-3 border-bottom"
      v-for="project in projectssList"
      :key="project.projectId"
    >
      <h4 class="text-light">{{ project.title }}</h4>
      <button
        type="button"
        class="btn btn-outline-light"
        @click="getProjectInfo(project.projectId)"
      >
        <span v-if="showProjectInfo == project.projectId">Скрыть описание</span>
        <span v-else>Показать описание</span>
      </button>
      <Transition>
        <article v-if="showProjectInfo == project.projectId">
          <p class="text-light mt-3">
            {{ project.description }}
          </p>
          <div class="row m-0 gap-3" v-if="project.pictures.length > 0">
            <img
              v-for="picture in project.pictures"
              :key="`${FILE_URL}${picture.fullPath}`"
              :src="`${FILE_URL}${picture.fullPath}`"
              class="img-thumbnail p-0 col gallery-images"
              alt="image"
              @click="enlargePhoto(`${FILE_URL}${picture.fullPath}`)"
            />
          </div>
        </article>
      </Transition>
    </div>
  </section>
</template>

<script>
import ClickOutside from "vue-click-outside";

import { BASE_FILE_URL } from "../../constants";

export default {
  data() {
    return {
      showProjectInfo: false,
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
    this.scrollToTop();
    this.title = this.$route.query.name;
    this.getProjectsByCategory(this.$route.query.id);
    this.popupItem = this.$el;
    this.unfadePage(`.gallery-page`, `.gallery-images`);
  },
  directives: {
    ClickOutside,
  },
  methods: {
    hideLargePhoto() {
      this.showLargeImage = false;
      this.largeImageUrl = ``;
      this.unfadePage(`.gallery-page`, `.gallery-images`);
    },
    enlargePhoto(arg) {
      this.scrollToTop();
      this.fadePage(`.gallery-page`, `.gallery-images`);
      this.showLargeImage = true;
      this.largeImageUrl = arg;
    },
    getProjectsByCategory(id) {
      this.$store.dispatch(`GET_PROJECTS`, `?categoryId=${id}`);
    },
    getProjectInfo(id) {
      if (this.showProjectInfo !== id) {
        this.showProjectInfo = id;
      } else {
        this.showProjectInfo = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-page {
  font-size: $font-size-micro;
  @include media-breakpoint-up(md) {
    font-size: $font-size-mobile;
  }
}
.container-fluid {
  background-color: $mainBlack;
  padding-top: 6em;
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
  margin-top: 1em;
  z-index: 2;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
// .fade {
//   animation: fadeInAnimation ease 3s;
//   animation-iteration-count: 1;
//   animation-fill-mode: forwards;
// }
// @keyframes fadeInAnimation {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }
</style>