const getAssetsURL = (image) => {
    // 注意此时路径已经改变，只需要向上返回一层即可
    return new URL(`../assets/img/tabbar/${image}`, import.meta.url).href
}
export default getAssetsURL

