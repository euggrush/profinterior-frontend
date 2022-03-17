<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: $mainWhite;
  @include media-breakpoint-up(sm) {
    font-size: $font-size-small;
  }
  @include media-breakpoint-up(md) {
    font-size: $font-size-medium;
  }
  @include media-breakpoint-up(lg) {
    font-size: $font-size-medium;
  }
  @include media-breakpoint-up(xl) {
    font-size: $font-size-large;
  }
  @include media-breakpoint-up(xxl) {
    font-size: $font-size-xxl;
  }
}
#app {
  font-family: "Cormorant Garamond", "Ubuntu", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $mainBlack;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
