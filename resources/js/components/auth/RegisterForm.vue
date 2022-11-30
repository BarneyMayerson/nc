<template>
  <form @submit.prevent="submit" class="mt-4">
    <div class="mb-6">
      <label for="name" class="block font-bold text-xs text-gray-500 mb-2">
        Name
      </label>
      <input
        v-model="form.name"
        class="border rounded-md px-2 py-1 w-full"
        type="text"
        name="name"
        id="name"
        required
      />
      <div
        v-if="form.errors.name"
        v-text="form.errors.name"
        class="text-red-500 text-xs mt-1"
      ></div>
    </div>
    <div class="mb-6">
      <label for="email" class="block font-bold text-xs text-gray-500 mb-2">
        Email
      </label>
      <input
        v-model="form.email"
        class="border rounded-md px-2 py-1 w-full"
        type="email"
        name="email"
        id="email"
        required
      />
      <div
        v-if="form.errors.email"
        v-text="form.errors.email"
        class="text-red-500 text-xs mt-1"
      ></div>
    </div>

    <div class="mb-6">
      <label for="password" class="block font-bold text-xs text-gray-500 mb-2">
        Password
      </label>
      <input
        v-model="form.password"
        class="border rounded-md px-2 py-1 w-full"
        type="password"
        name="password"
        id="password"
        required
      />
      <div
        v-if="form.errors.password"
        v-text="form.errors.password"
        class="text-red-500 text-xs mt-1"
      ></div>
    </div>

    <div class="mb-6">
      <label
        for="password_confirmation"
        class="block font-bold text-xs text-gray-500 mb-2"
      >
        Confirm Password
      </label>
      <input
        v-model="form.password_confirmation"
        class="border rounded-md px-2 py-1 w-full"
        type="password"
        name="password_confirmation"
        id="password_confirmation"
        required
      />
    </div>

    <div class="mb-4">
      <button
        class="bg-blue-400 hover:bg-blue-500 text-white rounded px-4 py-2"
        type="submit"
        :disabled="form.processing"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

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
