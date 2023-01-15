<template>
    <div class="swipe">
        <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
            <template v-for="(item, index) in swipeData" :key="index">
                <van-swipe-item>
                    <img :src="item.url" alt="">
                    <!-- <h2>{{ item.url }}</h2> -->
                </van-swipe-item>
            </template>

            <template #indicator="{ active, total }">
                <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}-{{ swipeData.length }}</div> -->
                <div class="indicator">
                    <template v-for="(value, key, index) in swipeGroup" :key="key">
                        <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key  }">
                            <span class="text">
                                {{ getName(value[0].title) }}
                            </span>
                            <span class="count" v-if="swipeData[active]?.enumPictureCategory == key"> 
                                {{ getIndex(swipeData[active]) }}/{{ value.length }}
                            </span>
                        </span>
                    </template>
                </div>

                <div class=""></div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>
    const props = defineProps({
        swipeData: {
            type: Array,
            default: () => []
        }
    })

    // 转换数据
    const swipeGroup = {}

    for (const item of props.swipeData) {
    let valueArray = swipeGroup[item.enumPictureCategory]
    if (!valueArray) {
        valueArray = []
        swipeGroup[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
    }


    // 转换数据的格式
    const nameReg = /【(.*?)】/i
    const getName = name => {
        const results= nameReg.exec(name)
        return results[1]
    }

    // 找当前图片在组内的索引
    const getIndex = item => {
        const valueArray = swipeGroup[item.enumPictureCategory]
        return valueArray.findIndex(data => data === item) + 1
    }



</script>

<style lang="less" scoped>
    .swipe-list {
        img {
            width: 100%;
        }

        .indicator {
            display: flex;
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            color: white;
            background: rgba(0, 0, 0, 0.8);
            .item {
                margin-left: 5px;
                &.active {
                    padding: 0 3px;
                    border-radius: 5px;
                    background-color: #fff;
                    color: #333;
                }
            }
        }
    }
</style>