import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import LoginForm from "@/components/auth/LoginForm.vue";

describe("LoginForm.vue", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(LoginForm);
  });
  it("has email input", () => {
    expect(wrapper.find("#email").exists()).toBe(true);
  });

  it("has password input", () => {
    expect(wrapper.find("#password").exists()).toBe(true);
  });
});
