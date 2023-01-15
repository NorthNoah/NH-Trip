<template>
    <div class="tab-bar">
        <!-- 已经进行了v-model的绑定 -->
        <van-tabbar v-model="curIndex" active-color="#ff9854">
            <template v-for="(item, index) in TabbarData" :key="index">
                <van-tabbar-item
                    class="tab-item"
                    :to="item.path"
                >   
                    <!-- 内容插槽 -->
                    <span class="text">{{ item.text }}</span>
    
                    <!-- 具名插槽 -->
                    <template #icon>
                        <img v-if="curIndex !== index" :src="getAssetsURL(item.image)" alt="">
                        <img v-else :src="getAssetsURL(item.imgActive)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>
    import TabbarData from "@/assets/data/tabbar";
    import getAssetsURL from "@/utils/load_assets";
    import { ref } from "vue";
    const curIndex = ref(0)
</script>

<style lang="less" scoped>
.tab-bar {
    img {
        height: 30px;
    }

}
</style>
