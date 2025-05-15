<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";
const user_store = useUserStore();
const loading = ref(false);
const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  remember: false,
});
const errors = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
const router = useRouter();
async function submit() {
  loading.value = true;
  try {
    const response = await axiosInstance.post("/register", form.value);
    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    user_store.setUser(response.data.user);
    setTimeout(() => {
      loading.value = false;
      router.push("/admin");
    }, 1000);
  } catch (error) {
    useHandleAxiosErrors(error);
    loading.value = false;
  }
}
</script>
<template>
  <div>
    <div class="mb-8 dark:text-dark-color">
      <UiTitle>Register</UiTitle>
      <p>
        Have an account?
        <FormTextLink routeName="/login" label="Login" />
      </p>
    </div>
    <form @submit.prevent="submit" class="space-y-6">
      <FormInputField
        name="name"
        label="Name"
        icon="user"
        v-model="form.name"
        :error="errors.name" />
      <FormInputField
        name="email"
        label="Email"
        icon="at"
        v-model="form.email"
        :error="errors.email" />
      <FormInputField
        label="Password"
        type="password"
        icon="key"
        name="password"
        v-model="form.password"
        :error="errors.password" />
      <FormInputField
        label="Password Confirmation"
        type="password"
        icon="key"
        name="password_confirmation"
        v-model="form.password_confirmation"
        :error="errors.password_confirmation" />
      <FormBtn :loading="loading" @click="submit" color="success">Register</FormBtn>
    </form>
  </div>
</template>
