

// if 403, jump to login page and create a notification

import axios from 'axios'
import router from '@/router'
import { defineStore } from 'pinia'

let sotreageDeafults = {
  backendLocation: 'http://150.109.4.158:80',
  token: '',
}

export const http = axios.create({
  baseURL: localStorage.getItem('backendLocation'),
  timeout: 1000,
  logResponse: true, // custom config attribute
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
});

window.http = http

http.interceptors.request.use(config => {
  config.metadata = { startTime: new Date() };
  return config;
}, error => {
  return Promise.reject(error);
});

http.interceptors.response.use(response => {
  if (response.config.logResponse) {
    // (34 ms) { ... }
    const rtt = new Date() - response.config.metadata.startTime;
    message.success(`(${rtt} ms) ${JSON.stringify(response.data)}`)
  }
  return response;
}, error => {
  // errors are logged regardless of config
  const rtt = new Date() - error.config.metadata.startTime;
  if (!error.response) {
    message.error(`(${rtt} ms) ${error.message}`)
    return Promise.reject(error);
  }
  if (error.response.status === 403) {
    router.push('/login')
    message.error('Please login first')
    return Promise.reject(error);
  }
  message.error(`(${rtt} ms) ${JSON.stringify(error.response.data)}`)
  return Promise.reject(error);
});



















