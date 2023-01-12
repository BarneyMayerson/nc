import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import PasswordInput from "@/components/shared/PasswordInput.vue";

describe("PasswordInput.vue", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(PasswordInput, {
      props: {
        id: "password",
        label: "Password",
      },
    });
  });

  it("has default type as password", () => {
    const input = wrapper.find("#password");

    expect(input.exists()).toBe(true);
    expect(input.attributes().type).toBe("password");
  });

  it("toggles the type by clicking the button", async () => {
    const input = wrapper.find("#password");
    const toggleButton = wrapper.find("button");
    await toggleButton.trigger("click");

    expect(input.attributes("type")).toBe("text");

    await toggleButton.trigger("click");

    expect(input.attributes("type")).toBe("password");
  });
});
