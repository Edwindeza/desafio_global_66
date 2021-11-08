import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Home from '@/views/Home/Home.vue';

const wrapper = shallowMount(Home, {
  stubs: {
    RouterLinkStub,
  },
});

describe('Prueba Home Component', () => {
  test('Debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe('Prueba elementos', () => {
  test('h1 debe coincidir con texto de prueba ', () => {
    const h1Value = 'Welcome to Pokédex';
    expect(wrapper.find('h1').text()).toBe(h1Value);
  });
  test('p debe coincidir con texto de prueba ', () => {
    const pValue = 'The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.';
    expect(wrapper.find('p').text()).toBe(pValue);
  });
  test('router-link debe coincidir con texto de prueba ', () => {
    const rlValue = 'Get started';
    expect(wrapper.find('router-link').text()).toBe(rlValue);
  });
});
