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
  <div>
    <div class="mobile-container">
      <NavHeader />
      <main
        class="text-color bg-primary-light dark:bg-dark-primary-dark dark:text-dark-color min-h-[100vh] py-6">
        <slot />
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
