<template>
  <Head title="Login" />

  <Modal>
    <template #title>Welcome Back!</template>

    <div
      v-if="status"
      class="mt-10 py-4 text-sm font-medium text-green-600 dark:text-green-400"
    >
      {{ status }}
    </div>

    <div class="mt-20">
      <LoginForm class="w-full" />
    </div>
  </Modal>
</template>

<script setup>
import { provide } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import Modal from "@/components/shared/Modal.vue";
import LoginForm from "@/components/auth/LoginForm.vue";

const props = defineProps({
  canResetPassword: Boolean,
  status: String,
});

provide("canResetPassword", props.canResetPassword);
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";

export default {
  layout: AppLayout,
};
</script>
