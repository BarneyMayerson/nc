<template>
  <div
    class="relative flex-auto rounded-md border px-3 py-2.5 shadow-sm focus-within:ring-2 bg-white dark:bg-sky-900"
    :class="{
      'border-red-300 focus-within:border-red-600 focus-within:ring-red-600':
        error,
      'border-gray-400 focus-within:ring-indigo-600 dark:focus-within:ring-sky-300':
        !error,
    }"
  >
    <select
      :id="id"
      :value="modelValue"
      class="bg-transparent w-full peer"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
    >
      <option class="text-gray-500 dark:text-sky-700" value="" disable selected>
        {{ label }} ...
      </option>
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
    <label
      :for="id"
      class="absolute left-3 text-sm peer-focus:text-sm -top-2/3 peer-focus:-top-2/3 transition-all"
      :class="{
        invisible: !modelValue,
        'text-red-500 dark:text-red-400': error,
        'text-gray-600 dark:text-gray-300 peer-focus:text-indigo-600 dark:peer-focus:text-sky-300':
          !error,
      }"
    >
      {{ label }}
    </label>
  </div>
  <div v-if="error" class="text-sm text-red-600 font-medium mt-2 ml-3">
    {{ error }}
  </div>
</template>

<script setup>
import { useAttrs } from "vue";
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: [String, Boolean],
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  options: {
    type: Array,
    required: true,
  },
  error: {
    type: [String, Boolean],
  },
});

const attrs = useAttrs();
const addClasses = attrs.class;

console.log(addClasses);
</script>

<style scoped>
select option {
  @apply bg-white dark:bg-sky-900;
}
</style>
