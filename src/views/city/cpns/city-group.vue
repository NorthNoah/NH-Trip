<template>
    <div class="city-group">
         <!-- 注意遍历对象的命名 -->
         <!-- 手动实现索引栏展示内容 -->
         <!-- <template v-for="(group, index) in groupData.cities" :key="index">
            <div class="group-item">
                <h2>标题:{{ group.group }}</h2>
                <div class="list">
                    <template v-for="(city, indey) in group.cities" :key="indey">
                        <div class="city">{{ city.cityName }}</div>
                    </template>

                </div>
            </div>
        </template> -->


        <!-- <div class="popular">
            <div class="index">热门</div>

            <div class="list">
                <template v-for="(item, index) in groupData.hotCities" :key="index">
                    <div class="city">{{ item.cityName }}</div>
                </template>
            </div>
        </div> -->

        <van-index-bar :index-list="indexList">
            <div class="index">
                <van-index-anchor index="热门" />
            </div>

            <div class="list">
                <template v-for="(city, index) in groupData.hotCities" :key="index">
                    <div class="city" @click="cityClick(city)">
                        {{ city.cityName }}
                    </div>
                </template>
            </div>


            <template v-for="(group, index) in groupData.cities" :key="index">
                <van-index-anchor :index="group.group" />
                <template v-for="(city, indey) in group.cities" :key="indey">
                    <van-cell :title="city.cityName" @click="cityClick(city)"/>
                </template>
            </template>
            
        </van-index-bar>
    </div>
</template>

<script setup>
    import useCityStore from '@/stores/modules/city';
    import { storeToRefs } from 'pinia';
    import { computed } from 'vue'
    import { useRouter } from 'vue-router';
    // 此处相当于需要city.vue父组件传来group数据，在city-group中组织content的结构
    const props = defineProps({
        groupData: {
            type: Object,
            default: () => ({})
        }
    })
    // 动态索引
    // 此处不知为何总会报undefined
    const indexList = computed(() => {
        const list = props.groupData.cities?.map(item => item.group)
        list?.unshift("#")
        return list
    })
    // const indexList = computed(() => {
    //     // 将原来数组group的值取出，返回一个新数组
    //     return props.groupData.cities.map(city => {
    //         return city.group
    //     })
    // })
    const cityStore = useCityStore()
    const router = useRouter()
    // 存取数据时，无需解构出curCity，只需要引入cityStore即可
    const cityClick = city => {
        console.log(city)
        cityStore.curCity = city
        router.back()
    }

</script>

<style lang="less" scoped>
    .list {
        display: flex;
        justify-content: space-around;
        padding: 10px;
        padding-right: 25px;
        flex-wrap: wrap;

        .city {
            width: 70px;
            height: 28px;
            border-radius: 14px;
            font-size: 12px;
            color: #000;
            background-color: #fff4ec;
            //display: flex;
            //justify-content: center;
            //align-items: center;
            text-align: center;
            line-height: 28px;
            margin-top: 10px;
        }
    }
</style>

