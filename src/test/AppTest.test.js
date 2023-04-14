import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("toggles theme when checkbox is clicked", async () => {
    const wrapper = mount(App);
    const checkbox = wrapper.find("input[type='checkbox']");
    console.log(wrapper.vm.$data.isDarkMode); // print the HTML of the component
    
    // Verify initial theme is light
    let theme = wrapper.vm.$data.isDarkMode;
    expect(theme).toBe(false);

    // Simulate checkbox click
    await checkbox.trigger("click");

    // Verify theme is now dark
    theme = wrapper.vm.$data.isDarkMode;
    expect(theme).toBe(true);

    // Simulate checkbox click again
    await checkbox.trigger("click");

    // Verify theme is now light again
    theme = wrapper.vm.$data.isDarkMode;
    expect(theme).toBe(false);
  });
});
