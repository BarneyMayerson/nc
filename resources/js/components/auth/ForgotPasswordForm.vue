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
      <div class="mt-8 flex items-center justify-end">
        <PrimaryButton
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Email Password Reset Link
        </PrimaryButton>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import PrimaryButton from "@/components/shared/PrimaryButton.vue";

defineProps({
  status: String,
});

const form = useForm("ForgotPasswordForm", {
  email: "",
});

function submit() {
  form.post("/forgot-password");
}
</script>
