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

      <button
        type="submit"
        class="btn btn-primary"
        :class="{ shake: disabled }"
      >
        Submit
      </button>
      <span v-if="disabled" class="ms-3 text-danger fw-bold">{{
        errorMsg
      }}</span>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: ``,
      password: ``,
      disabled: false,
      errorMsg: ``,
    };
  },
  methods: {
    warnDisabled(arg) {
      this.disabled = true;
      this.errorMsg = arg;
      setTimeout(() => {
        this.disabled = false;
        this.errorMsg = ``;
      }, 1500);
    },
    login() {
      this.$store
        .dispatch(`LOGIN`, {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          let myRole = this.$store.state.my_role;
          if (myRole === `admin`) {
            this.$router.push(`/admin-panel`);
          } else {
            this.$router.push(`/my-account`);
          }
        })
        .catch((err) => {
          this.warnDisabled(err.response.data.message);
        });
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
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>