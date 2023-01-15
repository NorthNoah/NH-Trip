import { defineStore } from "pinia";

const nowDate = new Date()
const newDate = nowDate.setDate(nowDate.getDate() + 1)
const useMainStore = defineStore("main", {
    
    state: () => ({
        token: "",
        startDate: nowDate,
        endDate: newDate,
        isLoading: true
    }),
    actions: {
        async fetchMainData() {
        }
    }
})
export default useMainStore