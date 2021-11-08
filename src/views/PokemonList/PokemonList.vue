<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex';
import PokemonDetail from '@/common/components/PokemonDetail/PokemonDetail.vue';

export default {
  name: 'Pokedex',
  components: {
    PokemonDetail,
  },
  created() {
    this.showLoader();
    this.getListPokemons();
  },
  data() {
    return {
      showModal: false,
      searchValue: '',
      flagFilterList: true,
      pokemon: '',
    };
  },
  computed: {
    ...mapGetters('listPokemons', ['getPokemonByTerm', 'getPokemonByTermWithFavorite']),
    ...mapState('listPokemons', ['pokemons', 'updatePokemons']),
    pokemonsByName() {
      if (this.updatePokemons) {
        return this.getPokemonByTerm(this.pokemons, this.searchValue);
      }
      return this.getPokemonByTerm(this.pokemons, this.searchValue);
    },
    pokemonsByFavorite() {
      if (this.updatePokemons) {
        return this.getPokemonByTermWithFavorite(this.pokemons, this.searchValue);
      }
      return this.getPokemonByTermWithFavorite(this.pokemons, this.searchValue);
    },
  },
  methods: {
    ...mapActions('listPokemons', ['getListPokemons', 'getDetailPokemon', 'showLoader', 'setFavorite']),
    async OpenModal(pokemon) {
      this.showLoader();
      await this.getDetailPokemon(pokemon.name);
      this.showModal = true;
    },
    async setFavoritePokemon(selectPokemon) {
      this.setFavorite(selectPokemon);
    },
    async changeFilter(value) {
      this.flagFilterList = value;
    },
  },
};
</script>
