import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PasswordInput from "@/components/shared/PasswordInput.vue";

describe("PasswordInput.vue", () => {
  it("has default type as password", () => {
    const wrapper = mount(PasswordInput);

    const input = wrapper.find("#input-password");

    expect(input.exists()).toBe(true);
    expect(input.attributes().type).toBe("password");
  });

  it("toggles the type by clicking the button", async () => {
    const wrapper = mount(PasswordInput);

    const input = wrapper.find("#input-password");
    const toggleButton = wrapper.find("#toggle-visibility");
    await toggleButton.trigger("click");

    expect(input.attributes("type")).toBe("text");

    await toggleButton.trigger("click");

    expect(input.attributes("type")).toBe("password");
  });
});
