import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import Avatar from "@/components/User/Avatar.vue";

describe("Avatar.vue", () => {
  it("defines whether has an avatar", () => {
    let wrapper = mount(Avatar);

    expect(wrapper.vm.hasImage).toBe(false);

    wrapper = mount(Avatar, {
      props: {
        imageUrl: "fake-url",
      },
    });

    expect(wrapper.vm.hasImage).toBe(true);
  });
});
