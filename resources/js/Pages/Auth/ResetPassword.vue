<template>
  <Head title="Reset Password" />
  <div
    class="mx-auto mt-14 flex flex-col rounded-md border border-gray-500 p-4 backdrop-blur-xl dark:border-gray-300 md:rounded-xl md:p-8"
  >
    <h2 class="my-6 text-center text-2xl font-medium leading-6">
      Reset Password
    </h2>
    <p>Check out email address and choose new password.</p>
    <div class="my-10">
      <ResetPasswordForm :email="email" :token="token" />
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm.vue";

defineProps({
  email: String,
  token: String,
});
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";

export default {
  layout: AppLayout,
};
</script>
