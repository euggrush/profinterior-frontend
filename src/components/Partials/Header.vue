<template>
  <!-- Masthead-->
  <header
    class="masthead p-0 d-flex h-100 align-items-center justify-content-center"
    id="header"
  >
    <video
      class="position-absolute top-0 start-50 translate-middle-x"
      id="my-video"
      width="320"
      height="240"
      autoplay
      muted
      playsinline
      loop
    >
      <source src="../../assets/video/header-backgound.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="text-center" id="content">
      <img
        class="design-text-image mx-auto my-0"
        src="../../assets/img/logo-white.png"
        alt="logo"
        width="100"
        height="10"
      />
      <img
        class="design-quote-image mx-auto mt-5 mb-5 d-block"
        src="../../assets/img/design-text.png"
        alt="logo"
        width="100"
        height="10"
      />
      <a class="btn btn-primary" @click="scrollToContent" href="#"
        >Заказать Дизайн</a
      >
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    scrollToContent() {
      window.scrollTo(
        0,
        document.getElementById(`signup`).getBoundingClientRect().y +
          window.scrollY -
          120
      );
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 5.9vw;
}
#my-video {
  object-fit: cover;
  width: 100%;
  min-height: 35em;
  @include media-breakpoint-up(sm) {
    width: 100%;
  }
  @include media-breakpoint-up(md) {
    width: 528px;
  }
  @include media-breakpoint-up(lg) {
    width: 430px;
    min-height: 100vh;
  }
  @include media-breakpoint-up(xl) {
    width: 430px;
  }
  @include media-breakpoint-up(xxl) {
    width: 510px;
  }
}
#content {
  z-index: 2;
}
.design-text-image {
  width: 96vw;
  height: auto;
  @include media-breakpoint-up(sm) {
    width: 28vw;
  }
  @include media-breakpoint-up(md) {
    width: 66vw;
  }
  @include media-breakpoint-up(lg) {
    width: 40vw;
  }
  @include media-breakpoint-up(xl) {
    width: 34vw;
  }
  @include media-breakpoint-up(xxl) {
    width: 35vw;
  }
}
.design-quote-image {
  width: 80vw;
  height: auto;
  @include media-breakpoint-up(sm) {
    width: 28vw;
  }
  @include media-breakpoint-up(md) {
    width: 50vw;
  }
  @include media-breakpoint-up(lg) {
    width: 33vw;
  }
  @include media-breakpoint-up(xl) {
    width: 30vw;
  }
  @include media-breakpoint-up(xxl) {
    width: 28vw;
  }
}
</style>