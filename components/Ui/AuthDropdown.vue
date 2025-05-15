<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "~/store/useUserStore";
const user_store = useUserStore();
const router = useRouter();
const show = ref(false);

function goTo(url: string) {
  show.value = false;
  router.push(url);
}

async function logOut() {
  const confirm = await useSweetAlertConfirm(
    "Are you sure you want to log out?",
    "You will be logged out of your account.",
  );
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
    <div
      @click="show = !show"
      v-if="user_store.user"
      class="flex gap-2 items-center cursor-pointer">
      <span>{{ user_store.user.email }}</span>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <div
      v-show="show"
      class="absolute top-[50px] right-0 bg-primary dark:bg-dark-primary w-[150px] shadow-md p-4 rounded-md flex flex-col gap-2 transition">
      <NuxtLink @click.prevent="goTo('/admin/profile')" class="flex gap-2 items-center  hover:text-accent" to="/admin/profile">
        <span>Profile</span>
      </NuxtLink>
      <NuxtLink @click.prevent="goTo('/admin')" class="flex gap-2 items-center  hover:text-accent" to="/admin">
        <span>Dashboard</span>
      </NuxtLink>
      <NuxtLink @click.prevent="logOut" class="text-error" to="/">Logout</NuxtLink>
    </div>
  </div>
</template>
