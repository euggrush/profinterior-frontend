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
        <select
          class="form-select mb-3"
          aria-label="Default select example"
          v-model="selectedCategory"
          required
        >
          <option selected disabled value="">Категория...</option>
          <option
            v-for="(category, index) in categoriesList"
            :key="index"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
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
            required
          />
        </div>
        <div class="mb-5">
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
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-outline-info rounded-pill mt-3">
          Добавить
        </button>
      </form>
    </Transition>
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
        <div v-if="project.pictures.length < 5" class="mt-3 mb-3">
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
  </section>
</template>

<script>
import { BASE_URL_API } from "../../constants";

export default {
  data() {
    return {
      show: false,
      projectTitle: ``,
      projectDescription: ``,
      selectedCategory: `Категория...`,
      FILE_URL: `${BASE_URL_API}/upload`,
    };
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories;
    },
    projectssList() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch(`GET_CATEGORIES`).then(() => {
      this.$store.dispatch(`GET_PROJECTS`);
    });
  },
  methods: {
    createProject() {
      this.$store
        .dispatch(`CREATE_PROJECT`, {
          title: this.projectTitle,
          description: this.projectDescription,
          category_id: this.selectedCategory,
        })
        .then(() => {
          this.$store.dispatch(`GET_PROJECTS`);
        });
    },

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
  // max-width: 320px;
}
img {
  width: 100%;
}
</style>