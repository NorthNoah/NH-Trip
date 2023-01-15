<template>
    <div class="categories">
        <template v-for="(item, index) in categories" :key="index">
            <div class="item">
                <div class="pictures">
                    <img :src="item.pictureUrl" alt="">
                </div>
                <div class="text">{{ item.title }}</div>
            </div>  
        </template>
    </div>
</template>

<script setup>
    import useHomeStore from '@/stores/modules/home';
    import { storeToRefs } from 'pinia';
    const homeStore = useHomeStore()
    const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
    .categories {
        display: flex;
        overflow-x: auto;
        height: 80px;
        margin: 0 10px;
        &::-webkit-scrollbar {
            display: none;
        }
        .item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            width: 70px;
            margin-top: 8px;
            img {
                width: 32px;
                height: 32px;
            }
        } 
    }
</style>
