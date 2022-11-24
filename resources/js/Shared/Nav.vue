<template>
  <nav>
    <ul class="flex items-center max-w-lg mx-auto space-x-4">
      <li><Link href="/" class="hover:underline">Home</Link></li>
      <li><Link href="/settings" class="hover:underline">Settings</Link></li>
    </ul>
  </nav>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
</script>
