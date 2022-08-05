import axios from 'axios'
let service = axios.create({
    baseURL: 'https://fanyi-api.baidu.com/',
    timeout: 10000,
})
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service
