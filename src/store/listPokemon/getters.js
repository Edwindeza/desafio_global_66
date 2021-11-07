// export const myGetter = (state) => {
//   return state;
// }

// eslint-disable-next-line import/prefer-default-export
export const getPokemonByTerm = () => (pokemons = [], term = '') => {
  if (term.length === 0) return pokemons;
  return pokemons.filter(
    (pokemon) => pokemon.name.toLowerCase().includes(term.toLowerCase()),
  );
};

export const getPokemonByTermWithFavorite = () => (pokemons = [], term = '') => {
  if (term.length === 0) {
    return pokemons.filter((pokemon) => pokemon.favorite);
  }
  return pokemons.filter(
    (pokemon) => pokemon.name.toLowerCase().includes(term.toLowerCase()) && pokemon.favorite,
  );
};
