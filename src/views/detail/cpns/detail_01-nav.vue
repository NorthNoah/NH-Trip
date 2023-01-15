<template>
    <div class="nav-bar">
        <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const onClickLeft = () => {
        router.back()
    }
</script>

<style lang="less" scoped>
</style>
