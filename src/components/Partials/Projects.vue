<template>
  <!-- Projects-->
  <section class="projects-section bg-light pt-5" id="projects">
    <div class="container px-4 px-lg-5">
      <h2 class="text-center mb-lg-5">Галерея</h2>
      <div
        v-for="(category, index) in categoriesList"
        :key="index"
        class="row gx-0 mt-5 mt-lg-0 justify-content-center"
        @click="getRooms(category.name)"
      >
        <div class="col-lg-6">
          <img class="img-fluid w-100" :src="category.image" alt="image" />
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
export default {
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    categoriesList() {
      return this.categories;
    },
  },
  mounted() {
    this.fetchData(`./data/categories.json`).then((r) => {
      this.categories = r;
    });
  },
  methods: {
    getRooms(arg) {
      switch (arg) {
        case `Гостиные`:
          this.getGallery({ title: `Гостиные`, query: `livingroom` });
          break;
        case `Ванные комнаты`:
          this.getGallery({ title: `Ванные комнаты`, query: `bathroom` });
          break;
        case `Спальни`:
          this.getGallery({ title: `Спальни`, query: `bedroom` });
          break;
        default:
          return;
      }
    },
    getGallery(arg) {
      this.$router.push({
        path: "/gallery",
        query: { title: arg.title, rooms: arg.query },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  cursor: pointer;
}
img{
  transition: all 2s ease-in-out;
  box-shadow: 0 8px 16px rgb(0 0 0 / 76%);
}

img:hover{
  transform: scale(1.1);
} 
</style>