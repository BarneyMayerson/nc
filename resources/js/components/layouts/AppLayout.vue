<template>
  <div>
    <section
      class="p-6 bg-slate-100 dark:bg-slate-800 dark:text-white transition-colors duration-1000"
    >
      <header class="flex items-center justify-between">
        <h2 class="text-2xl font-medium">NFSU Cup</h2>
        <div class="flex items-center">
          <Nav />
        </div>
      </header>
    </section>

    <section class="p-6">
      <main class="max-w-5xl mx-auto">
        <slot />
      </main>
    </section>
  </div>
</template>

<script setup>
import Nav from "@/components/navigations/Nav.vue";
</script>
