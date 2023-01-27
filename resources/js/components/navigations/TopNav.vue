<template>
  <Disclosure
    as="nav"
    class="bg-white shadow dark:bg-sky-900"
    v-slot="{ open }"
  >
    <div class="mx-auto px-6 sm:px-8 lg:px-10">
      <div class="flex h-16 justify-between">
        <div class="flex flex-shrink-0 items-center">
          <Link href="/">
            <Logo class="hidden h-12 w-auto sm:block" />
            <Logo class="block h-8 w-auto sm:hidden" />
          </Link>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <NavMenuItem :href="route('home')">Dashboard</NavMenuItem>
          <NavMenuItem href="#">Competitions</NavMenuItem>
          <NavMenuItem href="#">Tourneys</NavMenuItem>
          <NavMenuItem href="#">Game Server</NavMenuItem>
        </div>

        <div class="hidden sm:flex">
          <div
            v-if="isAuth"
            class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-3"
          >
            <button
              type="button"
              class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <div>
                <MenuButton
                  class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 ring-gray-200 focus:outline-none dark:bg-sky-700 dark:ring-gray-800"
                >
                  <MenuItem v-slot="{ active }">
                    <DropdownMenuItem href="#" :active="active" is-current>
                      Your Profile
                    </DropdownMenuItem>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <DropdownMenuItem href="#" :active="active">
                      Settings
                    </DropdownMenuItem>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <DropdownMenuItem
                      :href="route('logout')"
                      method="post"
                      as="button"
                      :active="active"
                    >
                      Logout
                    </DropdownMenuItem>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>

          <div v-else class="hidden space-x-3 sm:flex">
            <NavMenuItem :href="route('login')">Login</NavMenuItem>
            <NavMenuItem :href="route('register')">Register</NavMenuItem>
          </div>

          <ToggleMode class="ml-3 self-center" />
        </div>

        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-700 dark:text-sky-500 dark:hover:bg-sky-900 dark:hover:text-sky-400"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pt-2 pb-3">
        <MobileMenuItem :href="route('home')">Dashboard</MobileMenuItem>
        <MobileMenuItem href="#" is-current>Team</MobileMenuItem>
        <MobileMenuItem href="#">Projects</MobileMenuItem>
        <MobileMenuItem href="#">Calendar</MobileMenuItem>
      </div>
      <div class="border-t border-gray-200 pt-4 pb-3">
        <div v-if="isAuth">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div
                class="text-base font-medium text-gray-800 dark:text-sky-500"
              >
                Tom Cook
              </div>
              <div class="text-sm font-medium text-gray-500 dark:text-sky-600">
                tom@example.com
              </div>
            </div>
            <button
              type="button"
              class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1">
            <MobileMenuItem href="#">Your Profile</MobileMenuItem>
            <MobileMenuItem href="#">Settings</MobileMenuItem>
            <MobileMenuItem :href="route('logout')" method="post" as="button">
              Logout
            </MobileMenuItem>
          </div>
        </div>

        <div v-else>
          <MobileMenuItem :href="route('login')">Login</MobileMenuItem>
          <MobileMenuItem :href="route('register')">Register</MobileMenuItem>
        </div>
        <div
          class="mx-2 flex items-center justify-between rounded-md bg-gray-100 px-2 py-3 dark:bg-sky-900"
        >
          <p class="font-medium text-gray-900 dark:text-sky-400">Appearance</p>
          <ToggleMode />
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import Logo from "@/components/Logo.vue";
import NavMenuItem from "@/components/navigations/NavMenuItem.vue";
import MobileMenuItem from "@/components/navigations/MobileMenuItem.vue";
import DropdownMenuItem from "@/components/navigations/DropdownMenuItem.vue";
import ToggleMode from "@/components/shared/ToggleMode.vue";

const user = computed(() => usePage().props.auth.user);
const isAuth = computed(() => Boolean(user.value));
</script>
