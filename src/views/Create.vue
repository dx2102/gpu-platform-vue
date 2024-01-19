


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
    <n-card title="Search GPUs" :segmented="true">
      <!-- <n-form label-placement="left" label-width="10rem">
        <n-form-item label="GPU Model">
          <n-checkbox-group v-model:value="gpu.model">
            <n-space item-style="display: flex;">
              <n-checkbox v-for="model in gpu_model_options" :key="model" :value="model">
                {{ model }}
              </n-checkbox>
            </n-space>
          </n-checkbox-group>
        </n-form-item>
        <n-form-item label="GPU Number">
          <n-radio-group v-model:value="gpu.count" name="gpu_count">
            <n-radio-button v-for="i in gpu_count_options" :key="i" :value="i" :label="i.toString()" />
          </n-radio-group>
        </n-form-item>
      </n-form> -->
    </n-card>

    <n-card content-class="w-full flex gap-2 items-center justify-between">
      <!-- <n-descriptions title="RTX 4090" :column=2 label-placement="left" label-class="text-gray-500" content-class="pr-8">
        <n-descriptions-item label="GPU Number">
          1/10
        </n-descriptions-item>
        <n-descriptions-item label="Video Memory">
          24GB
        </n-descriptions-item>
        <n-descriptions-item label="CPU">
          12 Core/GPU，Xeon(R) Platinum 8255C
        </n-descriptions-item>
        <n-descriptions-item label="Memory">
          43GB/GPU
        </n-descriptions-item>
        <n-descriptions-item label="System Drive">
          30GB
        </n-descriptions-item>
        <n-descriptions-item label="Data Drive">
          Basic 50GB, Max 410GB
        </n-descriptions-item>

        <n-descriptions-item label="Highest Supported CUDA version">
          11.7
        </n-descriptions-item>
      </n-descriptions>
      <n-button type="primary">Rent</n-button> -->
    </n-card>

    <n-card v-for="resource in resources" 
      content-class="w-full flex gap-2 items-center justify-between"
    >
      <n-descriptions :column=2 label-placement="left" label-class="text-gray-500" content-class="pr-8">
        <n-descriptions-item v-for="key in Object.keys(resource)" :key="key" :label="key">
          {{ resource[key] }} 
        </n-descriptions-item>
      </n-descriptions>
      <n-button type="primary" @click="handle">Rent</n-button>
    </n-card>


  </div>
</template>

<style scoped>
label {
  color: gray;
}
</style>
