<template>
  <div class="mx-4 mt-2 sm:mx-8 sm:mt-4">
    <h2>Home</h2>
    <p>Home page goes here UPD</p>

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

    <div class="mt-8 flex space-x-4">
      <PrimaryButton @click="defToast">Default Toast</PrimaryButton>
      <PrimaryButton @click="sucToast">Success Toast</PrimaryButton>
    </div>

    <div class="mt-8">
      <h3 class="text-xl font-semibold">Authentication data goes below</h3>
      <div v-if="isAuth">
        <p v-if="isAuth">User data is provided</p>
        <p>{{ user }} : {{ user }} :: {{ user }}</p>
      </div>
      <p v-else>User data is not provided</p>
    </div>

    <div class="mt-8 text-lg">Home Route equals '{{ routeHome }}'</div>
    <div class="text-lg text-slate-500">Current Url equals '{{ url }}'</div>
    <div class="text-lg">Login Route equals '{{ routeLogin }}'</div>
    <div class="text-lg">Register Route equals '{{ routeRegister }}'</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import FloatLabelInput from "@/components/shared/FloatLabelInput.vue";
import FloatSelect from "@/components/shared/FloatSelect.vue";
import FloatLabelTextarea from "@/components/shared/FloatLabelTextarea.vue";

import { POSITION, TYPE, useToast } from "vue-toastification";

const firstName = ref("");
const country = ref("");
const dummy = ref("");

const user = computed(() => usePage().props.auth.user);
const isAuth = computed(() => Boolean(user.value));

const currentRoute = route().current();
const url = route(currentRoute);
console.log(currentRoute);
console.log(Ziggy.url);

const toast = useToast();

const defToast = () => {
  toast("I'm a toast!", {
    position: POSITION.BOTTOM_RIGHT,
  });
};
const sucToast = () => {
  toast("I'm a success toast notification!", {
    position: POSITION.BOTTOM_RIGHT,
    type: TYPE.SUCCESS,
  });
};

const routeHome = route("home");
const routeLogin = route("login");
const routeRegister = route("register");
</script>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";
import PrimaryButton from "@/components/shared/PrimaryButton.vue";

export default {
  layout: AppLayout,
  components: { PrimaryButton },
};
</script>
