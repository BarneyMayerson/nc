import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Logo from "@/components/Logo.vue";

describe("Logo.vue", () => {
  it("displays project name", () => {
    const wrapper = mount(Logo);

    expect(wrapper.find("#logo-name").text()).toBe("NFSU Cup");
    expect(wrapper.classes("text-blue-600")).toBe(true);
  });
});
