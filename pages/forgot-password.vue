<script setup lang="ts">
const router = useRouter();
const form = ref({
  email: "",
});
const errors = ref({
  email: "",
});
const loading = ref(false);
function goBack() {
  router.back();
}
async function submit() {
  loading.value = true;
  try {
    await axiosInstance.post("/forgot-password", form.value);
    loading.value = false;
    useSweetAlert("success", "Success", "Check your email for the reset link");
  } catch (error) {
    useHandleAxiosErrors(error);
    loading.value = false;
  }
}
</script>

<template>
  <div class="forgot-password">
    <NavBack @click="goBack" class="cursor-pointer" />
    <div class="mb-8 mt-8 dark:text-dark-color">
      <UiTitle>Forgot your password?</UiTitle>
      <p>Enter your email address and we'll send you a link to reset your password.</p>
    </div>
    <FormInputField
      name="email"
      placeholder="Email"
      icon="at"
      v-model="form.email"
      :error="errors.email" />
    <FormBtn :loading="loading" class="mt-8" @click="submit" color="success">Reset link</FormBtn>
  </div>
</template>
