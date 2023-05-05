import { mount } from "@vue/test-utils";
import AppAbout from 'components/AppAbout.vue';

describe("TestVue.vue", () => {
  it("renders the component", () => {
    const wrapper = mount(AppAbout);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct h2 title", () => {
    const wrapper = mount(AppAbout);
    const title = wrapper.find("h2");
    expect(title.text()).toBe("About");
  });

  it("renders the correct paragraph text", () => {
    const wrapper = mount(AppAbout);
    const paragraph = wrapper.find("p");
    expect(paragraph.text()).toContain("Once upon a time");
  });
});

module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json'],

  moduleNameMapper: {
    '^/@/(.*)$': '<rootDir>/src/',
  },

  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.jsx?$": "babel-jest",
  },


};
