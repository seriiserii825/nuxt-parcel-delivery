<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";
const user_store = useUserStore();
const loading = ref(false);
function stopLoading() {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
const form = ref({
  email: "",
  password: "",
  remember: false,
});
const errors = ref({
  email: "",
  password: "",
});
const router = useRouter();
async function submit() {
  loading.value = true;
  try {
    const response = await axiosInstance.post("/login", form.value);
    console.log("response", response);
    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    user_store.setUser(response.data.user);
    setTimeout(() => {
      loading.value = false;
      router.push("/admin");
    }, 2000);
  } catch (error) {
    useHandleAxiosErrors(error);
    loading.value = false;
  }
}
</script>
<template>
  <div>
    <div class="mb-8 dark:text-dark-color">
      <UiTitle>Let's get your login!</UiTitle>
      <p>
        Don't have an account?
        <FormTextLink routeName="/register" label="Register" />
      </p>
    </div>
    <form @submit.prevent="submit" class="space-y-6">
      <FormInputField
        name="email"
        placeholder="Email"
        icon="at"
        v-model="form.email"
        :error="errors.email" />
      <FormInputField
        placeholder="Password"
        type="password"
        icon="key"
        v-model="form.password"
        name="password"
        :error="errors.password" />
      <div class="flex justify-end">
        <FormTextLink routeName="/forgot-password" label="Forgot password?" />
      </div>
      <UiLoader v-if="loading" />
      <FormBtn @click="submit" color="success">Login</FormBtn>
    </form>
  </div>
</template>
