<template>
  <ProjectsTabs />
  <div class="mt-3 p-1">
    <div
      v-for="project in projectssList"
      :key="project.projectId"
      class="m-1 p-3 bg-dark bg-gradient rounded w-100 project-item"
    >
      <button
        type="button"
        class="btn-close btn-close-white float-end p-0"
        aria-label="Close"
        @click="deleteProject(project.id)"
      ></button>

      <p class="text-white-50">{{ project.title }}</p>
      <p class="text-white-50">{{ project.description }}</p>
      <p class="text-white-50">Категория: {{ project.categories.name }}</p>
      <div class="row row-cols-auto row-cols-lg-4">
        <!-- <div class="text-white">{{project}}</div> -->
        <div
          v-for="(picture, index) in project.pictures"
          :key="index"
          class="project-image col"
        >
          <img
            :src="`${FILE_URL}${picture.path}`"
            class="img-thumbnail p-0 border-0"
            alt="picture"
          />
          <button
            class="btn btn-outline-danger w-100 mt-3"
            @click="deleteImage(picture.id)"
          >
            Удалить фото
          </button>
        </div>
      </div>
      <UploadProjectImages
        v-if="project.pictures.length < 10"
        :projectData="project"
      />
    </div>
  </div>
</template>

<script>
import { BASE_FILE_URL } from "../../constants";
import ProjectsTabs from "../Partials/Tabs/ProjectsTabs.vue";
import UploadProjectImages from "../Forms/UploadProjectImages.vue";

export default {
  components: { ProjectsTabs, UploadProjectImages },
  data() {
    return {
      FILE_URL: `${BASE_FILE_URL}`,
    };
  },
  watch: {
    isChangesNeede() {
      this.fetchProjects(this.$store.state.picked_category_id);
    },
  },
  computed: {
    getPicketCategoryId() {
      return this.$store.state.picked_category_id;
    },
    isChangesNeede() {
      return this.$store.state.is_changes_needed;
    },
    projectssList() {
      return this.$store.state.projects ?? [];
    },
  },
  methods: {
    fetchProjects(id) {
      if (id) {
        this.$store.dispatch(`GET_PROJECTS`, `?categoryId=${id}`);
      } else {
        this.$store.dispatch(`GET_PROJECTS`, ``);
      }
    },
    deleteProject(id) {
      let isExecuted = confirm("Удалить проект?");
      if (isExecuted) {
        this.$store
          .dispatch(`DELETE_PROJECT`, `/${id}`)
          .then(() => {
            this.fetchProjects(this.getPicketCategoryId);
          })
          .catch((err) => {
            alert(err);
          })
          .then(() => {
            this.fetchProjects(this.getPicketCategoryId);
          });
      }
    },
    deleteImage(id) {
      let isExecuted = confirm("Удалить картинку?");
      if (isExecuted) {
        this.$store.dispatch(`DELETE_PROJECT_IMAGE`, id).then(() => {
          this.fetchProjects();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.project-item:hover {
  box-shadow: 0px 0px 50px rgba(149, 30, 30, 0.6);
  cursor: pointer;
}
.project-image img:hover {
  opacity: 0.6;
}
</style>