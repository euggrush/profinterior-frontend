<template>
  <div class="row row-cols-auto mt-3">
    <div
      v-for="category in categoriesList.categories"
      :key="category.categoryId"
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
          :src="`${FILE_URL}${category.picture}`"
          class="img-thumbnail col border-0 p-0"
          alt="picture"
        />
      </div>
      <UploadCategoryImage
        :categoryData="category"
        @imageUploaded="rerenderCategiriesList"
      />
    </div>
  </div>
</template>

<script>
import { BASE_FILE_URL } from "../../constants";
import UploadCategoryImage from "../Forms/UploadCategoryImage.vue";

export default {
  components: { UploadCategoryImage },
  data() {
    return {
      FILE_URL: `${BASE_FILE_URL}`,
    };
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories;
    },
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    rerenderCategiriesList() {
      this.fetchCategories();
    },
    fetchCategories() {
      this.$store.dispatch(`GET_CATEGORIES`);
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