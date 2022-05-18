<template>
  <ProjectsTabs />
  <div class="row row-cols-auto mt-3 p-1">
    <div
      v-for="project in projectssList"
      :key="project.projectId"
      class="col m-1 p-3 bg-dark bg-gradient rounded w-100 project-item"
    >
      <button
        type="button"
        class="btn-close btn-close-white float-end p-0"
        aria-label="Close"
        @click="deletePriject(project.projectId)"
      ></button>

      <p class="text-white-50">{{ project.title }}</p>
      <p class="text-white-50">{{ project.description }}</p>
      <p class="text-white-50">Категория: {{ project.categoryName }}</p>
      <div v-if="project.pictures" class="row row-cols-auto gap-1">
        <div
          v-for="(picture, index) in project.pictures"
          :key="index"
          class="project-image m-1 col w-25 position-relative"
        >
          <button
            class="
              position-absolute
              top-0
              start-100
              translate-middle
              btn btn-outline-danger
              p-1
              rounded-circle
            "
            @click="deleteImage(picture.pictureId)"
          >
            X
          </button>
          <img
            :src="`${FILE_URL}${picture.fullPath}`"
            class="img-thumbnail p-0 border-0"
            alt="picture"
          />
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
  computed: {
    projectssList() {
      return this.$store.state.projects.projects ?? [];
    },
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      this.$store.dispatch(`GET_PROJECTS`, ``);
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
          this.fetchProjects();
        }, 1000);
      });
    },
    deletePriject(id) {
      let isExecuted = confirm("Удалить проект?");
      if (isExecuted) {
        this.$store
          .dispatch(`DELETE_PROJECT`, `?projectId=${id}`)
          .then(() => {
            this.fetchProjects();
          })
          .catch((err) => {
            alert(err);
          })
          .then(() => {
            this.fetchProjects();
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
  font-weight: bold;
  cursor: pointer;
}
.project-image img:hover {
  opacity: 0.6;
}
.btn {
  width: 30px;
  height: 30px;
}
</style>