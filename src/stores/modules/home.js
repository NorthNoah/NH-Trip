
import { defineStore } from "pinia";
import { getSuggestCityAll, getCategories, getHouselist } from "@/service/modules/home";
const useHomeStore = defineStore("home", {
    state: () => ({
        suggestCities: [],
        categories: [],
        houselist: [],
        curPage: 1
        // 注意是对象形式
    }),
    actions: {
        async fetchSuggestData() {
            const res = await getSuggestCityAll()
            this.suggestCities = res.data
        },
        
        async fetchCategoriesData() {
            const res = await getCategories()
            this.categories = res.data
        },

        async fetchHouselistData() {
            const res = await getHouselist(this.curPage)
            // this.houselist = res.data
            // 展开每次获取的数组中中的元素，追加到houselist中
            this.houselist.push(...res.data)
            this.curPage++
        }
    }
})
export default useHomeStore