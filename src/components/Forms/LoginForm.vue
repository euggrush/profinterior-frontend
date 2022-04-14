<template>
  <section class="container-fluid login-page">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white-50"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label text-white-50"
          >Password</label
        >
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: ``,
      password: ``,
    };
  },
  methods: {
    login() {
      this.$store.dispatch(`LOGIN`, {
        email: this.email,
        password: this.password,
      });
      //   console.log(this.email, this.password);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 90vh;
  background-color: $mainBlack;
  padding-top: 13em;
}
form {
  margin: 0 auto;
  width: 50%;
}
</style>