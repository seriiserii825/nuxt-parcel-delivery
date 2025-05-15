<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";

const user_store = useUserStore();
const { user } = storeToRefs(user_store);
const image = ref("/images/profile-foto.jpg");

async function onChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
  const formData = new FormData();
  formData.append("image", target.files[0]);
  try {
    await axiosInstance.post("/admin/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    useSweetAlert("success", "Image uploaded successfully");
  } catch (error) {
    console.error("Error uploading image:", error);
    handleAxiosError(error);
  }
}

watch(
  () => user.value,
  (newUser) => {
    if (newUser) {
      const config = useRuntimeConfig();
      const baseUrl = config.public.apiBase;
      const image_store = newUser.image;
      image.value = `${baseUrl}/${image_store}`;
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="profile-info pt-4 text-center" v-if="user_store.user">
    <div class="relative mb-4 w-[100px] h-[100px] mx-auto table">
      <img :src="image" alt="" class="absolute w-full h-full object-cover rounded-lg" />
      <div
        class="overflow-hidden cursor-pointer p-2 bg-green-600 hover:bg-green-800 transition-all flex items-center justify-center rounded-2xl cursor-pointer z-10 absolute bottom-[-4px] right-[-4px]">
        <i class="fa-solid fa-pen-to-square pointer-events-none"></i>
        <input class="absolute opacity-0" type="file" @change="onChange" name="file" />
      </div>
    </div>
    <div class="font-bold">{{ user_store.user.name }}</div>
    <p class="font-light text-sm">{{ user_store.user.email }}</p>
  </div>
</template>
