<template>
  <section class="container-fluid ps-5 pe-5">
    <h1 class="text-white text-capitalize">{{ title }}</h1>
    <div class="row row-cols-auto row-cols-md-3 mt-5">
      <div
        v-for="(room, index) in roomsList"
        :key="index"
        class="col"
        @click="getProject(room.id)"
      >
        <img :src="room.pictures[0].path" class="img-thumbnail" alt="image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rooms: [],
      title: ``,
      roomsQuery: ``,
    };
  },
  computed: {
    roomsList() {
      return this.rooms;
    },
  },
  mounted() {
    this.title = this.$route.query.title;
    this.roomsQuery = this.$route.query.rooms;
    this.fetchData(`./data/project/project-${this.roomsQuery}.json`).then(
      (r) => {
        this.rooms = r;
      }
    );
  },
  methods: {
    getProject(arg) {
      this.$router.push({
        path: `/gallery/${arg}`,
        query: { id: arg, project: this.roomsQuery },
      });
    },
  },
};
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
.col {
  cursor: pointer;
}
</style>