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

    <div class="mt-8">
      <button
        class="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
        type="submit"
        :disabled="form.processing"
      >
        Register account
      </button>
    </div>
  </form>
</template>

<script setup>
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import PasswordInput from "../shared/PasswordInput.vue";

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
