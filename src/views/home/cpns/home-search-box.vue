<template>
    <div class="home-search-box">
        <!-- 位置信息 -->
        <div class="location">
            <div class="city" @click="chooseCity">{{ curCity.cityName }}</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>

        <!-- 日期范围 -->
        <div class="date-range section" @click="showCalender = true">
            <div class="start">
                <div class="date">
                    <div class="tip">入住</div>
                    <div class="time">{{ startDateStr }}</div>
                </div>
               
            </div>

            <div class="stay">共{{ diffDays }}晚</div>

            <div class="end">
                <div class="date">
                    <div class="tip">离店</div>
                    <div class="time">{{ endDateStr }}</div>
                </div>
            </div>
        </div>

        <div class="calender">
            <van-calendar 
            v-model:show="showCalender" 
            color=var(--primary-color)
            type="range"
            @confirm="onConfirm"/>
        </div>

        <!-- 价格和人数选择 -->
        <div class="condition section bottom-gray-line">
            <div class="price">价格不限</div>
            <div class="people">人数不限</div>
        </div>

        <!-- 关键字 -->
        <div class="keyword section bottom-gray-line">关键字/位置/民宿名</div>


        <!-- 热门建议 -->
        <div class="section hot-suggest">
            <template v-for="(item, index) in suggestCities" :key="index">
                <div 
                    class="item"
                >
                    {{ item.tagText.text }}
                </div>
             </template>           
        </div>

        <!-- 搜索-->
        <div class="section search-btn">
            <button class="btn" @click="buttonClick">开始搜索</button>
        </div>
    </div>



</template>

<script setup>
    import { ref, computed } from "vue";
    import { storeToRefs } from "pinia";
    import { useRouter } from "vue-router";
    import useCityStore from "@/stores/modules/city";
    import useHomeStore from "@/stores/modules/home";
    import { formatMonthDay, getDaysDiff } from "@/utils/date-format";
    import useMainStore from "@/stores/modules/main";
    const positionClick = () => {
        navigator.geolocation.getCurrentPosition((res) => {
            console.log("已经获取成功", res)
        },(err) => {
            console.log("位置获取失败", err)
        })
    }
    
    const router = useRouter()
    const chooseCity = () => {
        router.push("/city")
    }

    // 解构获取curCity
    const cityStore = useCityStore()
    const { curCity } = storeToRefs(cityStore)

    
    // 日历
    const showCalender = ref(false)

    // 从mainStore中取出时间
    const mainStore = useMainStore()
    const { startDate, endDate } = storeToRefs(mainStore)

    // 格式化，注意此时使用计算属性来包裹
    // const startDateStr = ref(formatMonthDay(nowDate))
    // const endDateStr = ref(formatMonthDay(newDate))
    const startDateStr = computed(() => formatMonthDay(startDate.value))
    const endDateStr = computed(() => formatMonthDay(endDate.value))

    // 时间差
    const diffDays = ref(getDaysDiff(startDate.value, endDate.value))

    const onConfirm = (values) => {
        const [start, end] = values
        // 此处要将结果更新到store中的state里
        // 此处无需格式化，computed会自动进行格式化计算操作
        mainStore.startDate = start
        mainStore.endDate = end
        diffDays.value = getDaysDiff(start, end)
        console.log(start, end)
        showCalender.value = false 
    }

    // 获取推荐城市数据
     // 定义父组件传来的参数
    // defineProps({
    //     suggestData: {
    //         type: Array,
    //         default: () => []
    //     }
    // })
    const homeStore = useHomeStore()
    const { suggestCities } =  storeToRefs(homeStore)

    // button搜索
    const buttonClick = () => {
        router.push({
            path: "/search",
            // 传递参数到$route中
            query: {
                startDate: startDate.value,
                endDate: endDate.value,
                curCity: curCity.value.cityName
            }
        })
    }
</script>

<style lang="less" scoped>
    .location {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;

        .city {
            //自动占据多余空间
            flex: 1;
            color: #333;
            font-size: 15px;
        }

        .position  {
            width: 74px;
            //竖直方向对齐
            display: flex;
            align-items: center;

            .text {
                position: relative;
                top: 2px;
                font-size: 12px;
                color: #666;
            }

            img {
                margin-left: 5px;
                width: 18px;
                height: 18px;
            }
        }
    }

    .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        color: #999;
        height: 44px;
        .tip {
            color: #999;
            font-size: 12px;
        }
        .date {
            color: #333;

            .time {
                margin-top: 10px;
            }
        }
        .price {
            font-size: 12px;
        }

        .people {
            font-size: 12px;
        }
       
    }
    .hot-suggest {
        margin: 10px 0;
        justify-content: left;
        height: auto;
        .item {
            padding: 3px 8px;
            margin: 4px;
            background-color: #F1F3F5;
            border-radius: 14px;
            font-size: 12px;
            color: #3F4954;
            line-height: 1;
        }
    }
    .search-btn {
        .btn {
            width: 342px;
            height: 38px;
            max-height: 50px;
            font-weight: 500;
            font-size: 18px;
            //line-height: 38px;
            text-align: center;
            border-radius: 20px;
            border-color: var(--primary-color);
            color: #fff;
            background-image: var(--theme-linear-gradient);
        }
    }
   
    

</style>
