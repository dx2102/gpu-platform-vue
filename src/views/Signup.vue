
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
      <button class="grow bg-primary text-white p-2 rounded mb-2" @click="signup">
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
const model = reactive({
  username: 'nyush',
  password: 'nyush',
  reenteredPassword: 'nyush'
})
const rules = {}

function signup() {
  console.log(model)
}


</script>