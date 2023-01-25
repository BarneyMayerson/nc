<template>
  <Head title="Forgot Password" />
  <Modal>
    <template #title>Forgot Password?</template>
    <p class="py-10 text-center">
      No problem. Just let us know your email address and we will email you a
      password reset link that will allow you to choose a new one.
    </p>
    <div
      id="status"
      v-if="status"
      class="my-4 text-sm font-medium text-green-600 dark:text-green-400"
    >
      {{ status }}
    </div>
    <ForgotPasswordForm class="mt-8" />
  </Modal>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm.vue";

defineProps({
  status: String,
});
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";
import Modal from "@/components/shared/Modal.vue";

export default {
  layout: AppLayout,
  components: { Modal },
};
</script>
