<template>
  <nav>
    <ul class="mx-auto flex max-w-lg items-center space-x-4">
      <li><Link href="/" class="hover:underline">Home</Link></li>
      <li><Link href="/register" class="hover:underline">Register</Link></li>
      <li><ToggleMode /></li>
    </ul>
  </nav>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import ToggleMode from "@/components/shared/ToggleMode.vue";
</script>
