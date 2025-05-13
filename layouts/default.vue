<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  link: [{ rel: "stylesheet", href: "/css/fontawesome.min.css" }],
});
</script>

<template>
  <div>
    <div class="text-red-500 text-3xl font-bold">Hello Tailwind!</div>
    <header class="bg-primary text-color dark:bg-dark-primary dark:text-dark-color">
      <nav class="p-6 mx-auto max-w-screen-lg flex items-center justify-between gap-2">
        <Logo />
        <div class="flex items-center space-x-6 gap-2"></div>
      </nav>
    </header>
    <main class="p-6 mx-auto max-w-screen-lg">
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
