<script setup>
    import { ref } from "vue";
    import { computed } from "vue";
    import { storeToRefs } from "pinia";
    import { useRouter } from "vue-router";
    import useCityStore from "@/stores/modules/city";
    import cityGroup from "./cpns/city-group.vue";
    const cityValue = ref("")
    const tabActive = ref()
    const router = useRouter()
    const cancelClick = () => {
        router.back()
    }

    // 网络请求在组件中，尽量再抽取一次
    // const allCity = ref()
    // getCityAll().then(res => {
    //     console.log(res.data)
    //     allCity.value = res.data
    // })
    
    // 使用city的状态管理store
    const cityStore = useCityStore()
    // 调用actions中的函数
    cityStore.fetchAllCitys()
    // 防止解构后失去响应式
    const { allCities } = storeToRefs(cityStore)
    const curGroup = computed(() => allCities.value[tabActive.value])
    
</script>


<template>
    <div class="city topPage">
        <van-search 
            v-model="cityValue" 
            shape="round"
            show-action
            placeholder="城市/区域/地点" 
            @cancel="cancelClick"
        />

        <van-tabs v-model:active="tabActive" color="var(--primary-color)">
            <template v-for="(item, key, index) in allCities" :key="index">
                <van-tab :title="item.title" :name="key"></van-tab>
            </template>
        </van-tabs>

        <div class="content">
            <!-- <city-group :groupData="curGroup"></city-group> -->
            <template v-for="(item, key, index) in allCities" :key="index">
                <city-group v-show="tabActive === key" :groupData="curGroup"></city-group>
            </template>
        </div>
    </div>
</template>

<style lang="less" scoped>

    
</style>
