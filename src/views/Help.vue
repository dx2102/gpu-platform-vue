


<script setup>
import router from '@/router';
import { http } from '@/utils/http'

let resources = ref([])

onMounted(async () => {
  http.get('/resources').then((res) => {
    resources.value = [res.data]
    window.data = res.data
  })
})

function handle() {
  http.post('/containers').then((res) => {
    // jump to container page
    router.push('/console/instance')
  })
}

</script>


<template>
  <main class="text-xl p-3 mt-16 flex flex-col items-center gap-2">
    <div class="w-full max-w-3xl flex flex-col gap-1">
      Help
      <p class="text-2xl my-1">
          For help please go to https://github.com/dx2102/gpu-platform-vue <br>
      </p>
    </div>
  </main>
</template>

<style scoped>
label {
  color: gray;
}
</style>
