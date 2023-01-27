<template>
  <form @submit.prevent="submit">
    <div class="space-y-10">
      <FloatLabelInput
        v-model="form.email"
        label="Email"
        type="email"
        id="email"
        :error="form.errors.email"
        required
      />
      <PasswordInput
        v-model="form.password"
        label="Password"
        id="password"
        :error="form.errors.password"
        required
      />

      <div class="mt-8 flex items-baseline justify-end space-x-6">
        <Link
          v-if="canResetPassword"
          :href="route('password.request')"
          class="rounded text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-8 dark:text-gray-300 dark:hover:text-gray-100 focus:dark:ring-sky-800 dark:focus:ring-offset-gray-800"
        >
          Forgot your password?
        </Link>
        <PrimaryButton
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Login
        </PrimaryButton>
      </div>
    </div>
  </form>
</template>

<script setup>
import { inject } from "vue";
import { Link, useForm } from "@inertiajs/vue3";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import PasswordInput from "@/components/shared/PasswordInput.vue";
import PrimaryButton from "@/components/shared/PrimaryButton.vue";

const canResetPassword = inject("canResetPassword", true);

const form = useForm("LoginForm", {
  email: "",
  password: "",
});

function submit() {
  form.post(route("login"));
}
</script>
