<template>
  <div class="row row-cols-auto mt-3">
    <div
      v-for="(category, index) in categoriesList"
      :key="index"
      class="col bg-dark bg-gradient rounded m-1 p-3 category-item"
    >
      <button
        type="button"
        class="btn-close btn-close-white float-end p-0"
        aria-label="Close"
        @click="deleteCategory(category.id)"
      ></button>

      <p class="text-white-50">{{ category.name }}</p>
      <div class="row row-cols-auto gap-1">
        <img
          v-for="(picture, index) in category.category_images"
          :key="index"
          :src="`${FILE_URL}${picture.path}`"
          class="img-thumbnail col"
          alt="picture"
        />
      </div>
      <div
        v-if="!category.category_images || category.category_images.length < 1"
        class="mt-3 mb-3"
      >
        <label for="formFile" class="form-label text-white-50"
          >Add category picture</label
        >
        <input
          class="form-control"
          type="file"
          id="formFile"
          @change="uploadCategoryPicture($event, category)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL_API } from "../../constants";

export default {
  data() {
    return {
      FILE_URL: `${BASE_URL_API}/upload`,
    };
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories.categories;
    },
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.$store.dispatch(`GET_CATEGORIES`);
    },
    uploadCategoryPicture(event, category) {
      let picture = event.target.files[0];
      const formData = new FormData();
      formData.append(
        `meta`,
        JSON.stringify({
          category_id: category.id,
        })
      );
      formData.append("upload", picture);
      this.$store.dispatch(`UPLOAD_CATEGORY_PICTURE`, formData).then(() => {
        setTimeout(() => {
          this.fetchCategories();
        }, 1000);
      });
    },
    deleteCategory(id) {
      let isExecuted = confirm("Удалить категонию?");
      if (isExecuted) {
        this.$store
          .dispatch(`DELETE_CATEGORY`, `?id=${id}`)
          .then(() => {
            this.fetchCategories();
          })
          .catch((err) => {
            alert(err);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.category-item {
  width: 97%;
  @include media-breakpoint-up(md) {
    width: 48%;
  }
  @include media-breakpoint-up(lg) {
    width: 49%;
  }
  @include media-breakpoint-up(xl) {
    width: 32%;
  }
  @include media-breakpoint-up(xxl) {
    width: 32.5%;
  }
}
.category-item:hover {
  box-shadow: 0px 0px 50px rgba(149, 30, 30, 0.6);
  font-weight: bold;
  cursor: pointer;
}
</style>