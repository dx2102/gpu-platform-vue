


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
  <div class="flex flex-col gap-4 p-4 h-full bg-gray-50">
    <n-card title="Help" :segmented="true">
    </n-card>

  </div>
</template>

<style scoped>
label {
  color: gray;
}
</style>
