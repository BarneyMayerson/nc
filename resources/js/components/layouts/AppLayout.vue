<template>
  <section class="p-6 border">
    <header class="flex items-center justify-between">
      <h2 class="font-semibold">NFSU Cup</h2>
      <Nav />
    </header>
  </section>
  <section class="p-6">
    <main class="max-w-5xl mx-auto">
      <slot />
    </main>
  </section>
</template>

<script setup>
import Nav from "@/components/navigations/Nav.vue";
</script>
