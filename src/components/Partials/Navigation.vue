<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5">
      <router-link class="navbar-brand" to="/">Start Bootstrap</router-link>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="scrollToContent(`header`)"
              >О Нас</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="scrollToContent(`projects`)"
              >Проекты</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tel:+79196123812">+7 (919) 612-38-12</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollToContent(arg) {
      window.scrollTo(
        0,
        document.getElementById(arg).getBoundingClientRect().y +
          window.scrollY -
          60
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>