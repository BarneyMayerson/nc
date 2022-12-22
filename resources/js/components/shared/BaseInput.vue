<template>
  <div :class="$attrs.class">
    <label v-if="label" class="form-label" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      class="form-input"
      :class="{ error: error }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="{ ...$attrs, class: null }"
    />
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script setup>
// TODO: maybe reject this component and reset.css + form.css as well
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
    type: [String, Boolean],
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
