import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import RegisterForm from "@/components/auth/RegisterForm.vue";

describe("RegisterForm.vue", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(RegisterForm);
  });

  it("has name input", () => {
    expect(wrapper.find("#name").exists()).toBe(true);
  });

  it("has email input", () => {
    expect(wrapper.find("#email").exists()).toBe(true);
  });

  it("has password input", () => {
    expect(wrapper.find("#password").exists()).toBe(true);
  });

  it("has password confirmation input", () => {
    expect(wrapper.find("#password_confirmation").exists()).toBe(true);
  });
});
