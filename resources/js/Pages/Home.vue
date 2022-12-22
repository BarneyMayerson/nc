<template>
  <div class="mx-4 sm:mx-8 mt-2 sm:mt-4">
    <h2>Home</h2>
    <p>Home page goes here UPD</p>
    <div class="mt-8">
      <PasswordInput />
    </div>

    <div class="mt-8">
      <FloatLabelInput
        id="first-name"
        label="Float Label Input"
        type="text"
        v-model="firstName"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PasswordInput from "@/components/shared/PasswordInput.vue";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";

const firstName = ref("");
</script>
