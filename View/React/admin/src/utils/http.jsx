import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080/api/v1/"

axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
    return config
})

