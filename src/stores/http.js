import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  // users can change backend baseURL in a text field
  const baseUrl = ref('localhost:3000')

})
