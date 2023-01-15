import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore()

class YXRequest {
    constructor(baseURL, timeout) {
        // 此处的this.instance即为axios的实例
        this.instance = axios.create({
            baseURL,
            timeout
        })

        // 给实例添加拦截器
        // 请求拦截器
        this.instance.interceptors.request.use(config => {
            // 开始进行网络请求，显示loading
            mainStore.isLoading = true
            return config
        }, err => {
            // 若网络请求发送失败，则无必要进行显示
            return err
        })


        // 响应拦截器
        this.instance.interceptors.response.use(config => {
            // 返回响应成功，消除loading
            mainStore.isLoading = false
            return config
        }, err => {
            // 若网络响应失败，仍然需要消除loading
            mainStore.isLoading = false
            return err
        })


    }

    request(config) {
        return new Promise((resolve, reject) => {
            // 实例带参请求结果，完成后回调then中的函数resolve
            this.instance.request(config).then(res => {
                // 为了将data传出去
                resolve(res.data)
            }).catch(err => {
                // 处理错误
                reject(err)
            })
        })
    }

    get(config) {
        // 追加method字段
        return this.request({ ...config, methods: "get" })
    }


    post(config) {
        // 追加method字段
        return this.request({ ...config, methods: "post" })
    }
}
// 注意不是return，而是需要export出去类的实例
export default new YXRequest(BASE_URL, TIMEOUT)