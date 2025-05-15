<script setup lang="ts">
const model = defineModel();
const password_active = ref(false);
const props = defineProps({
  label: String,
  icon: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String as () => "text" | "email" | "password",
    default: "text",
  },
  name: String,
  error: {
    type: String,
    default: "",
  },
});

const input_type = computed(() => {
  if (props.type === 'password') {
    return password_active.value ? "text" : "password";
  }
  return props.type;
});
</script>

<template>
  <div>
    <label :for="label" class="block dark:text-dark-color text-sm font-medium">
      {{ label }}
    </label>

    <div class="flex relative mt-1 rounded-md">
      <div v-if="icon" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="grid place-content-center text-sm dark:text-dark-color">
          <i :class="`fa-solid fa-${icon}`"></i>
        </span>
      </div>
      <input
        :type="input_type"
        :name="name"
        :placeholder="placeholder"
        autocomplete="off"
        v-model="model"
        class="h-[50px] bg-primary text-color dark:bg-dark-primary dark:text-dark-color placeholder:text-gray block w-full rounded-md text-sm border-slate-200 outline-0 focus:ring-1 focus:ring-inset focus:ring-indigo-400 focus:border-indigo-400"
        :class="{ 'pl-9 pr-3': icon }" />
      <i
        v-if="type === 'password'"
        @click="password_active = !password_active"
        class="fa-solid fa-eye absolute inset-y-0 right-3 flex items-center pl-3 opacity-50 cursor-pointer"
        :class="{ 'opacity-80': password_active }"></i>
    </div>
    <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ error }}
    </p>
  </div>
</template>
