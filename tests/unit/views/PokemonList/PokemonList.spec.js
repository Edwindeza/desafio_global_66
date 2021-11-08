import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import listPokemonStore from '@/store/listPokemon';
import { listPokemonState } from '../../mock-data/test-list-pokemon-state';

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
const storeTest = createVuexStore(listPokemonState);

describe('Prueba PokemonList Component', () => {
  test('Debe de hacer match con el snapshot', async () => {
    await storeTest.dispatch('listPokemons/getListPokemons');
    // const wrapper = shallowMount(PokemonList, {
    //   data() {
    //     return {
    //       showModal: false,
    //       searchValue: '',
    //       flagFilterList: true,
    //       pokemon: '',
    //     };
    //   },
    //   global: {
    //     plugins: [storeTest],
    //   },
    // });
    // console.log(wrapper);
    // expect(wrapper.html()).toMatchSnapshot();
  });
});
