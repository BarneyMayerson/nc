import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ProfileForm from "@/components/User/Settings/ProfileForm.vue";

describe("ProfileForm.vue", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(ProfileForm);
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
