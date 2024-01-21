
<template>
  <div class="flex items-center justify-center grow bg-gray-100 text-lg">
    <div class="bg-white p-8 rounded-lg shadow w-full max-w-md flex flex-col">
      <h2 class="text-2xl mb-3">Signup</h2>
      <n-form size="large" :model="model" :rules="rules">
        <n-form-item label="Username">
          <n-input v-model:value="model.username" />
        </n-form-item>
        <n-form-item label="Password">
          <n-input v-model:value="model.password" type="password" />
        </n-form-item>
        <n-form-item first label="Repeat password">
          <n-input v-model:value="model.reenteredPassword" type="password" />
        </n-form-item>
      </n-form>
      <button class="grow bg-primary text-white p-2 rounded mb-2" @click="handle">
        Signup
      </button>
      <div class="text-center text-base">
        Already have an account?
        <RouterLink to="/login" class="text-primary">Login</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { http } from "@/utils/http";
import { useRouter } from "vue-router";
const router = useRouter()


const model = reactive({
  username: '',
  password: '',
  reenteredPassword: ''
})
const rules = {}

function handle() {
  if (model.password !== model.reenteredPassword) {
    window.message.error('Passwords do not match')
    return
  }
  http.post('/signup', model).then(res => {
    console.log(res.data.token)
    http.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
    localStorage.setItem('token', res.data.token)
    router.push('/create')
  })
}


</script>