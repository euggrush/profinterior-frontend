<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5">
      <router-link class="navbar-brand" to="/">
        <!-- <img
          class="logo"
          src="../../assets/img/logo-black.png"
          alt="logo"
          width="100"
          height="10"
        />
        <img
          class="logo-white"
          src="../../assets/img/logo-white.png"
          alt="logo"
          width="100"
          height="10"
        /> -->
      </router-link>
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
            <a class="nav-link" href="#" @click="scrollToContent(`about`)"
              >дизайн</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="scrollToContent(`signup`)"
              >cостав проекта</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="scrollToContent(`projects`)"
              >проекты</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link numbers" href="tel:+79196123812">+7 (919) 612-38-12</a>
          </li>
          <li v-if="this.$store.state.status === 'success'" class="nav-item">
            <button type="button" class="nav-link btn" @click="logout">
              выход
            </button>
          </li>
          <li v-else class="nav-item">
            <button type="button" class="nav-link btn" @click="login">
              вход
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push(`/login`);
    },
    logout() {
      this.$store.dispatch(`LOGOUT`).then(() => {
        this.$router.push(`/login`);
      });
    },
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
.logo,
.logo-white {
  width: 170px;
  height: auto;
  @include media-breakpoint-up(sm) {
    width: 390px;
  }
  @include media-breakpoint-up(md) {
    width: 560px;
  }
  @include media-breakpoint-up(lg) {
    width: 410px;
  }
  @include media-breakpoint-up(xl) {
    width: 590px;
  }
  @include media-breakpoint-up(xxl) {
    width: 630px;
  }
}
</style>