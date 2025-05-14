<script setup lang="ts">
import type {TCodeProps} from "~/types/TCodeProps";

definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const btn_code = `
<FormCheckbox name="remember" v-model="form.remember">
    Remember me
</FormCheckbox>
`;

const code_props: TCodeProps[] = [
    {
        key: "name",
        value: "string",
        required: true,
    },
];

const btn_source = `
const model = defineModel();

defineProps({
    name: String,
});

    <div class="flex items-center gap-2">
        <input
            type="checkbox"
            v-model="model"
            :id="name"
            class="rounded-md border-1 outline-0 text-indigo-500 ring-indigo-500 border-slate-700"
        />
        <label
            :for="name"
            class="block text-sm font-medium dark:text-dark-color cursor-pointer"
        >
            <slot />
        </label>
    </div>
`;
</script>

<template>
    <div class="flex">
        <StyleGuidePreviewCode
            :show_props="true"
            :show_copy_btn="true"
            @emit_click="useCopyToClipboard(btn_code)"
        >
            <template #default>
                <div class="flex gap-2 flex-wrap">
                    <FormCheckbox name="remember"> Remember me </FormCheckbox>
                </div>
            </template>
            <template #code_props>
                <StyleGuideCodeProps :code_props="code_props" />
            </template>
            <template #code>
                {{ btn_code }}
            </template>
            <template #source>
                {{ btn_source }}
            </template>
        </StyleGuidePreviewCode>
    </div>
</template>
