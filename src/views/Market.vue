<template>
  <div class="flex flex-col gap-4 p-4 h-full bg-gray-50">
    <n-card title="Search GPUs" :segmented="true">
      <n-form label-placement="left" label-width="10rem">
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
      </n-form>
    </n-card>

    <n-card content-class="w-full flex gap-2 items-center justify-between">
      <n-descriptions title="RTX 4090" :column=2 label-placement="left" label-class="text-gray-500" content-class="pr-8">
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
      <n-button type="primary">Rent</n-button>
    </n-card>
  </div>
</template>

<style scoped>
label {
  color: gray;
}
</style>

<script setup>
import _ from 'lodash';
import { watch } from 'vue';
import { reactive } from 'vue';

const gpu_model_options = ["RTX 4090", "RTX 4080"]
const gpu_count_options = _.range(12)
const gpu = reactive({
  model: gpu_model_options,
  count: 0,
})

function handle() {
  console.log(gpu)
}
watch(gpu, handle, { deep: true })

</script>