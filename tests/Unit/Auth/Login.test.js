import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Login from "@/Pages/Auth/Login.vue";

import LoginForm from "@/components/auth/LoginForm.vue";

describe("Login.vue", () => {
  it("contains LoginForm component", () => {
    const wrapper = mount(Login, { shallow: true });

    expect(wrapper.findComponent(LoginForm).exists()).toBe(true);
  });
});
