import { shallowMount } from '@vue/test-utils';
import Documentation from '@/components/AppDocumentation.vue';

describe('Documentation.vue', () => {
  it('renders documentation content', () => {
    const wrapper = shallowMount(Documentation);
    expect(wrapper.find('h2').text()).toBe('Documentation');
    expect(wrapper.find('h4').text()).toBe('How to setup:');
    expect(wrapper.find('p').text()).toContain('Once upon a time, in a land far away');
  });
});
