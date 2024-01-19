<template>
  <div class="p-4 flex flex-col gap-2 w-full">
    <div class="flex gap-2">
      <NButton type="primary">
        <RouterLink to="/create">Apply for new instances</RouterLink>
      </NButton>
      <NButton type="primary" class="ml-4">
        Refresh
      </NButton>
    </div>

    Version 1:
    <n-table>
      <thead>
        <tr>
          <th>Instance ID/Name</th>
          <th>State</th>
          <th>Spec</th>
          <th>Local Drive</th>
          <th>Release time</th>
          <th>SSH command</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        ...
      </tbody>
    </n-table>

    Version 2:
    <NDataTable
      :columns="columns"
      :data="data"
      scroll-x=2000
      :scrollbar-props="{ trigger: 'none' }"
    />
  </div>
</template>

<script setup>
import { http } from '@/utils/http';
import { onMounted } from 'vue';
import { NButton } from 'naive-ui';

// let columns = ['Instance ID/Name', 'State', 'Spec', 'Local Drive', 'Release time', 'SSH command', 'Operations']
// columns = columns.map(i => ({ title: i, key: i }))
// const data = [
//   {
//     'Instance ID/Name': 'i-1234567890abcdef0',
//     'State': 'Running',
//     'Spec': '1*RTX 3090',
//     // Details
//     'Local Drive': '256GB',
//     'Release time': '2021-10-01 12:00:00',
//     // ssh -p 25694 root@connect.westa.seetacloud.com
//     // nn3AlrgbhXyo
//     // Tools: Jupyter Lab
//     'SSH command': 'ssh -p 25694 root@connect.westa.seetacloud.com',
//     'Operations': 'Stop'
//   }
// ]

let columns = ref([])
let data = ref([])
console.log(h)

async function fetchContainers() {
  const res = await http.get('/containers')
  data.value = res.data
  columns.value = Object.keys(res.data[0]).map(i => ({ title: i, key: i }))
  // add a new column for actions: delete
  columns.value.push({ 
    title: 'Actions', 
    key: 'actions',
    fixed: 'right',
    render(row) {
      return h('div', [
        h(NButton, { type: 'error', onClick: () => deleteContainer(row.short_id) }, 'Delete')
      ])
    }
  })
}

onMounted(() => {
  fetchContainers()
})

function deleteContainer(id) {
  message.info(id)
  http.delete(`/containers/${id}`)
  fetchContainers()
}

</script>