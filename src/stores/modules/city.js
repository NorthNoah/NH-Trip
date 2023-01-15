
import { defineStore } from "pinia";
import getCityAll from "@/service/modules/city";
const useCityStore = defineStore("city", {
    state: () => ({
        allCities: [],
        // 注意是对象形式
        curCity: {
            cityName: "广州"
        }
        
    }),
    actions: {
        async fetchAllCitys() {
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})
export default useCityStore