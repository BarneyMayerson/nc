<template>
  <div class="mx-4 mt-2 sm:mx-8 sm:mt-4">
    <h2>Home</h2>
    <p>Home page goes here UPD</p>

    <div class="mt-6">
      <PasswordInput id="password" label="Password Input" v-model="password" />
    </div>

    <div class="mt-8 flex items-center space-x-4">
      <FloatLabelInput
        id="first-name"
        label="Float Label Input"
        type="text"
        v-model="firstName"
      />
      <FloatSelect
        class="block flex-1"
        id="select-country"
        label="Country"
        v-model="country"
        :options="['France', 'Germany', 'Poland', 'USA']"
      />
    </div>

    <div class="mt-8">
      <FloatLabelTextarea
        rows="10"
        label="Dummy textarea"
        id="dummy-text"
        v-model="dummy"
      />
    </div>

    <div class="mt-8">
      <h3 class="text-xl font-semibold">Authentication data goes below</h3>
      <div v-if="isAuth">
        <p v-if="isAuth">User data is provided</p>
        <p>{{ user }} : {{ user }} :: {{ user }}</p>
      </div>
      <p v-else>User data is not provided</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
import PasswordInput from "@/components/shared/PasswordInput.vue";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import FloatSelect from "@/components/shared/FloatSelect.vue";
import FloatLabelTextarea from "@/components/shared/FloatLabelTextarea.vue";

const firstName = ref("");
const password = ref("");
const country = ref("");
const dummy = ref("");

const user = computed(() => usePage().props.value.auth.user);
const isAuth = computed(() => Boolean(user.value));
</script>
