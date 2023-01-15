import yxRequest from "@/service/request/index";
const getCityAll = () => {
    // 返回了一个promise
    return yxRequest.get({
        // 只需要写BASE_URL之后的路径即可
        url: "/city/all"
    })
}
export default getCityAll
