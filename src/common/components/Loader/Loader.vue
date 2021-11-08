<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';

export default {
  name: 'Loader',
  // props: ['showLoader'],
  components: {},
  data() {
    return {
      showLoader: false,
    };
  },
  methods: {
  },
  computed: {
    ...mapState('listPokemons', ['isLoading']),
  },
};
</script>
