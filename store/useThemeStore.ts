import { ref } from "vue";
import { defineStore } from "pinia";
export const useThemeStore = defineStore("theme", () => {
  const theme = ref<"light" | "dark">("light");
  function toggleTheme() {
    if (process.client) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        theme.value = "light";
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        theme.value = "dark";
      }
    }
  }

function setThemeOnLoad() {
  if (process.client) {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      theme.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      theme.value = "light";
    }
  }
}
  return {theme, toggleTheme, setThemeOnLoad};
});
