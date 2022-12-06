<template>
  <a
    href="#"
    :class="[
      'block px-4 py-2 text-sm',
      active
        ? 'text-gray-900 dark:text-gray-100 border-l border-l-gray-900 dark:border-l-gray-100 -ml-px'
        : 'text-gray-500 dark:text-gray-300',
      isCurrent ? 'font-semibold text-gray-900 dark:text-gray-100' : '',
    ]"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
  active: { type: Boolean, default: false },
  isCurrent: { type: Boolean, default: false },
});
</script>
