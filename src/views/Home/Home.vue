<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
// @ is an alias to /src

import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {},
  created() {
    this.showLoader();
  },
  methods: {
    ...mapActions('listPokemons', ['hideLoader']),
    showLoader() {
      setInterval(() => {
        this.hideLoader();
      }, 1000);
    },
  },
};
</script>
