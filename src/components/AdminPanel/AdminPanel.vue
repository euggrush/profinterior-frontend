<template>
  <section class="container-fluid">
    <h1 class="text-white text-center">Admin Panel</h1>
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
    <ProjectsList />

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
</template>

<script>
import CreateProjectForm from "../Forms/CreateProjectForm.vue";
import CreateCategoryForm from "../Forms/CreateCategoryForm.vue";
import ProjectsList from "../AdminPanel/ProjectsList.vue";
export default {
  components: { CreateProjectForm, ProjectsList, CreateCategoryForm },
  data() {
    return {
      showProject: false,
      showCategory: false,
    };
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
.project-item {
  width: 100%;
}
img {
  width: 33%;
  height: auto;
}
.btn {
  min-width: 20em;
}
</style>