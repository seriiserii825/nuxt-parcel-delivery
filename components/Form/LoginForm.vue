<script setup lang="ts">
const form = ref({
  email: "",
  password: "",
  remember: false,
});

const errors = ref({
  email: "",
  password: "",
});

function submit() {
    // form.post(route("login"), {
    //     onSuccess: () => {
    //         form.reset();
    //     },
    //     onError: (errors) => {
    //         for (const key in errors) {
    //             form.setError(key, errors[key]);
    //         }
    //     },
    // });
}
</script>
<template>
    <UiContainer class="w-1/2">
        <div class="mb-8 text-center dark:text-dark-color">
            <UiTitle>Login</UiTitle>
            <p>
                Don't have an account?
                <FormTextLink routeName="/register" label="Register" />
            </p>
        </div>
        <form @submit.prevent="submit" class="space-y-6">
            <FormInputField
                label="Email"
                icon="at"
                v-model="form.email"
                :error="errors.email"
            />
            <FormInputField
                label="Password"
                type="password"
                icon="key"
                v-model="form.password"
                :error="errors.password"
            />
            <div class="flex justify-between">
                <FormCheckbox name="remember" v-model="form.remember">
                    Remember me
                </FormCheckbox>
                <FormTextLink routeName="/" label="Forgot password?" />
            </div>
            <FormBtn color="success">Login</FormBtn>
        </form>
    </UiContainer>
</template>
