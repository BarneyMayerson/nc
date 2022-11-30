<template>
  <nav>
    <ul class="flex items-center max-w-lg mx-auto space-x-4">
      <li><Link href="/" class="hover:underline">Home</Link></li>
      <li><Link href="/register" class="hover:underline">Register</Link></li>
      <li><ToggleMode /></li>
    </ul>
  </nav>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import ToggleMode from "../shared/ToggleMode.vue";
</script>
