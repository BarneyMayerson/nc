<template>
  <div
    class="relative rounded-md border px-3 py-2 shadow-sm focus-within:ring-2 bg-white dark:bg-sky-900"
    :class="{
      'border-red-300 focus-within:border-red-600 focus-within:ring-red-600':
        error,
      'border-gray-400 focus-within:ring-indigo-600 dark:focus-within:ring-sky-300':
        !error,
    }"
  >
    <textarea
      :id="id"
      class="block w-full bg-transparent peer"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="{ ...$attrs, class: null }"
      placeholder=" "
      >{{ modelValue }}</textarea
    >

    <label
      :for="id"
      class="absolute left-3 text-sm peer-focus:text-sm -top-6 peer-focus:-top-6 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2"
      :class="
        error
          ? 'text-red-500 dark:text-red-400'
          : 'text-gray-600 dark:text-gray-300 peer-focus:text-indigo-600 dark:peer-focus:text-sky-300'
      "
    >
      {{ label }}
    </label>
  </div>
  <div v-if="error" class="text-sm text-red-600 font-medium mt-2 ml-3">
    {{ error }}
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  error: {
    type: [String, Boolean],
  },
});
</script>
