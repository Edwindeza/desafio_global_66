import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import listPokemonStore from '@/store/listPokemon';
import { listPokemonState } from '../../../mock-data/test-list-pokemon-state';
import Loader from '@/common/components/Loader/Loader.vue';

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
console.log('store', storeTest.state.listPokemons);
describe('Prueba Loader Component', () => {
  test('Debe de hacer match con el snapshot', () => {
    // const wrapper = shallowMount(Loader, {
    //   storeTest,
    //   localVue,
    // });
    // console.log(wrapper);
    // expect(wrapper.html()).toMatchSnapshot();
  });
});
