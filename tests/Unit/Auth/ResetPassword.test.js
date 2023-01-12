import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ResetPassword from "@/Pages/Auth/ResetPassword.vue";

import ResetPasswordForm from "@/components/auth/ResetPasswordForm.vue";

describe("ResetPassword.vue", () => {
  it("contains ResetPasswordForm component", () => {
    const wrapper = mount(ResetPassword, { shallow: true });

    expect(wrapper.findComponent(ResetPasswordForm).exists()).toBe(true);
  });
});
