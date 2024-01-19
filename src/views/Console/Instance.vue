<template>
  <div class="p-4 flex flex-col gap-2 w-full">
    <div class="flex gap-2">
      <NButton type="primary">
        <RouterLink to="/market">Apply for new instances</RouterLink>
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
      scroll-x=1000
      :scrollbar-props="{ trigger: 'none' }"
    />
  </div>
</template>

<script setup>

let columns = ['Instance ID/Name', 'State', 'Spec', 'Local Drive', 'Release time', 'SSH command', 'Operations']
columns = columns.map(i => ({ title: i, key: i }))
const data = [
  {
    'Instance ID/Name': 'i-1234567890abcdef0',
    'State': 'Running',
    'Spec': '1*RTX 3090',
    // Details
    'Local Drive': '256GB',
    'Release time': '2021-10-01 12:00:00',
    // ssh -p 25694 root@connect.westa.seetacloud.com
    // nn3AlrgbhXyo
    // Tools: Jupyter Lab
    'SSH command': 'ssh -p 25694 root@connect.westa.seetacloud.com',
    'Operations': 'Stop'
  }
]

</script>