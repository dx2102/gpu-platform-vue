
<template>
  <div class="flex items-center justify-center grow bg-gray-100 text-lg">
    <div class="bg-white p-8 rounded-lg shadow w-full max-w-md flex flex-col">
      <h2 class="text-2xl mb-3">Login</h2>
      <n-form size="large" :model="model" :rules="rules">
        <n-form-item label="Username">
          <n-input v-model:value="model.username" />
        </n-form-item>
        <n-form-item label="Password">
          <n-input v-model:value="model.password" type="password" />
        </n-form-item>
      </n-form>
      <button class="grow bg-primary text-white p-2 rounded mb-2" @click="login">
        Login
      </button>
      <div class="text-center text-base">
        Don't have an account?
        <RouterLink to="/signup" class="text-primary">Signup</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const model = reactive({
  username: 'nyush',
  password: 'nyush',
})
const rules = {}

function login() {
  console.log(model)
}


</script>