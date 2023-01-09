<template>
  <Link :href="href">
    <DisclosureButton
      as="a"
      :href="href"
      :class="[
        'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium',
        isCurrent
          ? 'border-sky-600 text-sky-600'
          : 'text-gray-500 hover:border-gray-300 hover:text-gray-900 dark:text-gray-300 dark:hover:border-gray-300 dark:hover:text-gray-100',
      ]"
    >
      <slot />
    </DisclosureButton>
  </Link>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { DisclosureButton } from "@headlessui/vue";

defineProps({
  href: { type: String, required: true },
  isCurrent: { type: Boolean, default: false },
});
</script>
