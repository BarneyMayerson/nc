import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PasswordInput from "@/components/shared/PasswordInput.vue";

describe("PasswordInput.vue", () => {
  it("has default type as password", () => {
    const id = "password";
    const wrapper = mount(PasswordInput, {
      props: { id },
    });

    const input = wrapper.find("#password");

    expect(input.exists()).toBe(true);
    expect(input.attributes().type).toBe("password");
  });

  it("toggles the type by clicking the button", async () => {
    const id = "password";
    const wrapper = mount(PasswordInput, {
      props: { id },
    });

    const input = wrapper.find("#password");
    const toggleButton = wrapper.find("button");
    await toggleButton.trigger("click");

    expect(input.attributes("type")).toBe("text");

    await toggleButton.trigger("click");

    expect(input.attributes("type")).toBe("password");
  });
});
