<template>
  <div id="app">
    <router-view/>
    <Loader show-loader="false"></Loader>
  </div>

</template>

<script>

import Loader from '@/components/Loader/Loader.vue';

export default ({
  name: 'App',
  components: {
    Loader,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
.body{
  margin: 0;
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
