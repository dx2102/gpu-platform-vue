<template>
  <div class="p-4 flex flex-col gap-2 w-full">
    <div class="flex items-end gap-2">
      <div class="text-xl">Storage usage:  </div>
      <span class="text-2xl">0.0GB</span>
    </div>

    Not implemented
    
    <NDataTable
      :columns="columns"
      :data="data"
      scroll-x=1000
      :scrollbar-props="{ trigger: 'none' }"
    />
  </div>
</template>

<script setup>

let columns = ["Image UUID", "Image Name", "Size", "Status", "Create Time", "Operations"]
columns = columns.map(i => ({ title: i, key: i }))

const data = [
  {
    "Image UUID": "i-1234567890abcdef0",
    "Image Name": "Ubuntu 20.04",
    "Size": "1.2GB",
    "Status": "Ready",
    "Create Time": "2021-10-01 12:00:00",
    "Operations": "Delete"
  }
]
</script>