<script setup lang="ts">
import { useHead } from "#imports";
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
    },
  ],
});
</script>
<template>
  <div class="bg-gray-50 dark:bg-dark-primary dark:text-dark-color">
  <AdminHeader />
  <div class="flex">
    <AdminSidebar />
    <main class="flex-1 min-h-screen overflow-auto">
      <div class="p-4">
        <slot />
      </div>
    </main>
  </div>
  </div>
</template>
<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
