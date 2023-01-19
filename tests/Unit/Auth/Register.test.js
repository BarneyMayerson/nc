import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Register from "@/Pages/Auth/Register.vue";

import Modal from "@/components/shared/Modal.vue";

describe("Register.vue", () => {
  it("contains Modal component", () => {
    const wrapper = mount(Register, { shallow: true });

    expect(wrapper.findComponent(Modal).exists()).toBe(true);
  });
});
