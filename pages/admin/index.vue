<script setup lang="ts">

definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
</script>

<template>
  <div class="admin">
    <MapLocation/>
  </div>
</template>
