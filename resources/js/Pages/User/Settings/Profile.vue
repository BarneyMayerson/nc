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

    <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
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

            <form
              class="divide-y divide-gray-400 dark:divide-sky-400 lg:col-span-9"
              action="#"
              method="POST"
            >
              <!-- Profile section -->
              <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div>
                  <h2 class="text-lg font-medium leading-6">Profile</h2>
                  <p class="mt-1 text-sm text-gray-500 dark:text-sky-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>

                <div class="mt-6 flex flex-col lg:flex-row">
                  <div class="flex-grow space-y-6">
                    <div>
                      <label for="username" class="block text-sm font-medium"
                        >Username</label
                      >
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span
                          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
                          >workcation.com/</span
                        >
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autocomplete="username"
                          class="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                          :value="userTest.handle"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="about" class="block text-sm font-medium"
                        >About</label
                      >
                      <div class="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows="3"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                        />
                      </div>
                      <p class="mt-2 text-sm text-gray-500 dark:text-sky-500">
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </p>
                    </div>
                  </div>

                  <div
                    class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0"
                  >
                    <p class="text-sm font-medium" aria-hidden="true">Photo</p>
                    <div class="mt-1 lg:hidden">
                      <div class="flex items-center">
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
                        <div class="ml-5 rounded-md shadow-sm">
                          <div
                            class="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50"
                          >
                            <label
                              for="mobile-user-photo"
                              class="pointer-events-none relative text-sm font-medium leading-4"
                            >
                              <span>Change</span>
                              <span class="sr-only"> user photo</span>
                            </label>
                            <input
                              id="mobile-user-photo"
                              name="user-photo"
                              type="file"
                              class="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="relative hidden overflow-hidden rounded-full lg:block"
                    >
                      <img
                        class="relative h-52 w-52 rounded-full"
                        :src="userTest.imageUrl"
                        alt=""
                      />
                      <label
                        for="desktop-user-photo"
                        class="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                      >
                        <span>Change</span>
                        <span class="sr-only"> user photo</span>
                        <input
                          type="file"
                          id="desktop-user-photo"
                          name="user-photo"
                          class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-12 gap-6">
                  <div class="col-span-12 sm:col-span-6">
                    <label for="first-name" class="block text-sm font-medium"
                      >First name</label
                    >
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label for="last-name" class="block text-sm font-medium"
                      >Last name</label
                    >
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-12">
                    <label for="url" class="block text-sm font-medium"
                      >URL</label
                    >
                    <input
                      type="text"
                      name="url"
                      id="url"
                      class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label for="company" class="block text-sm font-medium"
                      >Company</label
                    >
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autocomplete="organization"
                      class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <!-- Privacy section -->
              <div class="divide-y divide-gray-400 pt-6 dark:divide-sky-500">
                <div class="px-4 sm:px-6">
                  <div>
                    <h2 class="text-lg font-medium leading-6">Privacy</h2>
                    <p class="mt-1 text-sm text-gray-500 dark:text-sky-500">
                      Ornare eu a volutpat eget vulputate. Fringilla commodo
                      amet.
                    </p>
                  </div>
                  <ul
                    role="list"
                    class="mt-2 divide-y divide-gray-400 dark:divide-sky-500"
                  >
                    <SwitchGroup
                      as="li"
                      class="flex items-center justify-between py-4"
                    >
                      <div class="flex flex-col">
                        <SwitchLabel as="p" class="text-sm font-medium" passive
                          >Available to hire</SwitchLabel
                        >
                        <SwitchDescription
                          class="text-sm text-gray-500 dark:text-sky-500"
                          >Nulla amet tempus sit accumsan. Aliquet turpis sed
                          sit lacinia.</SwitchDescription
                        >
                      </div>
                      <Switch
                        v-model="availableToHire"
                        :class="[
                          availableToHire ? 'bg-emerald-500' : 'bg-rose-500',
                          'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            availableToHire ? 'translate-x-5' : 'translate-x-0',
                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                          ]"
                        />
                      </Switch>
                    </SwitchGroup>
                    <SwitchGroup
                      as="li"
                      class="flex items-center justify-between py-4"
                    >
                      <div class="flex flex-col">
                        <SwitchLabel as="p" class="text-sm font-medium" passive
                          >Make account private</SwitchLabel
                        >
                        <SwitchDescription
                          class="text-sm text-gray-500 dark:text-sky-500"
                          >Pharetra morbi dui mi mattis tellus sollicitudin
                          cursus pharetra.</SwitchDescription
                        >
                      </div>
                      <Switch
                        v-model="privateAccount"
                        :class="[
                          privateAccount ? 'bg-emerald-500' : 'bg-rose-500',
                          'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            privateAccount ? 'translate-x-5' : 'translate-x-0',
                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                          ]"
                        />
                      </Switch>
                    </SwitchGroup>
                    <SwitchGroup
                      as="li"
                      class="flex items-center justify-between py-4"
                    >
                      <div class="flex flex-col">
                        <SwitchLabel as="p" class="text-sm font-medium" passive
                          >Allow commenting</SwitchLabel
                        >
                        <SwitchDescription
                          class="text-sm text-gray-500 dark:text-sky-500"
                          >Integer amet, nunc hendrerit adipiscing nam.
                          Elementum ame</SwitchDescription
                        >
                      </div>
                      <Switch
                        v-model="allowCommenting"
                        :class="[
                          allowCommenting ? 'bg-emerald-500' : 'bg-rose-500',
                          'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            allowCommenting ? 'translate-x-5' : 'translate-x-0',
                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                          ]"
                        />
                      </Switch>
                    </SwitchGroup>
                    <SwitchGroup
                      as="li"
                      class="flex items-center justify-between py-4"
                    >
                      <div class="flex flex-col">
                        <SwitchLabel as="p" class="text-sm font-medium" passive
                          >Allow mentions</SwitchLabel
                        >
                        <SwitchDescription
                          class="text-sm text-gray-500 dark:text-sky-500"
                          >Adipiscing est venenatis enim molestie commodo eu
                          gravid</SwitchDescription
                        >
                      </div>
                      <Switch
                        v-model="allowMentions"
                        :class="[
                          allowMentions ? 'bg-emerald-500' : 'bg-rose-500',
                          'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            allowMentions ? 'translate-x-5' : 'translate-x-0',
                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                          ]"
                        />
                      </Switch>
                    </SwitchGroup>
                  </ul>
                </div>
                <div class="mt-4 flex justify-end py-4 px-4 sm:px-6">
                  <button
                    type="submit"
                    class="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
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
import { ref } from "vue";
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";

import { Link } from "@inertiajs/vue3";
import ProfileForm from "@/components/User/Settings/ProfileForm.vue";
import Avatar from "@/components/User/Avatar.vue";

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

const availableToHire = ref(true);
const privateAccount = ref(false);
const allowCommenting = ref(true);
const allowMentions = ref(true);
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";

export default {
  layout: AppLayout,
};
</script>
