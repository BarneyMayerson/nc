import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ForgotPassword from "@/Pages/Auth/ForgotPassword.vue";

import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm.vue";

describe("ForgotPassword.vue", () => {
  it("contains ForgotPasswordForm component", () => {
    const wrapper = mount(ForgotPassword, { shallow: true });

    expect(wrapper.findComponent(ForgotPasswordForm).exists()).toBe(true);
  });
});
