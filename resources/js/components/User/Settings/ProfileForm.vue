<template>
  <form @submit.prevent="submitForm">
    <div class="space-y-10">
      <FloatLabelInput
        v-model="form.name"
        label="Name"
        id="name"
        :error="form.errors.name"
        autofocus
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
      <PrimaryButton
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      >
        Update Profile
      </PrimaryButton>
    </div>
  </form>
</template>

<script setup>
import { defineProps } from "vue";
import { useForm } from "@inertiajs/vue3";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import PrimaryButton from "@/components/shared/PrimaryButton.vue";

const props = defineProps({
  user: Object,
});

const form = useForm("ProfileForm", {
  name: props.user.name,
  email: props.user.email,
});

function submitForm() {
  form.put(route("settings.profile.update"), {
    preserveScroll: true,
  });
}
</script>
