import { ref } from "vue";
import { defineStore } from "pinia";
import type { TUser } from "~/types/TUser";
export const useUserStore = defineStore("user", () => {
  const user = ref<TUser | null>(null);
  function setUser(newUser: TUser | null) {
    user.value = newUser;
  }
  return {
    user,
    setUser,
  };
});
