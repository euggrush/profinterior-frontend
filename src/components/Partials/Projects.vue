<template>
  <!-- Projects-->
  <section class="projects-section bg-light pt-5" id="projects">
    <div class="container px-4 px-lg-5">
      <h2 class="fs-1 fst-italic text-center">Галерея</h2>
      <!-- Featured Project Row-->
      <!-- <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
        <div class="col-xl-8 col-lg-7">
          <img
            class="img-fluid mb-3 mb-lg-0"
            src="../../assets/img/gallery-bedroom.jpg"
            alt="..."
          />
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="featured-text text-center text-lg-left">
            <h4>Shoreline</h4>
            <p class="text-black-50 mb-0">
              Grayscale is open source and MIT licensed. This means you can use
              it for any project - even commercial projects! Download it,
              customize it, and publish your website!
            </p>
          </div>
        </div>
      </div> -->
      <!-- Project One Row-->
      <div
        class="row gx-0 mb-5 mb-lg-0 justify-content-center mt-5"
        @click="getBedrooms"
      >
        <div class="col-lg-6">
          <img
            class="img-fluid"
            src="../../assets/img/gallery-bedroom.jpg"
            alt="..."
          />
        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Комнаты, гостинные</h4>
                <p class="mb-0 text-white-50">
                  An example of where you can put an image of a project, or
                  anything else, along with a description.
                </p>
                <hr class="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Project Two Row-->
      <div class="row gx-0 justify-content-center" @click="getBathrooms">
        <div class="col-lg-6">
          <img
            class="img-fluid"
            src="../../assets/img/gallery-bathroom.jpg"
            alt="..."
          />
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Ванные комнаты</h4>
                <p class="mb-0 text-white-50">
                  Another example of a project with its respective description.
                  These sections work well responsively as well, try this theme
                  on a small screen!
                </p>
                <hr class="d-none d-lg-block mb-0 me-0" />
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
  methods: {
    getBedrooms() {
      this.$router.push(`/bedrooms`);
    },
    getBathrooms() {
      this.$router.push(`/bathrooms`);
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  cursor: pointer;
}
.row:hover {
  opacity: 0.9;
}
</style>