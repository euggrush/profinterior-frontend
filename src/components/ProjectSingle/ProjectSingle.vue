<template>
  <section class="container-fluid ps-5 pe-5 text-white">
    <h1>{{ projectData.title }}</h1>
    <div class="row row-cols-auto row-cols-md-2">
      <div
        v-for="(pictire, index) in projectData.pictures"
        :key="index"
        class="col mt-3"
      >
        <img :src="pictire.path" class="img-fluid" alt="image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projectId: ``,
      title: ``,
      projectData: {},
      project: ``,
    };
  },
  mounted() {
    this.project = this.$route.query.project;
    this.projectId = this.$route.query.id;
    this.fetchData(`./data/project/project-${this.project}.json`).then((r) => {
      r.map((item) => {
        if (item.id == this.projectId) {
          this.projectData = item;
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: $mainBlack;
  padding-top: 10em;
  min-height: 100vh;
}
</style>