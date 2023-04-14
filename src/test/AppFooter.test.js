import { mount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

describe('AppFooter', () => {
  it('renders the correct copyright text', () => {
    const wrapper = mount(AppFooter)
    const copyrightText = wrapper.find('.text-muted').text()

    expect(wrapper.find('.footer').exists()).toBe(true)
    expect(wrapper.find('.container').exists()).toBe(true)
    expect(wrapper.find('.justify-content-end').exists()).toBe(true)
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)

    expect(copyrightText).toContain('British Telecommunications')
  })
})
