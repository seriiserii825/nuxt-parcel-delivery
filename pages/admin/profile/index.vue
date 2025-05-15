<script setup lang="ts">
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});
</script>

<template>
  <div class="index">
    <UiTitle class="text-center">Profile</UiTitle>
    <UiProfileInfo class="mb-8" />
    <ul>
      <NavProfileItem name="Edit Profile" icon="fa-solid fa-user-pen" url="/admin/profile/edit" />
      <NavProfileItem name="Change Password" icon="fa-solid fa-key" url="/forgot-password" />
    </ul>
  </div>
</template>
