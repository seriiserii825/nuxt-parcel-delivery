<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";

const user_store = useUserStore();
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
  try {
    const response = await axiosInstance.post("/register", form.value);
    console.log("response", response);

    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    user_store.setUser(response.data.user);
    router.push("/admin");
  } catch (error) {
    useHandleAxiosErrors(error);
  }
}
</script>
<template>
  <UiContainer class="w-1/2">
    <div class="mb-8 text-center dark:text-dark-color">
      <UiTitle>Register</UiTitle>
      <p>
        Have an account?
        <FormTextLink routeName="/login" label="Login" />
      </p>
    </div>
    <form @submit.prevent="submit" class="space-y-6">
      <FormInputField label="Name" icon="user" v-model="form.name" :error="errors.name" />
      <FormInputField label="Email" icon="at" v-model="form.email" :error="errors.email" />
      <FormInputField
        label="Password"
        type="password"
        icon="key"
        v-model="form.password"
        :error="errors.password"
      />
      <FormInputField
        label="Password Confirmation"
        type="password"
        icon="key"
        v-model="form.password_confirmation"
        :error="errors.password_confirmation"
      />
      <FormBtn @click="submit" color="success">Register</FormBtn>
    </form>
  </UiContainer>
</template>
