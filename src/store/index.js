import Vue from 'vue';
import Vuex from 'vuex';
import listPokemonStore from './listPokemon/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaderActive: false,
  },
  modules: {
    listPokemons: listPokemonStore,
  },
});
