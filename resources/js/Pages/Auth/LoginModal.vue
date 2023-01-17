<template>
  <Container>
    <Modal>
      <Head title="Try Modal" />
      <template #title>Welcome Back!</template>
      <div
        class="mx-auto mt-14 rounded-md border border-gray-500 p-4 backdrop-blur-xl dark:border-gray-300 md:rounded-xl"
      >
        <h2
          class="my-6 flex justify-center text-2xl font-medium leading-relaxed tracking-wide"
        >
          Log In
        </h2>
        <div
          v-if="status"
          class="my-4 text-sm font-medium text-green-600 dark:text-green-400"
        >
          {{ status }}
        </div>
        <LoginForm />
      </div>
    </Modal>
  </Container>
</template>

<script setup>
import { provide } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import Modal from "@/components/shared/Modal.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import Container from "@/components/shared/Container.vue";

const props = defineProps({
  canResetPassword: Boolean,
  status: String,
});

provide("canResetPassword", props.canResetPassword);
</script>
