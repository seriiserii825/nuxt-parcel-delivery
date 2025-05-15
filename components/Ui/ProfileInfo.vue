<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";

const user_store = useUserStore();
const image = ref("/images/profile-foto.jpg");

function onChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
}

onMounted(() => {
  if (user_store.user && user_store.user.image) {
    image.value = user_store.user.image;
  }
});
</script>

<template>
  <div class="profile-info text-center pt-4" v-if="user_store.user">
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
