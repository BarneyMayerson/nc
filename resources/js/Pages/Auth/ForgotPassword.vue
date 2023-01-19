<template>
  <Head title="Forgot Password" />
  <div
    class="mx-auto mt-14 flex flex-col rounded-md border border-gray-500 p-4 backdrop-blur-xl dark:border-gray-300 md:rounded-xl"
  >
    <h2
      class="my-6 flex justify-center text-2xl font-medium leading-relaxed tracking-wide"
    >
      Forgot Password?
    </h2>
    <p>
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
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm.vue";

defineProps({
  status: String,
});
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";

export default {
  layout: AppLayout,
};
</script>
