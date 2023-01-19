import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Login from "@/Pages/Auth/Login.vue";

import Modal from "@/components/shared/Modal.vue";

describe("Login.vue", () => {
  it("contains Modal component", () => {
    const wrapper = mount(Login, { shallow: true });

    expect(wrapper.findComponent(Modal).exists()).toBe(true);
  });
});
