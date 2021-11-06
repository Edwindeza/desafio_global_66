import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';

const listPokemonStore = {
  namespaced: true,
  state,
  mutations,
  actions,
};
export default listPokemonStore;
