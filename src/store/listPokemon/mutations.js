export const getListPokemons = (state) => {
  console.log('lala');
  state.pokemons = [1, 2];
};
export const getDetailPokemon = (state, pokemonId) => {
  console.log(pokemonId);
  const pokemon = {};
  state.pokemon = pokemon;
};
