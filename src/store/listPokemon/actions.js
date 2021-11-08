import pokemonAPi from '@/common/api/pokemonsApi';

export const getListPokemons = async ({ commit }) => {
  const { data } = await pokemonAPi.get('pokemon?offset=0&limit=150,');
  const pokemons = data.results;
  commit('setListPokemons', pokemons);
};

export const getDetailPokemon = async ({ commit, state }, name) => {
  const { data } = await pokemonAPi.get(`pokemon/${name}`);
  let types = '';
  data.types.forEach((slot) => {
    types = (types === '') ? slot.type.name : `${types}, ${slot.type.name}`;
  });
  const pokemon = {
    imageUrl: data.sprites.other.dream_world.front_default,
    name: data.name,
    weight: data.weight,
    height: data.height,
    types,
  };
  const selectPokemon = state.pokemons.find((poke) => poke.name === pokemon.name);
  pokemon.favorite = selectPokemon.favorite;
  commit('setPokemon', pokemon);
};

export const showLoader = ({ commit }) => {
  commit('setLoader', true);
};

export const hideLoader = ({ commit }) => {
  commit('setLoader', false);
};

export const setFavorite = ({ commit, state }, pokemon) => {
  const tempPokemon = pokemon;
  const tempPokemons = state.pokemons;
  const index = tempPokemons.findIndex((pokep) => pokep.name === tempPokemon.name);
  if (tempPokemon.favorite) {
    tempPokemon.favorite = false;
  } else {
    tempPokemon.favorite = true;
  }
  tempPokemons[index] = tempPokemon;
  commit('setFavorite', tempPokemons);
};
