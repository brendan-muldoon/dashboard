import { mount } from "@vue/test-utils";
import ErrorPage from "@/components/ErrorPage.vue";

describe("ErrorPage", () => {
  it("renders the error message", () => {
    const message = "Oops! Something went wrong.";
    const wrapper = mount(ErrorPage, {
      props: {
        message,
      },
    });

    const errorMessage = wrapper.find("strong");
    expect(errorMessage.text()).toBe(message);
  });
});
