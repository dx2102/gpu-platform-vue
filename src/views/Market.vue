<template>
  <div class="flex flex-col gap-4 p-4" @click="console.log(gpu_model, gpu_count)">
    <n-card title="Search GPUs" :segmented="true">
      <n-form label-placement="left" label-width="10rem">
        <n-form-item label="GPU Model">
          <n-checkbox-group v-model:value="gpu_model">
            <n-space item-style="display: flex;">
              <n-checkbox v-for="model in all_gpu_models" :key="model" :value="model">
                {{ model }}
              </n-checkbox>
            </n-space>
          </n-checkbox-group>
        </n-form-item>
        <n-form-item label="GPU Number">
          <n-button-group>
            <n-button type="default" v-for="i in _.range(12)" :key="i" @click="gpu_count=i">
              {{ i }}
            </n-button>
          </n-button-group>
        </n-form-item>
      </n-form>
    </n-card>

    <n-card title="RTX 4090" :segmented="true">

    </n-card>
  </div>
</template>

<script setup>
import _ from 'lodash';

const all_gpu_models = ["RTX 4090", "RTX 4080"]
let gpu_model = ref([])
let gpu_count = 0

</script>