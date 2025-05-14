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
  <div class="flex">
    <AdminSidebar />
    <main class="flex-1 h-screen bg-gray-50 dark:bg-gray-700 min-h-screen">
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
