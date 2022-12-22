<template>
  <div
    class="relative rounded-md border px-3 py-2 shadow-sm focus-within:ring-2 bg-white dark:bg-sky-900"
    :class="
      error
        ? 'border-red-300 focus-within:border-red-600 focus-within:ring-red-600'
        : 'border-gray-400 focus-within:ring-indigo-600 dark:focus-within:ring-sky-300'
    "
  >
    <input
      :id="id"
      :type="type"
      class="block w-full bg-transparent peer"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder=" "
    />
    <label
      :for="id"
      class="absolute left-3 text-sm peer-focus:text-sm -top-2/3 peer-focus:-top-2/3 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2"
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
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  error: {
    type: [String, Boolean],
  },
});
</script>
