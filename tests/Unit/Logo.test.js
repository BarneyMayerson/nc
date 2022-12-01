import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Logo from "@/components/Logo.vue";

describe("Logo.vue", () => {
  it("displays logo", () => {
    const wrapper = mount(Logo);

    expect(wrapper.find("#logo").exists()).toBe(true);
  });
});
