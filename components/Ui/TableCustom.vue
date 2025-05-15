<script setup lang="ts">
const props = defineProps({
  header_titles: {
    type: Array,
  },
  elements: {
    type: Array,
  },
});
</script>

<template>
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:bg-dark-primary dark:text-gray-400">
            <th v-for="(item, index) in header_titles" :key="index" class="px-4 py-3">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-dark-primary">
          <slot />
        </tbody>
      </table>
    </div>
  </div>
</template>
