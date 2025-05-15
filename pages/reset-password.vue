<script setup lang="ts">
const route = useRoute();
const form = ref({
  email: "",
  password: "",
  password_confirmation: "",
  token: "",
});
const errors = ref({
  email: "",
  password: "",
  password_confirmation: "",
});
const router = useRouter();
const loading = ref(false);
async function submit() {
  loading.value = true;
  try {
    await axiosInstance.post("/reset-password", form.value);
    setTimeout(() => {
      loading.value = false;
      useSweetAlert("success", "Success", "Password reset successfully");
      router.push("/login");
    }, 1000);
  } catch (error) {
    useHandleAxiosErrors(error);
    loading.value = false;
  }
}

onMounted(() => {
  const token = route.query.token;
  if (token) {
    form.value.token = token as string;
  }
  const email = route.query.email;
  if (email) {
    form.value.email = email as string;
  }
});
</script>
<template>
  <div class="reset-password">
    <div class="mb-8 dark:text-dark-color">
      <UiTitle>Resset Password</UiTitle>
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
      <FormInputField
        placeholder="Confirm Password"
        type="password"
        icon="key"
        v-model="form.password_confirmation"
        name="password_confirmation"
        :error="errors.password_confirmation" />
      <FormBtn :loading="loading" @click="submit" color="success">Submit</FormBtn>
    </form>
  </div>
</template>
