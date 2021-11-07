<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
// @ is an alias to /src

import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {},
  created() {
    setInterval(() => {
      this.hideLoader();
    }, 1000);
  },
  methods: {
    ...mapActions('listPokemons', ['hideLoader']),
  },
};
</script>
