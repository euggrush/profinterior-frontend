<template>
  <section class="container-fluid ps-5 pe-5">
    <h1 class="text-white text-capitalize">{{ title }}</h1>
    <div class="row row-cols-auto row-cols-md-3 mt-5">
      <div v-for="(room, index) in roomsList" :key="index" class="col">
        <img :src="room.pictures[0].path" class="img-thumbnail" alt="image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isFullPicture: false,
      hideColumn: false,
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
    console.log(this.$route.query.rooms);
    this.title = this.$route.query.title;
    this.roomsQuery = this.$route.query.rooms;
    this.fetchData(`./data/project/project-${this.roomsQuery}.json`).then(
      (r) => {
        this.rooms = r;
      }
    );
  },
  methods: {
    showFullImage() {
      this.isFullPicture = true;
      this.hideColumn = true;
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
// .col:hover {
//   position: absolute;
//   left: 50%;
//   width: 98%;
//   -webkit-transform: translateX(-50%);
//   transform: translateX(-50%);
// }
// .col img:hover {
//   width: 100%;
//   max-height: 70vh;
//   object-fit: cover;
// }
</style>