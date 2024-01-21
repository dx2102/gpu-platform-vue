

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
});

http.defaults.headers.common['Authorization'] = localStorage.getItem('token')
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
    console.log(response.config.headers.Authorization)
    const rtt = new Date() - response.config.metadata.startTime;
    message.success(
      `(${rtt} ms) ${JSON.stringify(response.data)}`,
      {
        closable: true,
      }
    )
  }
  return response;
}, error => {
  // errors are logged regardless of config
  console.log(error)
  const rtt = new Date() - error.config.metadata.startTime
  if (!error.response) {
    message.error(`(${rtt} ms) ${error.message}`)
  } else if (error.response.status === 401) {
    router.push('/login')
    message.error('401. Validation failed. Please login first. ')
  } else if (error.response.status === 403) {
    message.error('403. You have logged in, but your account is not allowed to access this resource.')
  } else if (error.response.data.detail) {
    // if response is like { detail: "..." }
    message.error(`(${rtt} ms) ${error.response.data.detail}`)
  } else {
    message.error(`(${rtt} ms) ${JSON.stringify(error.response.data)}`)
  }
  return Promise.reject(error);
});



















