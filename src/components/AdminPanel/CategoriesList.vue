<template>
  <div class="row mt-3">
    <div
      v-for="(category, index) in categoriesList"
      :key="index"
      class="col border m-1 p-3"
    >
      <button
        type="button"
        class="btn-close btn-close-white float-end p-0"
        aria-label="Close"
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
    this.$store.dispatch(`GET_CATEGORIES`);
  },
  methods: {
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
          this.$store.dispatch(`GET_CATEGORIES`);
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>