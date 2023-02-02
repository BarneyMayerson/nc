<template>
  Profile Page
  <div class="mt-10">
    <ProfileForm />
  </div>
</template>

<script setup>
import ProfileForm from "@/components/User/Settings/ProfileForm.vue";
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";

export default {
  layout: AppLayout,
};
</script>
