<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  url: {
    type: String,
    required: false,
  },
  color: {
    type: String as PropType<"primary" | "success" | "danger" | "warning">,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  full: Boolean,
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["emit_click"]);
const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("emit_click", event);
  }
};

const class_name = ref("bg-slate-900 hover:bg-slate-700");

onMounted(() => {
  if (props.color) {
    switch (props.color) {
      case "primary":
        class_name.value = "bg-slate-800 hover:bg-slate-900";
        break;
      case "success":
        class_name.value = "bg-green-700 hover:bg-green-800";
        break;
      case "danger":
        class_name.value = "bg-red-700 hover:bg-red-800";
        break;
      case "warning":
        class_name.value = "bg-yellow-700 hover:bg-yellow-800";
        break;
      default:
        class_name.value = "bg-slate-900 hover:bg-slate-700";
        break;
    }
  }
  if (props.disabled) {
    class_name.value = "bg-gray-500 cursor-not-allowed";
  }
  if (props.full) {
    class_name.value += " w-full";
  }
});
</script>

<template>
  <NuxtLink
    v-if="url"
    :href="url"
    class="px-8 py-2 rounded-lg"
    :class="`${class_name} text-white`"
    @click="handleClick">
    <slot />
  </NuxtLink>
  <button
    v-else
    type="button"
    class="flex gap-2 items-center px-8 py-2 rounded-lg"
    :class="`${class_name} text-white`"
    @click="handleClick">
    <UiLoader v-if="loading" />
    <slot />
  </button>
</template>
