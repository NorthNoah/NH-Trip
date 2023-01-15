<template>
    <div class="home" ref="homeRef">
        <home-nav></home-nav>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <home-search-box></home-search-box>
        <home-categories></home-categories>
        <div class="search" v-if="isShowSearchBar">
            <search-bar></search-bar>
        </div>
        <home-content></home-content>
    </div>
    
</template>
<script>
    export default {
        name: "home"
    }
</script>

<script setup>
    import { watch, ref, computed, onActivated } from "vue";
    import HomeNav from "./cpns/home-nav-bar.vue";
    import HomeSearchBox from "./cpns/home-search-box.vue";
    import useHomeStore from "@/stores/modules/home";
    import HomeCategories from "@/views/home/cpns/home-categories.vue";
    import HomeContent from "@/views/home/cpns/home-content.vue";
    import SearchBar from "@/components/search-bar/search-bar.vue";
    import useScroll from "@/hooks/useScroll";
    // 在页面发送请求，不要在组件中发送
    // const suggestCities = ref([])
    // yxRequest.get({
    //     url: "/home/hotSuggests"
    // }).then(res => {
    //     return suggestCities.value = res.data
    // })
    
    // 获取推荐城市数据
    const homeStore = useHomeStore()
    homeStore.fetchSuggestData()
    homeStore.fetchCategoriesData()
    homeStore.fetchHouselistData()


    // 请求分页的房间列表数据
    // let curPage = 1
    // const btnClick = () => {
    //     // curPage++
    //     homeStore.fetchHouselistData()
    // }
    
    // 监听滚动到底部
    // window.addEventListener("scroll", () => {
    //     // 客户端页面高度
    //     const clientHeight = document.documentElement.clientHeight
    //     // 已经卷上去的高度
    //     const scrollTop = document.documentElement.scrollTop
    //     // 总高度
    //     const scrollHeight = document.documentElement.scrollHeight
    
    //     if (clientHeight + scrollTop >= scrollHeight) {
    //         homeStore.fetchHouselistData()
    //     }
    // })

    const homeRef = ref()
    // 监听滚动到底部
    const { isReachBottom, scrollTop } = useScroll(homeRef)
    // watch flag变量的改变，一旦为true则发送新的网络请求；
    // 当网络请求发送成功后，回调函数将flag重置为false
    watch(isReachBottom, (newVal) => {
        if (newVal) {
            isReachBottom.value = false
            homeStore.fetchHouselistData()
        }
    })

    // 监听滚动条的滚动，到达100则flag变量成true
    // watch写法
    // const isShowSearchBar = ref(false)
    // watch(scrollTop, newVal => {
    //     isShowSearchBar.value = newVal > 100
    // })
    // computed写法
    const isShowSearchBar = computed(() => {
        return scrollTop.value >= 350
    })


    //  回到页面时恢复原来位置
    onActivated(() => {
        homeRef.value?.scrollTo({
            top: scrollTop.value
        })
    })

</script>

<style lang="less" scoped>
    .home {
        height: 100vh;
        overflow: auto;
        box-sizing: border-box;
        padding-bottom: 60px;
    }
    .banner {
        img {
            width: 100%;
        }
    }

    .search {
        //固定到最上部
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        height: 45px;
        padding: 16px 16px 10px;
        background-color: #fff;
    }
    

</style>
