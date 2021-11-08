import router from '@/router';

describe('El Router debe tener esta estructura', () => {
  test('Debe de hacer match con el snapshot', () => {
    expect(router.options.routes).toMatchObject(
      [
        {
          path: '/',
          name: 'Home',
          component: expect.any(Object),
        },
        {
          path: '/pokedex',
          name: 'pokedex',
          component: expect.any(Function),
        },
        {
          path: '*',
          name: '404',
          redirect: '/',
        },
      ],
    );
  });
});

describe('El router debe cargar componentes válidos en lazyLoad', () => {
  test('Prueba de carga PokemonList', async () => {
    expect((await router.options.routes[1].component()).default.name).toBe('Pokedex');
  });
});
