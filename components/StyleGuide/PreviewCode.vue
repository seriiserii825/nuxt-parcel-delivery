<script setup lang="ts">
import { ref } from "vue";
import { Vue3SlideUpDown } from "vue3-slide-up-down";
const emits = defineEmits(["emit_click"]);
defineProps({
  show_copy_btn: {
    type: Boolean,
    default: false,
  },
  show_props: {
    type: Boolean,
    default: false,
  },
});
const show_code = ref(false);
const show_source = ref(false);
const toggle_props = ref(false);

function emitClick() {
  emits("emit_click");
}
</script>

<template>
  <div class="w-full">
    <div class="p-4 border border-gray-500 rounded-sm mb-3">
      <slot></slot>
    </div>
    <footer class="flex justify-end gap-2 mb-3">
      <FormBtn v-if="show_props" @emit_click="() => (toggle_props = !toggle_props)" color="success">
        Props
      </FormBtn>
      <FormBtn v-if="show_copy_btn" color="warning" @emit_click="emitClick">Copy to clipboard</FormBtn>
      <FormBtn color="warning" @emit_click="() => (show_code = !show_code)">How to use</FormBtn>
      <FormBtn @emit_click="() => (show_source = !show_source)">Source Code</FormBtn>
    </footer>
    <Vue3SlideUpDown v-model="show_code">
      <div class="border border-gray-500 p-4">
        <pre> <slot name="code"></slot></pre>
      </div>
    </Vue3SlideUpDown>
    <Vue3SlideUpDown v-model="show_source">
      <div class="border border-gray-500 p-4">
        <pre> <slot name="source"></slot> </pre>
      </div>
    </Vue3SlideUpDown>
    <Vue3SlideUpDown v-model="toggle_props">
      <div class="border border-gray-500 p-4">
        <slot name="code_props"></slot>
      </div>
    </Vue3SlideUpDown>
  </div>
</template>
