<template>
  <a
    :href="href"
    class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
    :class="
      isCurrent
        ? 'border-nfsu-text text-nfsu-text'
        : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:border-gray-100'
    "
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
  isCurrent: { type: Boolean, default: false },
});
</script>
