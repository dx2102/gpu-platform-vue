<template>
  <div>
    <h1 class="title">Locations</h1>
    <div class="select-menu">
      <div
        class="select-button"
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'selected': isSelected(option) }"
        @click="toggleSelection(option)"
      >
        {{ option }}
      </div>
    </div>

    <NDataTable
      v-if="filteredData.length > 0"
      :columns="columns"
      :data="filteredData"
      scroll-x=1000
      :scrollbar-props="{ trigger: 'none' }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['Beijing', 'Shanghai', 'New York', 'Singapore'],
      selectedLocations: ['Beijing', 'Shanghai', 'New York', 'Singapore'], // All locations selected by default
      columns: ["Location", "Size", "Time Left", "Operations"].map(i => ({ title: i, key: i })),
      data: [
        {
          "Location": "Beijing",
          "Size": "100GB",
          "Time Left": "100 Days",
          "Operations": "Mount"
        },
        {
          "Location": "New York",
          "Size": "100GB",
          "Time Left": "100 Days",
          "Operations": "Mount"
        }
      ],
      filteredData: [] // Initialize filteredData
    };
  },
  watch: {
    selectedLocations: {
      handler() {
        this.filterData();
      },
      deep: true
    }
  },
  mounted() {
    this.filterData();
  },
  methods: {
    isSelected(option) {
      return this.selectedLocations.includes(option);
    },
    toggleSelection(option) {
      if (this.isSelected(option)) {
        this.selectedLocations = this.selectedLocations.filter(loc => loc !== option);
      } else {
        this.selectedLocations.push(option);
      }
    },
    filterData() {
      this.filteredData = this.data.filter(item => this.selectedLocations.includes(item.Location));
    }
  }
};
</script>

<style>
.select-menu {
  display: flex;
  flex-wrap: wrap;
}

.select-button {
  width: 80px; /* Adjust the width as needed */
  height: 50px; /* Adjust the height as needed */
  background-color: transparent; /* Set the background color to transparent */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #767676; /* Set the border color */
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
}

.select-button.selected {
  background-color: #4caf50;
  border-color: #4caf50;
  color: #ffffff;
}

.select-button:hover {
  background-color: #f0f4f8; /* Change background color on hover */
}

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
