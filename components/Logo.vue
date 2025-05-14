<script setup lang="ts">
const logo_url = "/images/logo.svg";
</script>

<template>
  <NuxtLink href="/" class="flex item-end gap-2">
    <img :src="logo_url" alt="Project Manager Icon" />
    <span class="line-clamp-none dark:text-dark-color relative top-0.5">Parcel Delivery</span>
  </NuxtLink>
</template>
