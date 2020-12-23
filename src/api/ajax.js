import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置通用的基础路径和请求超时,service是一个能发任意ajax请求的函数, 可以作为对象使用
const service=axios.create({
    baseURL:'http://39.99.186.36',
    timeout:2000,
})

// 添加请求拦截器
service.interceptors.request.use((config)=>{
    // 显示请求进度条,必须在请求拦截器中
    Nprogress.start()
    
    // 必须返回config,返回config,才会发生接下来的xhr对象发ajax请求
    return config
},()=>{})
// 添加响应拦截器
service.interceptors.response.use(
    response=>{// 请求成功返回的函数
        Nprogress.done()   //隐藏请求进度条

        return response.data

    },
    error=>{// 请求失败返回的函数
        Nprogress.done()   //隐藏请求进度条
        
        // 统一处理请求错误,具体请求也可以选择处理或不处理
        alert(error.message || '未知的错误')

        // throw error
        return Promise.reject(error)
    }
)

// service.get('./xxx').then(result=>{
//     // const result=response.data
// }).catch(error=>{

// })

export default service