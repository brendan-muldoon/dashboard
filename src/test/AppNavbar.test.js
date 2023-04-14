import { mount } from '@vue/test-utils';
import AppNavbar from '@/components/AppNavbar.vue';
import Vuex from 'vuex';
import { createApp } from 'vue';

const localVue = createApp(AppNavbar);
localVue.use(Vuex);

describe('AppNavbar', () => {
  let actions;
  let store;
  let mockRouter;
  let wrapper;

  beforeEach(() => {
    actions = {
      setResults: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });

    mockRouter = {
      push: jest.fn(),
    };

    wrapper = mount(AppNavbar, {
      localVue,
      store,
      mocks: {
        $router: mockRouter,
      },
    });
  });

  it('searches for an app when the search form is submitted', async () => {
    // fill in the search input and submit the form
    const searchInput = wrapper.find('input[type="search"]');
    searchInput.setValue('example app');
    wrapper.find('form').trigger('submit');

    // wait for the search function to complete
    await wrapper.vm.$nextTick();
    // check that the router was called with the correct arguments
    expect(mockRouter.push).toHaveBeenCalledWith({
      name: 'search-result',
      query: {
        q: 'example app',
      },
    });

    // check that the setResults action was called with the correct argument
    expect(actions.setResults).toHaveBeenCalledWith(null, 'mock search results');
  });
});
