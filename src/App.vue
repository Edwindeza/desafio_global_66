<template>
  <div id="app">
    <router-view ></router-view>
    <Loader></Loader>
  </div>

</template>

<script>

import Loader from '@/common/components/Loader/Loader.vue';

export default ({
  name: 'App',
  components: {
    Loader,
  },
});
</script>
<style lang="scss">
body{
  margin: 0;
}
</style>
