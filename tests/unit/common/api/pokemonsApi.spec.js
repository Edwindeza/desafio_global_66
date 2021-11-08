import pokemonApi from '@/common/api/pokemonsApi';

describe('pokemonApi.vue', () => {
  test('Comprobación URL de API', () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/');
  });
});
