<script setup lang="ts">
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
</script>

<template>
  <div class="index">
    <UiTitle class="text-center">Profile</UiTitle>
    <UiProfileInfo/>
  </div>
</template>
