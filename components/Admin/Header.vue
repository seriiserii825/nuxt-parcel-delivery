<script setup lang="ts">
import { ref } from "vue";
const is_profile_visible = ref(false);
const user_email = ref("some");
const router = useRouter();
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
    try {
      await useGetUserApi();
      router.push("/login");
    } catch (error) {
      handleAxiosError(error);
    }
  } catch (error) {
    handleAxiosError(error);
  }
}
</script>

<template>
  <header class="z-10 p-4 shadow-md dark:bg-dark-primary">
    <div
      class="flex items-center justify-between gap-2 w-full h-full px-2 text-purple-600 dark:text-purple-300">
      <div class="px-4">
        <AdminLogo />
      </div>
      <!-- Search input -->
      <div class="flex justify-center flex-1 lg:mr-32">
        <div class="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
          <div class="absolute inset-y-0 flex items-center pl-2">
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <input
            class="w-full dark:bg-primary pl-8 pr-2 text-sm placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
            type="text"
            placeholder="Search for projects"
            aria-label="Search" />
        </div>
      </div>
      <ul class="flex items-center flex-shrink-0 space-x-6">
        <!-- Notifications menu -->
        <li class="relative">
          <button
            class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
            aria-label="Notifications"
            aria-haspopup="true">
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
            <!-- Notification badge -->
            <span
              aria-hidden="true"
              class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
          </button>
          <template v-if="false">
            <ul
              class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
              <li class="flex">
                <a
                  class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  href="#">
                  <span>Messages</span>
                  <span
                    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                    13
                  </span>
                </a>
              </li>
              <li class="flex">
                <a
                  class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  href="#">
                  <span>Sales</span>
                  <span
                    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                    2
                  </span>
                </a>
              </li>
              <li class="flex">
                <a
                  class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  href="#">
                  <span>Alerts</span>
                </a>
              </li>
            </ul>
          </template>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-guilded"></i>
          </a>
        </li>
        <UiThemeToggler />
        <!-- Profile menu -->
        <li class="relative">
          <button
            @click="is_profile_visible = !is_profile_visible"
            class="flex items-center gap-2 rounded-full focus:shadow-outline-purple focus:outline-none"
            aria-label="Account"
            aria-haspopup="true">
            <span>{{ user_email }}</span>
            <img
              class="object-cover w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
              alt=""
              aria-hidden="true" />
          </button>
          <ul
            v-if="is_profile_visible"
            class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
            aria-label="submenu">
            <li class="flex">
              <a
                class="inline-flex gap-3 items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                href="#">
                <i class="fa-solid fa-user"></i>
                <span>Profile</span>
              </a>
            </li>
            <li class="flex">
              <a
                class="inline-flex gap-3 items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                href="#">
                <i class="fa-solid fa-gear"></i>
                <span>Settings</span>
              </a>
            </li>
            <li class="flex">
              <a
                @click.prevent="logOut"
                class="inline-flex gap-3 items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                href="#">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span>Log out</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>
