<script setup lang="ts">
const props = defineProps({
  name: String,
  icon: String,
  url: String,
});
</script>

<template>
  <li class="py-4 border-b-[1px] border-slate-700">
    <NuxtLink :to="url" class="flex items-center gap-4 text-slate-400 hover:text-slate-200 transition">
      <i :class="icon" />
      <span>{{ name }}</span>
      <i class="fa-solid fa-chevron-right ml-auto"></i>
    </NuxtLink>
  </li>
</template>
