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
import { computed } from "vue";
import { useForm, usePage } from "@inertiajs/vue3";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import PrimaryButton from "@/components/shared/PrimaryButton.vue";

const user = computed(() => usePage().props.auth.user);
const form = useForm("ProfileForm", {
  name: user.value.name,
  email: user.value.email,
});

function submitForm() {
  form.put(route("settings.profile.update"), {
    preserveScroll: true,
  });
}
</script>
