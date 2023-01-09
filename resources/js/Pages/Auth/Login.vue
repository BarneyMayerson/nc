<template>
  <Head title="Login" />
  <div
    class="mx-auto mt-14 flex flex-col rounded-md border border-gray-500 p-4 backdrop-blur-xl dark:border-gray-300 md:rounded-xl"
  >
    <h2
      class="my-6 flex justify-center text-2xl font-medium leading-relaxed tracking-wide"
    >
      Log In
    </h2>
    <LoginForm />
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import LoginForm from "@/components/auth/LoginForm.vue";
</script>
