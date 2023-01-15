<template>
    <div class="tab-bar">
        <template v-for="(item, index) in TabbarData" :key="index">
            <div 
                class="tab-item"
                :class="{ active: curIndex === index }"
                @click="itemClick(index, item)"
            >
                <img v-if="curIndex !== index" :src="getAssetsURL(item.image)" alt="">
                <img v-else :src="getAssetsURL(item.imgActive)" alt="">

                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
    import TabbarData from "@/assets/data/tabbar";
    // import router from "@/router";
    import getAssetsURL from "@/utils/load_assets";
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    // 选中的图标变为active，注意要用ref包裹
    const curIndex = ref(0)
    const router = useRouter()
    const itemClick = (index, item) => {
        // 注意curIndex是ref对象
        curIndex.value = index
        // 路由跳转
        router.push(item.path)
    }
    


</script>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    .tab-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #aaa;

        img {
            width: 36px;
        }
        .text {
            font-size: 12px;
            margin-top: 2px;
        }

        &.active {
            color: var(--primary-color)
        }

    }
    
}
</style>
