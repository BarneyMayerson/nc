import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ProfileForm from "@/components/User/Settings/ProfileForm.vue";

describe("ProfileForm.vue", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(ProfileForm, {
      props: {
        user: {
          name: "Joe",
          email: "joe@mail.com",
        },
      },
    });
  });

  it("contains name input", () => {
    expect(wrapper.find("#name").exists()).toBe(true);
  });

  it("contains email input", () => {
    expect(wrapper.find("#email").exists()).toBe(true);
  });

  it("contains submit button", () => {
    expect(wrapper.find("[type='submit']").exists()).toBe(true);
  });
});
