<template>
    <div class="search-bar">
        <div class="select-time">
            <div class="item">
                <div class="tip">住</div>
                <div class="date">{{ startDateStr }}</div>
            </div>

            <div class="item">
                <div class="tip">离</div>
                <div class="date">{{ endDateStr }}</div>
            </div>
        </div>

        <div class="content">
            <div class="keyword">关键词/位置/民宿</div>
        </div>

        <div class="right">
            <i class="icon"></i>
        </div>
    </div>
</template>

<script setup>  
//     defineProps({
//         startDate: {
//             type: String,
//             default: () => "11.25"
//         },
//         endDate: {
//             type: Object,
//             default: () => "11.26"
//         },
//     })'
    import { ref } from "vue";
    import useMainStore from "@/stores/modules/main";
    import { formatMonthDotDay } from "@/utils/date-format";
    import { storeToRefs } from "pinia";
    const mainStore = useMainStore()
    const { startDate, endDate } = storeToRefs(mainStore)
    const startDateStr = ref(formatMonthDotDay(startDate.value))
    const endDateStr = ref(formatMonthDotDay(endDate.value))
</script>

<style lang="less" scoped>
    .search-bar {
        display: flex;
        align-items: center;

        height: 45px;
        line-height: 20px;

        padding: 0 10px;
        font-size: 14px;
        color: #999;

        border-radius: 6px;
        background-color: #f2f4f6;
        .select-time {
            .item {
                display: flex;
                font-size: 10px;
                .date {
                    color: #333;
                    margin: 0 10px 0 3px;
                    font-weight: 500;
                }
            }
        }
        .content {
            //子元素图标需要绝对定位在最右侧，因此父元素需要相对定位
            flex: 1;
            padding: 0 6px;
            border-left: 1px solid #fff;

            .keyword {
                font-size: 12px;
            }
        }

        .right {
            display: flex;
            align-items: center;
            .icon {
                width: 24px;
                height: 24px;
                display: inline-block;
                
                background-image: url(@/assets/img/home/home-sprite.png);
                background-position: -29px -151px;
                background-size: 207px 192px;
            }
        }
    }
</style>
