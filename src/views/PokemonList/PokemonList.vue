<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';
import PokemonDetail from '@/components/PokemonDetail/PokemonDetail.vue';

export default {
  name: 'Home',
  components: {
    PokemonDetail,
  },
  mounted: {
    // getListPokemons();
  },
  data() {
    return {
      showModal: false,
      searchValue: '',
      // pokemons: [
      //   1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3,
      //   2, 3, 4, 2, 3, 4, 4, 2, 3, 4, 2, 3, 4, 3, 4, 2, 3, 4,
      // ],
      pokemon: '',
    };
  },
  methods: {
    ...mapActions('listPokemons', ['getListPokemons', 'getDetailPokemon']),
    OpenModal(pokemon) {
      console.log('show modal:', pokemon);
      this.pokemon = pokemon;
      this.showModal = true;
    },
  },
  computed: {
    ...mapState('listPokemons', ['pokemons']),
  },
};
</script>
