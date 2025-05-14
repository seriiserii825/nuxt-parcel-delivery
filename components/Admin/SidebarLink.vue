<script setup lang="ts">
import { ref } from "vue";
type TSubmenu = {
  text: string;
  href: string;
};
const props = defineProps({
  href: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  sub_menu: {
    type: Array as PropType<TSubmenu[]>,
    default: () => [],
  },
  active: {
    type: String,
    required: false,
  },
});
const is_active_route = computed(() => {
  return props.active && route.path.includes(props.active);
});
const is_visible_submenu = ref(false);
const toggleSubmenu = () => {
  is_visible_submenu.value = !is_visible_submenu.value;
};
const route = useRoute();
</script>
<template>
  <div>
    <li
      class="relative px-6 py-3"
      :class="{
        'bg-gray-50 dark:bg-gray-900': is_active_route,
      }">
      <NuxtLink
        class="inline-flex items-center gap-2 w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        :href="href"
        v-if="!sub_menu.length">
        <i :class="icon"></i>
        <div class="relative top-0.5">{{ text }}</div>
        <i v-if="sub_menu.length" class="fa-solid fa-caret-down"></i>
      </NuxtLink>
      <NuxtLink
        class="inline-flex items-center gap-2 w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        href="#"
        v-else
        @click.prevent="toggleSubmenu">
        <i :class="icon"></i>
        <div class="relative top-0.5">{{ text }}</div>
        <i v-if="sub_menu.length" class="fa-solid fa-caret-down"></i>
      </NuxtLink>
    </li>
    <ul
      v-if="sub_menu.length && is_visible_submenu"
      class="px-6 py-3 space-y-2 overflow-hidden text-sm font-medium rounded-md shadow-inner"
      :class="{
        'bg-gray-50 dark:bg-gray-900': is_active_route,
      }"
      aria-label="submenu">
      <li
        v-for="item in sub_menu"
        class="px-2 ml-3 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
        <NuxtLink class="w-full" :to="item.href">{{ item.text }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
