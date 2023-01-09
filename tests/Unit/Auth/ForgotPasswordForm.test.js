import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm.vue";

describe("ForgotPasswordForm.vue", () => {
  it("has email input", () => {
    const wrapper = mount(ForgotPasswordForm);

    expect(wrapper.find("#email").exists()).toBe(true);
  });
});
