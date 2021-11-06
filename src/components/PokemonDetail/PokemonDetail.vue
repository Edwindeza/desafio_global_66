<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
// @ is an alias to /src

export default {
  name: 'PokemonDetail',
  props: ['pokemon'],
  components: {},
  data() {
    return {
    };
  },
  methods: {
    setFavoritePokemon() {
      console.log('Desmarcar o marcar pokemon favorito');
    },
    shared() {
      console.log('copiar pokemon en papelera');
    },
  },
};
</script>
