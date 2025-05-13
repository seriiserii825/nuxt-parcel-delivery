<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  link: [
    { rel: "stylesheet", href: "/css/fontawesome.min.css" },
  ],
});

</script>

<template>
  <div class="layout default-layout">
    <slot />
  </div>
</template>
<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
