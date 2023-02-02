import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Profile from "@/Pages/User/Settings/Profile.vue";

import ProfileForm from "@/components/User/Settings/ProfileForm.vue";

describe("Profile.vue", () => {
  it("contains ProfileForm component", () => {
    const wrapper = mount(Profile, { shallow: true });

    expect(wrapper.findComponent(ProfileForm).exists()).toBe(true);
  });
});
