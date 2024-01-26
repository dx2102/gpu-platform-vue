<template>
  <div>
    <div class="flex items-end gap-2">
      <div class="title">Balance:  </div>
      <span class="text-2xl">100.0</span>
    </div>
    <NDataTable
      :columns="columns"
      :data="data"
      scroll-x=1000
      :scrollbar-props="{ trigger: 'none' }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: ["Title", "Time", "Amount", "Operations"].map(i => ({ title: i, key: i })),
      data: [
        {
          "Title": "Server Purchase",
          "Time": "2024-01-10",
          "Amount": "45",
          "Operations": "View Detail"
        },
        {
          "Title": "Storage Purchase",
          "Time": "2024-01-01",
          "Amount": "100",
          "Operations": "View Detail"
        }
      ],
    };
  }
};
</script>

<style>
.title {
  font-size: 24px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
