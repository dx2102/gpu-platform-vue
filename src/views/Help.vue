<script setup>
import router from '@/router';
import { http } from '@/utils/http'



</script>


<template>
  <main class="container mx-auto py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-semibold mb-6">Help Center</h1>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Frontend Help</h2>
        <p class="text-lg mb-2">For assistance with the frontend, please refer to the <a href="https://github.com/dx2102/gpu-platform-vue" class="text-blue-500 underline">gpu-platform-vue</a> repository.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Backend Help</h2>
        <p class="text-lg mb-2">For assistance with the backend, please refer to the <a href="https://github.com/dx2102/gpu-platform-py" class="text-blue-500 underline">gpu-platform-py</a> repository.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  padding-left: 1rem;
  padding-right: 1rem;
}

h1 {
  color: #333;
}

h2 {
  color: #444;
}

p {
  color: #666;
}

a {
  color: #1a8cd8;
  transition: color 0.3s ease;
}

a:hover {
  color: #0e5a8a;
}
</style>