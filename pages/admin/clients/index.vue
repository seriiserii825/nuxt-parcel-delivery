<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { TClient } from "~/types/TClient";

definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
const clients = ref<TClient[]>();

async function onDelete(id: number) {
  const agree = await useSweetAlertConfirm(
    "Are you sure you want to delete this client?",
    "This action cannot be undone."
  );
  if (agree) {
    //
  }
}

async function getData() {
  try {
    const response = await axiosInstance.get("/admin/clients");
    clients.value = response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

onMounted(() => {
  getData();
});
</script>

<template>
  <UiBlock title="All Clients">
    <template #header>
      <h1 class="text-2xl font-bold">Create Client</h1>
      <FormBtn href="/" color="success">Create</FormBtn>
    </template>

    <UiTableCustom
      v-if="clients && clients.length"
      :header_titles="['id', 'name', 'created_at', 'actions']">
      <UiTableRow v-for="(client, index) in clients" :key="index">
        <UiTableTd>{{ client.id }}</UiTableTd>
        <UiTableTd>{{ client.name }}</UiTableTd>
        <UiTableTd>{{ useFormatDate(client.created_at) }}</UiTableTd>
        <td class="px-4 py-3">
          <div class="flex items-center space-x-4 text-sm">
            <a
              href="#"
              class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
              aria-label="Edit">
              <i class="fa-solid fa-pen-to-square"></i>
            </a>
            <a
              @click.prevent="onDelete(client.id)"
              href="#"
              class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
              aria-label="Delete">
              <i class="fa-solid fa-trash-can"></i>
            </a>
          </div>
        </td>
      </UiTableRow>
    </UiTableCustom>
  </UiBlock>
</template>
