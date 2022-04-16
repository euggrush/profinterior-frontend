<template>
  <section class="container-fluid">
    <h1 class="text-white text-center">Admin Panel</h1>
    <button
      type="button"
      class="btn btn-outline-warning rounded-pill"
      @click="show = !show"
    >
      Добавить проект
    </button>
    <Transition name="slide-fade">
      <form
        @submit.prevent="createProject"
        class="border border-warning rounded mt-3 p-5"
        v-if="show"
      >
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white-50"
            >Название проекта</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="название проекта..."
            v-model="projectTitle"
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label text-white-50"
            >Описание</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Описание..."
            v-model="projectDescription"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-outline-info rounded-pill mt-3">
          Добавить
        </button>
      </form>
    </Transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      projectTitle: ``,
      projectDescription: ``,
    };
  },
  methods: {
    createProject() {},
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
</style>