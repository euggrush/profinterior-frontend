<template>
  <div class="row row-cols-auto mt-3">
    <div
      v-for="category in categoriesList"
      :key="category.categoryId"
      class="
        col
        bg-dark bg-gradient
        rounded
        m-1
        p-3
        category-item
        position-relative
      "
    >
      <p class="text-white-50">{{ category.name }}</p>
      <img
        v-if="category.category_images.length > 0"
        :src="`${FILE_URL}${category.category_images[0].path}`"
        class="img-thumbnail border-0 p-0"
        alt="picture"
      />
      <UploadCategoryImage :categoryData="category" />
      <button
        type="button"
        class="btn btn-outline-danger w-100"
        @click="deleteCategory(category.id)"
      >
        Удалить
      </button>
      <Transition name="bounce">
        <div
          v-if="showEditForm == category.categoryId"
          class="
            position-absolute
            bottom-0
            start-0
            w-100
            bg-light
            p-3
            border border-info
            mb-3
          "
        >
          <button
            type="button"
            class="btn-close float-end mb-3"
            aria-label="Close"
            @click="closeEditForm"
          ></button>
          <EditCategoryForm
            :myProps="category.categoryId"
            @closeForm="closeEditForm"
          />
        </div>
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
// import { mapGetters } from "vuex";

import { BASE_FILE_URL } from "../../constants";
import UploadCategoryImage from "../Forms/UploadCategoryImage.vue";
import EditCategoryForm from "../Forms/EditCategoryForm.vue";

export default {
  components: { UploadCategoryImage, EditCategoryForm },
  data() {
    return {
      categoriesData: [],
      FILE_URL: `${BASE_FILE_URL}`,
      showEditForm: false,
      categoryName: ``,
    };
  },
  watch: {
    isChangesNeede() {
      this.fetchCategories();
    },
  },
  computed: {
    categoriesList() {
      return this.$store.state.categories;
    },
    isChangesNeede() {
      return this.$store.state.is_changes_needed;
    },
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.$store.dispatch(`GET_CATEGORIES`, ``);
    },
    deleteCategory(id) {
      console.log(id);
      let isExecuted = confirm("Удалить категонию?");
      if (isExecuted) {
        this.$store.dispatch(`DELETE_CATEGORY`, `/${id}`).then(() => {
          this.fetchCategories();
        });
      }
    },
    getEditForm(id) {
      if (this.showEditForm != id) {
        this.showEditForm = id;
      } else {
        this.showEditForm = false;
      }
    },
    closeEditForm() {
      this.showEditForm = false;
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
  cursor: pointer;
}
</style>