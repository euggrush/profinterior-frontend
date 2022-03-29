<template>
  <section class="container-fluid ps-5 pe-5">
    <h1 class="text-white">Ванные Комнаты</h1>
    <div class="row row-cols-auto row-cols-md-3 mt-5">
      <div class="col">
        <img
          src="../../assets/img/bathroom1.jpg"
          class="img-thumbnail"
          alt="image"
        />
      </div>
      <div class="col">
        <img
          src="../../assets/img/bathroom2.jpg"
          class="img-thumbnail"
          alt="image"
        />
      </div>
      <div class="col">
        <img
          src="../../assets/img/bathroom1.jpg"
          class="img-thumbnail"
          alt="image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: $mainBlack;
  padding-top: 10em;
  min-height: 100vh;
}
.img-thumbnail {
  background-color: $mainBlack !important;
  border: none !important;
}
</style>