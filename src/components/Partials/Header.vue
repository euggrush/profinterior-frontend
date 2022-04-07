<template>
  <!-- Masthead-->
  <header class="masthead" id="header">
    <div
      class="
        container
        px-4 px-lg-5
        d-flex
        h-100
        align-items-center
        justify-content-center
      "
    >
      <div class="d-flex justify-content-center">
        <video
          width="320"
          height="240"
          autoplay
          muted
          playsinline
          loop
          id="myVideo"
        >
          <source
            src="../../assets/video/header-backgound.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div class="text-center" id="content">
          <h1 class="mx-auto my-0 text-uppercase">Profinterior</h1>
          <h2 class="text-white-50 mx-auto mt-2 mb-5 text-capitalize">
            профессиональный дизайн интерьеров в ваш дом
          </h2>
          <a class="btn btn-primary" @click="scrollToContent" href="#">Заказать Дизайн</a>
        </div>
      </div>
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
#myVideo {
  // object-fit: cover;
  object-fit: scale-down;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
#content {
  z-index: 2;
}
</style>