<script setup lang="ts">
</script>

<template>
    <div class="px-4 py-3 mb-8 bg-primary rounded-lg shadow-md dark:bg-dark-primary">
        <header class="py-4 text-lg text-bold flex items-center justify-between mb-2">
            <slot name="header" />
        </header>
        <slot />
    </div>
</template>
