<script setup lang="ts">
import {StyleGuidePreviewCode} from '#components';
import type {TCodeProps} from '~/types/TCodeProps';

definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const btn_code = `
<FormBtn @emit_click="console.log('')">Edit</FormBtn>
<FormBtn @emit_click="console.log('')" color="success">Edit</FormBtn>
<FormBtn @emit_click="console.log('')" :disabled="true">Edit</FormBtn>
`;

const code_props: TCodeProps[] = [
    {
        key: "color",
        value: "string",
        default: "default",
        values: ["primary", "success", "danger", "warning"],
    },
    { key: "disabled", value: "boolean", default: false },
    { key: "url", value: "string", default: "" },
];

const btn_source = `
import { onMounted, PropType, ref } from "vue";

const props = defineProps({
    url: {
        type: String,
        required: false,
    },
    color: {
        type: String as PropType<
            | "primary"
            | "success"
            | "danger"
            | "warning"
        >,
        default: "primary",
    },
    disabled: {
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
});

    <a v-if="url" :href="url" class="px-3 py-2 rounded-lg" class="class_name text-white" @click="handleClick" >
    <slot />
    </a>
    <button v-else type="button" class="px-3 py-2 rounded-lg" class="class_name text-white" @click="handleClick" >
        <slot />
    </button>
`;

const btn_default = `<FormBtn @emit_click="console.log('')">Edit</FormBtn>`;
const btn_success = `<FormBtn @emit_click="console.log('')" color="success">Edit</FormBtn>`;
const btn_danger = `<FormBtn @emit_click="console.log('')" color="danger">Edit</FormBtn>`;
const btn_warning = `<FormBtn @emit_click="console.log('')" color="warning">Edit</FormBtn>`;
</script>

<template>
    <div class="flex">
        <StyleGuidePreviewCode :show_props="true">
            <template #default>
                <div class="flex gap-2 flex-wrap">
                    <div @click="useCopyToClipboard(btn_default)">
                        <FormBtn @emit_click="console.log('')">Default</FormBtn>
                    </div>
                    <div @click="useCopyToClipboard(btn_success)">
                        <FormBtn @emit_click="console.log('')" color="success"
                            >Success</FormBtn
                        >
                    </div>
                    <div @click="useCopyToClipboard(btn_danger)">
                        <FormBtn @emit_click="console.log('')" color="danger"
                            >Danger</FormBtn
                        >
                    </div>
                    <div @click="useCopyToClipboard(btn_warning)">
                        <FormBtn @emit_click="console.log('')" color="warning"
                            >Warning</FormBtn
                        >
                    </div>
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
