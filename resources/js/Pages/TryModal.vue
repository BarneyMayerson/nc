<template>
  <Head title="Try Modal Head" />
  <Modal>
    <template #title>Welcome Back!</template>
    <div class="mx-auto mt-10 flex items-center justify-center rounded">
      <LoginForm class="w-full" />
    </div>
  </Modal>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Modal from "@/components/shared/Modal.vue";
import LoginForm from "@/components/auth/LoginForm.vue";

const props = defineProps({
  email: String,
  name: String,
});
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";

export default {
  layout: AppLayout,
};
</script>
