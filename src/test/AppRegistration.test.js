import { mount } from "@vue/test-utils";
import ApplicationRegistration from "@/components/AppRegistration.vue";
import axios from "axios";

describe("ApplicationRegistration", () => {
  let wrapper;

  beforeEach(() => {
    // Mount the component
    wrapper = mount(ApplicationRegistration);
  });

  afterEach(() => {
    // Unmount the component
    wrapper.unmount();
  });

  it("renders a form with an input and a submit button", () => {
    // Find the form element
    const form = wrapper.find("form");

    // Expect that the form has an input element and a submit button
    expect(form.find('input[type="text"]').exists()).toBe(true);
    expect(form.find('button[type="submit"]').exists()).toBe(true);
  });

  it("submits the application registration form when the submit button is clicked", async () => {
    // Mock the axios.post function
    axios.post = jest.fn(() => Promise.resolve({}));

    // Fill in the application name and submit the form
    const appNameInput = wrapper.find("#appName");
    appNameInput.setValue("Example Application");
    await wrapper.find("form").trigger("submit");

    // Expect that axios.post was called with the correct arguments
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8089/api/applications",
      { name: "Example Application" }
    );

    // Expect that the application name was reset to an empty string
    expect(appNameInput.element.value).toBe("");
  });

  it("shows an error message if the application name is empty", async () => {
    // Mock the window.alert function
    window.alert = jest.fn();

    // Submit the form with an empty application name
    await wrapper.find("form").trigger("submit");

    // Expect that the alert function was called with the correct argument
    expect(window.alert).toHaveBeenCalledWith(
      "Application Name cannot be empty"
    );
  });
});
