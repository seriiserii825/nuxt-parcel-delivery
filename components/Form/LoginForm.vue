<script setup lang="ts">
import {useUserStore} from '~/store/useUserStore';

const user_store = useUserStore();
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
  try {
    const response = await axiosInstance.post("/login", form.value);
    console.log("response", response);

    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    user_store.setUser(response.data.user);
    router.push('/admin');

  } catch (error) {
    useHandleAxiosErrors(error);
  }
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
            <FormBtn @click="submit" color="success">Login</FormBtn>
        </form>
    </UiContainer>
</template>
