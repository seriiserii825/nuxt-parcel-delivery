<script setup lang="ts">
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const form = ref({
  name: "",
  email: "",
  password: "",
});
const errors = ref({
  name: "",
  email: "",
  password: "",
});

async function submit() {
  try {
    const response = await axiosInstance.post("/profile", form.value);
    console.log("response", response);
    // Handle success, e.g., show a success message or redirect
  } catch (error) {
    useHandleAxiosErrors(error);
    // Handle error, e.g., show an error message
  }
}
</script>

<template>
  <div class="index">
    <UiTitle class="text-center">Profile</UiTitle>
    <UiProfileInfo class="mb-6" />
    <FormInputField
      class="mb-4"
      name="name"
      placeholder="Name"
      icon="user"
      v-model="form.name"
      :error="errors.name" />
    <FormInputField
      class="mb-4"
      name="email"
      placeholder="Email"
      icon="at"
      v-model="form.email"
      :error="errors.email" />
    <FormInputField
      class="mb-4"
      placeholder="Password"
      type="password"
      icon="key"
      v-model="form.password"
      name="password"
      :error="errors.password" />
    <FormBtn @click="submit" color="success">Update</FormBtn>
  </div>
</template>
