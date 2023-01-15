<template>
    <div class="search topPage">
        <h2>开始时间：{{ $route.query.startDate }}</h2>
        <h2>结束时间：{{ $route.query.endDate }}</h2>
        <!-- <h2>当前城市：{{ cityStore.curCity.cityName }}</h2> -->
        <h2>当前城市：{{ $route.query.curCity }}</h2>
    </div>
</template>

<script setup>
    import useCityStore from '@/stores/modules/city';
    const cityStore = useCityStore()

    

</script>

<style lang="less" scoped>
</style>
