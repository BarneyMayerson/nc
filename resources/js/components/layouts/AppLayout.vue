<template>
  <div>
    <TopNav />
    <section
      class="mt-48 p-6 bg-slate-100 dark:bg-slate-800 dark:text-white transition-colors duration-1000"
    >
      <header class="flex items-center justify-between">
        <Logo class="w-28 h-16" />
        <div class="flex items-center">
          <Nav />
        </div>
      </header>
    </section>

    <Container>
      <slot />
    </Container>
  </div>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import TopNav from "@/components/navigations/TopNav.vue";
import Nav from "@/components/navigations/Nav.vue";
import Container from "@/components/shared/Container.vue";
</script>
