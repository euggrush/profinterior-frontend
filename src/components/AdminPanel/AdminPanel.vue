<template>
  <section class="container-fluid position-relative">
    <h1 class="text-white text-center">Admin Panel</h1>
    <!-- Tabs -->
    <ul class="nav nav-pills nav-fill mt-3 mb-3">
      <li class="nav-item">
        <button
          class="nav-link"
          :class="{ active: categoriesActive }"
          type="button"
          @click="showCategories"
        >
          Categories
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          :class="{ active: projectsActive }"
          type="button"
          @click="showProjects"
        >
          Projects
        </button>
      </li>
    </ul>
    <!-- Tabs End -->
    <!-- CATEGORIES SECTION -->
    <section v-if="categoriesActive" class="categories-wrapper">
      <button
        type="button"
        class="btn btn-outline-warning rounded-pill"
        @click="showCategory = !showCategory"
      >
        Добавить категорию
      </button>
      <Transition name="slide-fade">
        <CreateCategoryForm v-if="showCategory" />
      </Transition>
      <CategoriesList />
    </section>
    <!-- CATEGORIES SECTION END -->

    <!-- PROJECTS SECTION -->
    <section v-if="projectsActive" class="projects-wrapper">
      <button
        type="button"
        class="btn btn-outline-warning rounded-pill"
        @click="showProject = !showProject"
      >
        Добавить проект
      </button>
      <Transition name="slide-fade">
        <CreateProjectForm v-if="showProject" />
      </Transition>
      <ProjectsList />
    </section>
    <!-- PROJECTS SECTION END -->
  </section>
</template>

<script>
import CreateProjectForm from "../Forms/CreateProjectForm.vue";
import CreateCategoryForm from "../Forms/CreateCategoryForm.vue";
import ProjectsList from "../AdminPanel/ProjectsList.vue";
import CategoriesList from "../AdminPanel/CategoriesList.vue";
export default {
  components: {
    CreateProjectForm,
    ProjectsList,
    CreateCategoryForm,
    CategoriesList,
  },
  data() {
    return {
      categoriesActive: true,
      projectsActive: false,
      showProject: false,
      showCategory: false,
    };
  },
  // watch: {
  //   generalErrors() {
  //     alert(this.$store.state.general_errors.data.message);
  //   },
  // },
  computed: {
    generalErrors() {
      if (this.$store.state.general_errors) {
        return this.$store.state.general_errors.data.message;
      }
      return ``;
    },
  },
  methods: {
    showCategories() {
      this.categoriesActive = true;
      this.projectsActive = false;
    },
    showProjects() {
      this.categoriesActive = false;
      this.projectsActive = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  min-height: 100vh;
  background-color: $mainBlack;
  padding-top: 6em;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
img {
  width: 33%;
  height: auto;
}
.btn-outline-warning {
  min-width: 23em;
}
// .btn-logout {
//   position: absolute;
//   right: 0;
//   transform: translate(-13%, -94%);
//   padding: 10px;
//   @include media-breakpoint-up(md) {
//     transform: translate(-20%, 0%);
//   }
//   @include media-breakpoint-up(xl) {
//     transform: translate(-90%, 0%);
//   }
// }
</style>