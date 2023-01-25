<template>
  <Head title="Register" />
  <Modal>
    <template #title>Register New Account</template>
    <div class="mt-20">
      <RegisterForm />
    </div>
  </Modal>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import Modal from "@/components/shared/Modal.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";

export default {
  layout: AppLayout,
};
</script>
