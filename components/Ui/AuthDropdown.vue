<script setup lang="ts">
import { ref } from "vue";
// import NavLink from "../NavLink.vue";
// import useSweetAlertConfirm from "../../Composables/useSweetAlertConfirm";
const show = ref(false);

async function logOut() {
  // const confirm = await useSweetAlertConfirm('Are you sure you want to log out?', 'You will be logged out of your account.');
  // if (!confirm) {
  //     return;
  // }
  // window.location.href = "/logout";
}
</script>

<template>
  <div class="relative">
    <div @click="show = !show" class="flex gap-2 items-center cursor-pointer">
      <span>myemail@gmail.com</span>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <div
      v-show="show"
      class="absolute top-[50px] right-0 bg-primary dark:bg-dark-primary p-2 rounded-md flex flex-col gap-2 transition"
    >
      <NuxtLink class="flex gap-2 items-center" to="/">
        <span>Dashboard</span>
      </NuxtLink>
      <NuxtLink to="/">Logout</NuxtLink>
    </div>
  </div>
</template>
