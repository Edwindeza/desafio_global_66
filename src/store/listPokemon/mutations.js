export const setListPokemons = (state, pokemons) => {
  state.pokemons = [...pokemons];
  state.isLoading = false;
};

export const setPokemon = (state, pokemon) => {
  state.pokemon = pokemon;
  state.isLoading = false;
};

export const setLoader = (state, value) => {
  state.isLoading = value;
};

export const setFavorite = (state, pokemons) => {
  state.pokemons = [...pokemons];
  state.updatePokemons = !state.updatePokemons;
};
