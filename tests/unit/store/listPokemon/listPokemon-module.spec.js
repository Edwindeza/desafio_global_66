import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import listPokemonStore from '@/store/listPokemon';
import { listPokemonState } from '../../mock-data/test-list-pokemon-state';
import { listPokemons } from '../../mock-data/test-list-pokemons';
import { listPokemonsWithFavorite } from '../../mock-data/test-list-pokemons-favorite';
import { pokemonTest } from '../../mock-data/test-pokemon';

const localVue = createLocalVue();
localVue.use(Vuex);

const createVuexStore = (initialState) => new Vuex.Store({
  modules: {
    listPokemons: {
      ...listPokemonStore,
      state: { ...initialState },
    },
  },
});
describe('Pruebas de State en el módulo List Pokemon con Vuex', () => {
  const storeTest = createVuexStore(listPokemonState);
  const {
    pokemon, pokemons, isLoading, updatePokemons,
  } = storeTest.state.listPokemons;

  test('Verificación de estado inicial', () => {
    expect(pokemon).toMatchObject(listPokemonState.pokemon);
    expect(pokemons).toBe(listPokemonState.pokemons);
    expect(isLoading).toBe(listPokemonState.isLoading);
    expect(updatePokemons).toBe(listPokemonState.updatePokemons);
  });
});

describe('Pruebas de Mutations en el módulo List Pokemon con Vuex', () => {
  const storeTest = createVuexStore(listPokemonState);

  storeTest.commit('listPokemons/setListPokemons', listPokemons);
  test('Prueba setListPokemons - Tamaño de lista ', () => {
    expect(storeTest.state.listPokemons.pokemons.length).toBe(2);
  });

  test('Prueba setListPokemons - Valor de loader', () => {
    storeTest.commit('listPokemons/setListPokemons', listPokemons);
    expect(storeTest.state.listPokemons.isLoading).toBe(false);
  });

  test('Prueba setPokemon - Valor del objeto', () => {
    storeTest.commit('listPokemons/setPokemon', pokemonTest);
    expect(storeTest.state.listPokemons.pokemon).toBe(pokemonTest);
  });

  test('Prueba setLoader - Cambio de valor', () => {
    storeTest.commit('listPokemons/setLoader', true);
    expect(storeTest.state.listPokemons.isLoading).toBe(true);
    storeTest.commit('listPokemons/setLoader', false);
    expect(storeTest.state.listPokemons.isLoading).toBe(false);
  });
});

describe('Pruebas de Getters en el módulo List Pokemon con Vuex', () => {
  const storeTest = createVuexStore(listPokemonState);
  test('Prueba getPokemonByTerm - Listado de prueba', () => {
    storeTest.commit('listPokemons/setListPokemons', listPokemons);
    const pokemonsForTest = storeTest.state.listPokemons.pokemons;
    expect(storeTest.getters['listPokemons/getPokemonByTerm'](pokemonsForTest, '')).toEqual(listPokemons);
    expect(storeTest.getters['listPokemons/getPokemonByTerm'](pokemonsForTest, '').length).toBe(2);
    expect(storeTest.getters['listPokemons/getPokemonByTerm'](pokemonsForTest, 'bulbasaur').length).toBe(1);
    expect(storeTest.getters['listPokemons/getPokemonByTerm'](pokemonsForTest, 'ivysaur').length).toBe(1);
  });

  test('Prueba getPokemonByTermWithFavorite - Listado de prueba', () => {
    storeTest.commit('listPokemons/setListPokemons', listPokemonsWithFavorite);
    const pokemonsForTest = storeTest.state.listPokemons.pokemons;
    expect(storeTest.getters['listPokemons/getPokemonByTermWithFavorite'](pokemonsForTest, '').length).toBe(1);
    expect(storeTest.getters['listPokemons/getPokemonByTermWithFavorite'](pokemonsForTest, 'bulbasaur').length).toBe(1);
    expect(storeTest.getters['listPokemons/getPokemonByTermWithFavorite'](pokemonsForTest, 'ivysaur').length).toBe(0);
  });
});

describe('Pruebas de Actions en el módulo List Pokemon con Vuex', () => {
  const storeTest = createVuexStore(listPokemonState);
  test('Prueba getListPokemons - Petición API y comprobación de tamaño', async () => {
    await storeTest.dispatch('listPokemons/getListPokemons');
    expect(storeTest.state.listPokemons.pokemons.length).toBe(150);
  });
  test('Prueba getDetailPokemon - Petición API y coincidencia con nombre', async () => {
    const pokemonName = 'squirtle';
    await storeTest.dispatch('listPokemons/getListPokemons');
    await storeTest.dispatch('listPokemons/getDetailPokemon', pokemonName);
    expect(storeTest.state.listPokemons.pokemon.name).toBe(pokemonName);
  });
  test('Prueba showLoader y hideLoader - Cambio de estado', async () => {
    await storeTest.dispatch('listPokemons/showLoader');
    expect(storeTest.state.listPokemons.isLoading).toBe(true);
    await storeTest.dispatch('listPokemons/hideLoader');
    expect(storeTest.state.listPokemons.isLoading).toBe(false);
  });
  test('Prueba setFavorite - Marcar un pokemon como favorito', async () => {
    await storeTest.dispatch('listPokemons/getListPokemons');
    await storeTest.dispatch('listPokemons/setFavorite', pokemonTest);
  });
});
