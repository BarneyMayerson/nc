<template>
  <form @submit.prevent="submit">
    <div class="space-y-10">
      <FloatLabelInput
        v-model="form.name"
        label="Name"
        id="name"
        :error="form.errors.name"
        required
      />
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
      <PasswordInput
        v-model="form.password_confirmation"
        label="Repeat Password"
        id="password_confirmation"
        required
      />
    </div>

    <div class="mt-8 flex items-baseline justify-end space-x-6">
      <Link
        href="/login"
        class="rounded text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-8 dark:text-gray-300 dark:hover:text-gray-100 focus:dark:ring-sky-800 dark:focus:ring-offset-gray-800"
      >
        Already Have an Account?
      </Link>
      <PrimaryButton
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      >
        Register
      </PrimaryButton>
    </div>
  </form>
</template>

<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import PasswordInput from "@/components/shared/PasswordInput.vue";
import PrimaryButton from "@/components/shared/PrimaryButton.vue";

const form = useForm("RegisterForm", {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

function submit() {
  form.post("/register");
}
</script>
