<script setup lang="ts">
const router = useRouter();
const form = ref({
  email: "",
});
const errors = ref({
  email: "",
});
function goBack() {
  router.back();
}
async function submit(){
  try {
    await axiosInstance.post("/forgot-password", form.value);
    useSweetAlert('success', 'Success', 'Check your email for the reset link');
  } catch (error) {
    useHandleAxiosErrors(error);
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
    <FormBtn class="mt-8" @click="submit" color="success">Reset link</FormBtn>
  </div>
</template>
