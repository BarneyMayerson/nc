<template>
  <button
    :type="type"
    class="rounded-lg border border-indigo-700 px-5 py-2.5 text-center text-base font-medium uppercase italic tracking-widest text-indigo-700 hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:border-sky-500 dark:text-sky-500 dark:hover:bg-sky-600 dark:hover:text-white dark:focus:ring-sky-800"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "submit",
  },
});
</script>
