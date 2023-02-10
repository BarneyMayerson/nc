<template>
  <main class="py-8">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <Avatar :image-url="user.avatar" size="16" />
        <div>
          <h2 class="text-2xl font-semibold">
            <Link href="#">{{ user.name }}</Link>
          </h2>
          <p>Your personal account</p>
        </div>
      </div>
      <Link
        href="#"
        class="rounded-lg border border-indigo-700 px-5 py-2.5 text-center text-base font-medium uppercase italic tracking-widest text-indigo-700 hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:border-sky-500 dark:text-sky-500 dark:hover:bg-sky-600 dark:hover:text-white dark:focus:ring-sky-800"
      >
        Go to your personal profile
      </Link>
    </div>

    <div>
      <div class="pb-6 lg:pb-16">
        <div class="mt-4 overflow-hidden">
          <div
            class="divide-y divide-gray-400 dark:divide-sky-400 lg:grid lg:grid-cols-12 lg:divide-y-0"
          >
            <aside class="py-6 lg:col-span-3">
              <nav class="space-y-1">
                <a
                  v-for="item in subNavigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'border-gray-500 bg-gray-100 text-gray-600 hover:text-gray-700 dark:border-sky-500 dark:bg-sky-100 dark:text-sky-600 dark:hover:bg-sky-200'
                      : 'border-transparent hover:bg-gray-50 dark:hover:bg-sky-50 dark:hover:text-sky-600',
                    'group flex items-center border-l-4 px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  <component
                    :is="item.icon"
                    class="-ml-1 mr-3 h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span class="truncate">{{ item.name }}</span>
                </a>
              </nav>
            </aside>

            <form class="lg:col-span-9" action="#" method="POST">
              <!-- Profile section -->
              <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div class="mb-6 sm:mb-10">
                  <h2 class="text-lg font-medium leading-6">Profile</h2>
                  <p class="mt-1 text-sm text-gray-500 dark:text-sky-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>

                <div class="my-2 flex flex-col md:my-4 lg:flex-row">
                  <div class="flex-grow space-y-8 md:space-y-10">
                    <FloatLabelInput
                      id="username"
                      label="Username"
                      :hint="`Your profile page will be: ${baseUrl}/${userTest.handle}`"
                    />

                    <FloatLabelTextarea
                      id="bio"
                      label="Bio"
                      rows="5"
                      hint="Tell us a little bit about youself"
                    />
                  </div>

                  <div
                    class="mt-6 flex-grow lg:relative lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0"
                  >
                    <p
                      class="text-sm text-sky-300 lg:absolute lg:left-3 lg:-top-6"
                      aria-hidden="true"
                    >
                      Profile picture
                    </p>
                    <div class="mt-1 flex items-center lg:hidden">
                      <div
                        class="inline-block h-20 w-20 flex-shrink-0 overflow-hidden rounded-full"
                        aria-hidden="true"
                      >
                        <img
                          class="h-full w-full rounded-full"
                          :src="userTest.imageUrl"
                          alt=""
                        />
                      </div>
                      <div class="ml-3 flex flex-col space-y-3">
                        <button
                          class="rounded-md border border-sky-400 px-4 py-2 text-sm text-sky-400"
                        >
                          Upload a photo
                        </button>
                        <button
                          class="rounded-md border border-sky-400 px-4 py-2 text-sm text-sky-400"
                        >
                          Remove photo
                        </button>
                      </div>
                    </div>

                    <div class="hidden overflow-hidden rounded-full lg:block">
                      <img
                        class="h-52 w-52 rounded-full"
                        :src="userTest.imageUrl"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 flex justify-center">
                      <button
                        class="rounded-md border border-sky-400 px-4 py-2 text-sm text-sky-400"
                      >
                        Upload a photo
                      </button>
                    </div>
                    <div class="mt-2 flex justify-center">
                      <button
                        class="rounded-md border border-sky-400 px-4 py-2 text-sm text-sky-400"
                      >
                        Remove photo
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-12 gap-6 md:mt-10">
                  <div class="col-span-12 mt-4 sm:col-span-6 sm:mt-0">
                    <FloatLabelInput id="first-name" label="First name" />
                  </div>

                  <div class="col-span-12 mt-4 sm:col-span-6 sm:mt-0">
                    <FloatLabelInput id="last-name" label="Last name" />
                  </div>

                  <div class="col-span-12 mt-4">
                    <FloatLabelInput id="url" label="URL" />
                  </div>
                </div>
              </div>

              <div class="mt-4 flex py-4">
                <button
                  type="submit"
                  class="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <ProfileForm :user="user" />
    </div>
  </main>
</template>

<script setup>
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";

import { Link } from "@inertiajs/vue3";
import { Ziggy } from "@/ziggy";
import ProfileForm from "@/components/User/Settings/ProfileForm.vue";
import Avatar from "@/components/User/Avatar.vue";
import FloatLabelTextarea from "@/components/shared/FloatLabelTextarea.vue";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";

defineProps({
  user: Object,
});

const userTest = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

const subNavigation = [
  { name: "Profile", href: "#", icon: UserCircleIcon, current: true },
  { name: "Account", href: "#", icon: CogIcon, current: false },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Integrations", href: "#", icon: SquaresPlusIcon, current: false },
];

const baseUrl = Ziggy.url;
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";

export default {
  layout: AppLayout,
};
</script>
