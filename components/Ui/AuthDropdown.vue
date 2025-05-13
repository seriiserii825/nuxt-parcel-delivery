<script setup lang="ts">
import { ref } from "vue";
import {useUserStore} from "~/store/useUserStore";
const user_store = useUserStore();
const router = useRouter();
const show = ref(false);

function goToAdmin() {
  show.value = false;
  router.push("/admin");
}

async function logOut() {
  const confirm = await useSweetAlertConfirm('Are you sure you want to log out?', 'You will be logged out of your account.');
  if (!confirm) {
      return;
  }
  try {
    await axiosInstance.post("/logout");
    localStorage.removeItem("token");
    const cookie_user = useCookie("user");
    cookie_user.value = null;
    user_store.setUser(null);
    router.push("/login");
    show.value = false;
  } catch (error) {
    useHandleAxiosErrors(error);
  } 
}
</script>

<template>
  <div class="relative">
    <div @click="show = !show" class="flex gap-2 items-center cursor-pointer">
      <span>myemail@gmail.com</span>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <div
      v-show="show"
      class="absolute top-[50px] right-0 bg-primary dark:bg-dark-primary p-2 rounded-md flex flex-col gap-2 transition"
    >
      <NuxtLink @click.prevent="goToAdmin" class="flex gap-2 items-center" to="/admin">
        <span>Dashboard</span>
      </NuxtLink>
      <NuxtLink @click.prevent="logOut" to="/">Logout</NuxtLink>
    </div>
  </div>
</template>
