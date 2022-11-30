import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import RegisterForm from "@/components/auth/RegisterForm.vue";

describe("Register.vue", () => {
  it("has name input", () => {
    const wrapper = mount(RegisterForm);

    expect(wrapper.find("#name").exists()).toBe(true);
  });

  it("has email input", () => {
    const wrapper = mount(RegisterForm);

    expect(wrapper.find("#email").exists()).toBe(true);
  });

  it("has password input", () => {
    const wrapper = mount(RegisterForm);

    expect(wrapper.find("#password").exists()).toBe(true);
  });

  it("has password confirmation input", () => {
    const wrapper = mount(RegisterForm);

    expect(wrapper.find("#password_confirmation").exists()).toBe(true);
  });
});
