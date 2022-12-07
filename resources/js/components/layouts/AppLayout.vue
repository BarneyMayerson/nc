<template>
  <div>
    <TopNav />
    <Container>
      <slot />
    </Container>
  </div>
</template>

<script setup>
import TopNav from "@/components/navigations/TopNav.vue";
import Container from "@/components/shared/Container.vue";
</script>
