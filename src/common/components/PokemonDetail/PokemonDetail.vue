<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PokemonDetail',
  props: ['favorite'],
  components: {},
  data() {
    return {
    };
  },
  created() {
    console.log(this.pokemon);
    // console.log(this.pokemon.name);
    // this.showLoader();
  },
  methods: {
    ...mapActions('listPokemons', ['showLoader', 'setFavorite']),
    shared() {
      const textCopy = `Name: ${this.pokemon.name}, Weight: ${this.pokemon.weight}, Height: ${this.pokemon.height}, Types: ${this.pokemon.types}, Photo:  ${this.pokemon.imageUrl}`;
      this.$copyText(textCopy).then((e) => {
        alert('Copied');
        console.log(e);
      }, (e) => {
        alert('Can not copy');
        console.log(e);
      });
    },
    async setFavoritePokemon(selectPokemon) {
      this.setFavorite(selectPokemon);
    },
  },
  computed: {
    ...mapState('listPokemons', ['isLoading', 'pokemon']),
  },
};
</script>
