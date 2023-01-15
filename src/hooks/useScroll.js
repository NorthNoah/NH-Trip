import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore";
export default function useScroll(elRef) {
    //默认为window
    let el = window
    const isReachBottom = ref(false)
    const clientHeight = ref(0)
    const scrollHeight = ref(0)
    const scrollTop = ref(0)
    //使用节流函数，进行包裹，在给定的时间段内只能触发一次
    const scrollListenerHandler = throttle(() => {
        if (el === window) {
            // 此时el为整个window
            // 客户端页面高度
            clientHeight.value = document.documentElement.clientHeight
            // 已经卷上去的高度
            scrollTop.value = document.documentElement.scrollTop
            // 总高度
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            // 此时el不为整个window，为元素
            clientHeight.value = el.clientHeight
            // 已经卷上去的高度
            scrollTop.value = el.scrollTop
            // 总高度
            scrollHeight.value = el.scrollHeight
        }
        
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            // console.log("滚动到底部")
            // console.log(clientHeight, scrollHeight, scrollTop)
            isReachBottom.value = true
        }
    }, 100)
    
    // 挂载阶段：绑定监听器
    onMounted(() => {
        // 判断是否为窗口window
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener("scroll", scrollListenerHandler)
    })
    // 卸载阶段：卸载监听器
    onUnmounted(() => {
        el.removeEventListener("scroll", scrollListenerHandler)
    })

    // 此处要加{}才能返回ref对象
    return { isReachBottom, clientHeight, scrollHeight, scrollTop }
}



