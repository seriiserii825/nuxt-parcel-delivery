<script setup lang="ts">
import { useHead } from "#imports";
import {useUserStore} from "~/store/useUserStore";
import { switchTheme } from "~/utils/theme";
useHead({
  link: [{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" }],
});

const user_store = useUserStore();

function changeTheme() {
  switchTheme();
}

setThemeOnLoad();
</script>

<template>
  <div>
    <header class="bg-primary text-color dark:bg-dark-primary dark:text-dark-color">
      <nav class="p-6 mx-auto max-w-screen-lg flex items-center justify-between gap-2">
        <Logo />
        <div class="flex items-center space-x-6 gap-2">
          <UiAuthDropdown v-if="user_store.user"/>
          <div v-else class="flex gap-2">
            <FormBtn url="/login">Login</FormBtn>
            <FormBtn url="/register">Register</FormBtn>
          </div>
          <button
            @click="changeTheme"
            class="w-6 h-6 grid place-items-center rounded-full hover:outline outline-1 outline-white"
          >
            <i class="fa-solid fa-circle-half-stroke"></i>
          </button>
        </div>
      </nav>
    </header>
    <main class="text-color bg-primary-light dark:bg-dark-primary-dark dark:text-dark-color min-h-[100vh] p-6">
      <slot />
    </main>
  </div>
</template>
<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
