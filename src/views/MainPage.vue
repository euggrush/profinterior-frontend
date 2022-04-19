<template>
  <section id="page-top">
    <Header />
    <About />
    <Projects />
    <Signup />
    <Contact />
  </section>
</template>

<script>
import Header from "../components/Partials/Header.vue";
import About from "../components/Partials/About.vue";
import Projects from "../components/Partials/Projects.vue";
import Signup from "../components/Partials/Signup.vue";
import Contact from "../components/Partials/Contact.vue";
export default {
  components: {
    // Navigation,
    Header,
    // Footer,
    About,
    Projects,
    Signup,
    Contact,
  },
  mounted() {
    this.getMenuWork();
  },
};
</script>

<style lang="scss" scoped>
</style>