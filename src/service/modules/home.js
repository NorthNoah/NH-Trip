import yxRequest from "@/service/request/index";
export const getSuggestCityAll = () => {
    // 返回了一个promise
    return yxRequest.get({
        // 只需要写BASE_URL之后的路径即可
        url: "/home/hotSuggests"
    })
}


export const getCategories = () => {
    // 返回了一个promise
    return yxRequest.get({
        // 只需要写BASE_URL之后的路径即可
        url: "/home/categories"
    })
}

export const getHouselist = curPage => {
    // 返回了一个promise
    return yxRequest.get({
        // 只需要写BASE_URL之后的路径即可
        url: "/home/houselist",
        // 注意此处需要传入page参数
        params: {
            page: curPage
        }
    })
}


