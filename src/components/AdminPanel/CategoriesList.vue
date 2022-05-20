<template>
  <div class="row row-cols-auto mt-3">
    <div
      v-for="category in categoriesList.categories"
      :key="category.categoryId"
      class="col bg-dark bg-gradient rounded m-1 p-3 category-item"
    >
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
      <button
        type="button"
        class="btn btn-outline-danger w-100"
        @click="deleteCategory(category.categoryId)"
      >
        Удалить
      </button>
      <Transition name="bounce">
        <EditCategoryForm
          :myProps="category.categoryId"
          v-if="showEditForm == category.categoryId"
        />
      </Transition>
      <button
        type="button"
        class="btn btn-outline-info w-100 mt-3"
        @click="getEditForm(category.categoryId)"
      >
        Редактировать
      </button>
    </div>
  </div>
</template>

<script>
import { BASE_FILE_URL } from "../../constants";
import UploadCategoryImage from "../Forms/UploadCategoryImage.vue";
import EditCategoryForm from "../Forms/EditCategoryForm.vue";

export default {
  components: { UploadCategoryImage, EditCategoryForm },
  data() {
    return {
      FILE_URL: `${BASE_FILE_URL}`,
      showEditForm: false,
      categoryName: ``,
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
      console.log(id);
      let isExecuted = confirm("Удалить категонию?");
      if (isExecuted) {
        alert(`Ошибка`);
        // this.$store.dispatch(`DELETE_CATEGORY_IMAGE`, id)
        // .then(() => {
        //   this.$store.dispatch(`DELETE_CATEGORY`, `?id=${id}`).then(() => {
        //     this.fetchCategories();
        //   });
        // });
      }
    },
    getEditForm(id) {
      if (this.showEditForm != id) {
        this.showEditForm = id;
      } else {
        this.showEditForm = false;
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