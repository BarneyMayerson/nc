<template>
  <div class="mx-4 sm:mx-8 mt-2 sm:mt-4">
    <h2>Home</h2>
    <p>Home page goes here UPD</p>
    <div class="mt-8">
      <PasswordInput />
    </div>

    <div class="mt-8">
      <input id="standart" />
    </div>

    <div class="mt-8">
      <BaseInput
        id="testing"
        type="text"
        label="Base Input"
        v-model="firstName"
        error="Nop enough"
      />
    </div>
    <div class="mt-2">{{ firstName }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PasswordInput from "@/components/shared/PasswordInput.vue";
import BaseInput from "@/components/shared/BaseInput.vue";

const firstName = ref("");
</script>
