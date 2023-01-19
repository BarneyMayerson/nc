<template>
  <div>
    <TopNav />
    <Container>
      <slot />
    </Container>

    <Modal />
  </div>
</template>

<script setup>
import { Modal } from "momentum-modal";
import TopNav from "@/components/navigations/TopNav.vue";
import Container from "@/components/shared/Container.vue";
</script>
