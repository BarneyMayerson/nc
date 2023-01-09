import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LoginForm from "@/components/auth/LoginForm.vue";

describe("LoginForm.vue", () => {
  it("has email input", () => {
    const wrapper = mount(LoginForm);

    expect(wrapper.find("#email").exists()).toBe(true);
  });

  it("has password input", () => {
    const wrapper = mount(LoginForm);

    expect(wrapper.find("#password").exists()).toBe(true);
  });
});
