
<template>
  <div class="flex items-center justify-center grow bg-gray-100 text-lg">
    <div class="bg-white p-8 rounded-lg shadow w-full max-w-md flex flex-col">
      <h2 class="text-2xl mb-3">Login</h2>
      <n-form size="large" :model="model">
        <n-form-item label="Username">
          <n-input v-model:value="model.username" />
        </n-form-item>
        <n-form-item label="Password">
          <n-input v-model:value="model.password" type="password" />
        </n-form-item>
      </n-form>
      <n-button type="primary" @click="handle">
        Login
      </n-button>
      <div class="text-center text-base mt-3">
        Don't have an account?
        <RouterLink to="/signup" class="text-primary">Signup</RouterLink>
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
})

function handle() {
  http.post('/login', model).then(res => {
    console.log(model.username, res.data.token)
    http.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
    localStorage.setItem('token', res.data.token)
    router.push('/create')
  })
}


</script>