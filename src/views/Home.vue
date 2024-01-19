
<script setup>
import { http } from "@/utils/http";
let backendLocation = ref(localStorage.getItem("backendLocation"));
watch(backendLocation, (newVal) => {
  http.defaults.baseURL = newVal;
  localStorage.setItem("backendLocation", newVal);
});

let logResponse = ref(http.defaults.logResponse);
watch(logResponse, (newVal) => {
  // change http.config.logResponse
  http.defaults.logResponse = newVal;
});

</script>







<template>
  <main class="text-xl p-3 mt-16 flex flex-col items-center gap-2">
    <div class="w-full max-w-3xl flex flex-col gap-1">
      <p class="text-2xl my-1">
        This is a simple container management platform. <br>
      </p>
      <p>You can login as admin. </p>
      <!-- <p>Alternatively, you can signup, and get approval from admin to become a member.</p> -->

      <div class="mt-8"></div>
      <p>Configure backend url here (CORS BaseURL):</p>
      <div class="flex gap-2">
        <n-input size="large" v-model:value="backendLocation" />
        <n-button @click="backendLocation = 'http://150.109.4.158:80'" type="primary" strong secondary
          size="large">Reset</n-button>
      </div>
      <n-button @click="http.get('/ping')" type="primary" size="large">Ping server ({{ backendLocation }}/ping)</n-button>
      <n-button @click="http.get('/whoami')" type="primary" size="large">Whoami (Checks whether you have logged in.)</n-button>
      <div class="flex gap-2 items-center">
        Display successful API calls:
        <n-switch size="large" v-model:value="logResponse" />
      </div>
    </div>
  </main>
</template>



