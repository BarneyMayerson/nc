import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ForgotPassword from "@/Pages/Auth/ForgotPassword.vue";

import Modal from "@/components/shared/Modal.vue";

describe("ForgotPassword.vue", () => {
  it("contains Modal component", () => {
    const wrapper = mount(ForgotPassword, { shallow: true });

    expect(wrapper.findComponent(Modal).exists()).toBe(true);
  });
});
