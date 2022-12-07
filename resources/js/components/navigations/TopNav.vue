<template>
  <Disclosure
    as="nav"
    class="bg-white dark:bg-nfsu-bg shadow"
    v-slot="{ open }"
  >
    <div class="mx-auto px-6 sm:px-8 lg:px-10">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <Logo class="h-12 w-auto hidden sm:block" />
            <Logo class="h-8 w-auto block sm:hidden" />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavMenuItem href="#" is-current>Dashboard</NavMenuItem>
            <NavMenuItem href="#">Competitions</NavMenuItem>
            <NavMenuItem href="#">Tourneys</NavMenuItem>
            <NavMenuItem href="#">Game Server</NavMenuItem>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-3">
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
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-nfsu-bg py-1 ring-1 ring-gray-200 dark:ring-gray-800 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <DropdownMenuItem href="#" is-current>
                    Your Profile
                  </DropdownMenuItem>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <DropdownMenuItem href="#" :active="active">
                    Settings
                  </DropdownMenuItem>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <DropdownMenuItem href="#" :active="active">
                    Logout
                  </DropdownMenuItem>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <ToggleMode />
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
        <MobileMenuItem>Dashboard</MobileMenuItem>
        <MobileMenuItem is-current>Team</MobileMenuItem>
        <MobileMenuItem>Projects</MobileMenuItem>
        <MobileMenuItem>Calendar</MobileMenuItem>
      </div>
      <div class="border-t border-gray-200 pt-4 pb-3">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800 dark:text-sky-500">
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
          <MobileMenuItem>Your Profile</MobileMenuItem>
          <MobileMenuItem>Settings</MobileMenuItem>
          <MobileMenuItem>Sign out</MobileMenuItem>
          <div
            class="flex items-center justify-between bg-gray-100 dark:bg-sky-800 rounded-md mx-2 px-2 py-3"
          >
            <p class="text-gray-900 dark:text-sky-500">Apperance</p>
            <ToggleMode />
          </div>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
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
</script>
