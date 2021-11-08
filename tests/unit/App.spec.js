import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('Prueba App Component', () => {
  test('Debe de hacer match con el snapshot', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
