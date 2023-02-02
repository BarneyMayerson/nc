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
import { POSITION, TYPE, useToast } from "vue-toastification";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import PrimaryButton from "@/components/shared/PrimaryButton.vue";

const user = computed(() => usePage().props.auth.user);
const form = useForm("ProfileForm", {
  name: user.value.name,
  email: user.value.email,
});

const toast = useToast();

const successToast = () => {
  toast("Your profile has been updated!", {
    position: POSITION.BOTTOM_RIGHT,
    type: TYPE.SUCCESS,
  });
};

const errorToast = () => {
  toast("Unable to update!", {
    position: POSITION.BOTTOM_RIGHT,
    type: TYPE.SUCCESS,
  });
};

function submitForm() {
  form.put(route("settings.profile.update"), {
    preserveScroll: true,
    onSuccess: () => successToast(),
    onError: () => errorToast(),
  });
}
</script>
