import Axios, { AxiosError } from 'axios'
const axios = Axios.create({
  baseURL: 'server url here',
})

axios.interceptors.request.use(
  config => {
    // const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || '') : ''
    // if (token) {
    //   config.headers['Authorization'] = token ? `Bearer ${token}` : ''
    // }
    config.headers['Content-Type'] = 'application/json'

    return config
  },
  error => {
    Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // const status = error.response?.status || 200
    // errorToast(error.response?.data?.error?.message || 'Something went wrong')
    // if (status === 401) {
    //   localStorage.removeItem('token')
    //   window.location.href = '/login'
    // }
    return Promise.reject(error)
  }
)

export { axios, AxiosError }
