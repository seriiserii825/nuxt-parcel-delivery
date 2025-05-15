<script setup lang="ts">
import {useUserStore} from '~/store/useUserStore';

const user_store = useUserStore();
</script>

<template>
  <header>
    <nav class="p-6 mx-auto max-w-screen-lg flex items-center justify-between gap-2">
      <Logo />
      <div class="flex items-center space-x-6 gap-2">
        <UiAuthDropdown v-if="user_store.user" />
        <UiThemeToggler />
      </div>
    </nav>
  </header>
</template>
