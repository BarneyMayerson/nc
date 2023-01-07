import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Register from "@/Pages/Auth/Register.vue";

import RegisterForm from "@/components/auth/RegisterForm.vue";

describe("Register.vue", () => {
  it("contains RegisterForm component", () => {
    const wrapper = mount(Register, { shallow: true });

    expect(wrapper.findComponent(RegisterForm).exists()).toBe(true);
  });
});
