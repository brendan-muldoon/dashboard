import { shallowMount } from '@vue/test-utils'
import SearchResult from '@/components/SearchResult.vue'

describe('SearchResult.vue', () => {
  it('renders a message with the search ID', () => {
    const id = 'test-id'
    const mockResults = {
      logs: [
        {
          dateTime: '2022-01-01 10:00:00',
          description: 'Test log message 1'
        },
        {
          dateTime: '2022-01-02 11:00:00',
          description: 'Test log message 2'
        }
      ]
    }
    const mockStore = {
      getters: {
        getResults: mockResults
      },
    }

    const wrapper = shallowMount(SearchResult, {
      propsData: { id },
      mocks: {
        $store: mockStore,
      },
    })

    expect(wrapper.text()).toMatch(`Search results for application: '${id}'`)
  })
})
