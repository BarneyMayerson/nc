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
      <PasswordInput
        v-model="form.password_confirmation"
        label="Repeat Password"
        id="password_confirmation"
        required
      />
    </div>
    <div class="mt-8 flex items-center justify-end">
      <PrimaryButton
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      >
        Reset Password
      </PrimaryButton>
    </div>
  </form>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import PasswordInput from "@/components/shared/PasswordInput.vue";
import PrimaryButton from "@/components/shared/PrimaryButton.vue";

const props = defineProps({
  email: String,
  token: String,
});

const form = useForm({
  token: props.token,
  email: props.email,
  password: "",
  password_confirmation: "",
});

const submit = () => {
  form.post("/reset-password", {
    onFinish: () => form.reset("password", "password_confirmation"),
  });
};
</script>
