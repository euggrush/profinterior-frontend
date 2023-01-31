<template>
  <!-- Projects-->
  <section class="projects-section bg-light pt-5" id="projects">
    <div class="container px-4 px-lg-5">
      <h2 class="text-center mb-lg-5">Галерея</h2>
      <div
        v-for="(category, index) in categoriesList"
        :key="index"
        class="row gx-0 mt-5 mt-lg-0 justify-content-center"
        @click="getRooms(category)"
      >
        <div class="col-lg-6">
          <img
            class="img-fluid w-100"
            :src="`${FILE_URL}${category.category_images[0].path}`"
            alt="image"
          />
        </div>
        <div class="col-lg-6" :class="{ 'order-lg-first': index % 2 !== 0 }">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">{{ category.name }}</h4>

                <hr class="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { BASE_FILE_URL } from "../../constants";

export default {
  data() {
    return {
      categories: [],
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
    fetchCategories() {
      this.$store.dispatch(`GET_CATEGORIES`);
    },
    getRooms(arg) {
      this.$router.push({
        path: "/gallery",
        query: { name: arg.name, id: arg.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  cursor: pointer;
}
img {
  transition: all 2s ease-in-out;
  box-shadow: 0 8px 16px rgb(0 0 0 / 76%);
}

img:hover {
  transform: scale(1.1);
}
</style>