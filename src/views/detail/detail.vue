<template>
    <div class="detail topPage" ref="detailRef">
        <div class="tab-bar" v-if="isShowTab">
            <van-tabs 
                v-model:active="activeTab" 
                color="var(--primary-color)" 
                @click="tabClick" 
                sticky>

                <template v-for="(item, index) in names" :key="index">
                    <van-tab :title="item"></van-tab>
                </template>
            </van-tabs>
        </div>
        <detail-nav></detail-nav>
        <div class="main" v-if="mainPart" v-memo="[mainPart]">
            <detail-swipe :swipeData="mainPart.topModule.housePicture.housePics"></detail-swipe>
            <detail-infos :topInfos="mainPart.topModule"></detail-infos>
            <detail-facility name="设施" :ref="getSectionRef" :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
            <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"></detail-landlord>
            <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"></detail-comment>
            <detail-notice name="须知" :ref="getSectionRef" :orderRules="mainPart.dynamicModule.rulesModule.orderRules"></detail-notice>
            <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"></detail-map>
            <detail-intro :intro="mainPart.introductionModule"></detail-intro>
        </div>
        <div class="footer">
            <img src="@/assets/img/detail/icon_ensure.png" alt="">
            <div class="text">北境自由大学·Archer系</div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, watch } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import getDetailInfos from "@/service/modules/detail";
    import DetailNav from "./cpns/detail_01-nav.vue";
    import DetailSwipe from "./cpns/detail_02-swipe.vue";
    import DetailInfos from "./cpns/detail_03-infos.vue";
    import DetailFacility from "./cpns/detail_04-facility.vue";
    import DetailLandlord from "./cpns/detail_05-landlord.vue";
    import DetailComment from "./cpns/detail_06-comment.vue";
    import DetailNotice from "./cpns/detail_07-notice.vue";
    import DetailMap from "./cpns/detail_08-map.vue";
    import DetailIntro from "./cpns/detail_09-intro.vue";
    import useScroll from "@/hooks/useScroll";
    const route = useRoute()
    const homeId = route.params.id

    // 在页面内管理数据，返回promise后用then回调函数
    const detailInfos = ref({})
    // 技巧：用计算属性导出其中一个的属性
    getDetailInfos(homeId).then(res => {
        detailInfos.value = res.data
    })

    const mainPart = computed(() => detailInfos.value.mainPart)

    // 监听详情页面的滚动
    const detailRef = ref()
    const { scrollTop } = useScroll(detailRef)
    const isShowTab = computed(() => {
        return scrollTop.value > 300
    })
    
    const activeTab = ref(0)
    // const sectionEls = []
    // // 获取后将每个Ref的组件存入数组
    // const getSectionRef = (value) => {
    //     console.log(value.$el)
    //     sectionEls.push(value.$el)
    // }

    const sectionEls = ref({})
    // {描述-el}
    const names = computed(() => {
        return Object.keys(sectionEls.value)
    })
    const getSectionRef = (value) => {
        if (!value) return
        const name = value.$el.getAttribute("name")
        sectionEls.value[name] = value.$el
    }


    let isClick = false
    let curDistance = -1
    //const landlordRef = ref()
    const tabClick = () => {
        const key = Object.keys(sectionEls.value)[activeTab.value]
        const el = sectionEls.value[key]
        let distance = el.offsetTop - 44
        
        // 事件为点击
        isClick = true
        // 设置当前距离为实际滚动distance
        curDistance = distance
        console.log(curDistance)

        detailRef.value.scrollTo({
            // top: sectionEls[activeTab.value]?.offsetTop - 44,
            top: distance,
            behavior: "smooth"
        })

        
    }

    // 滚动距离匹配标签切换
    watch(scrollTop, (newVal) => {
        console.log(newVal)
        // 当前滚动距离到达标签需要滚动的距离，则一次点击事件的跳转操作结束
        if (newVal === curDistance) {
            isClick = false
        }
        console.log(isClick)
        // 若此时为点击切换模式，则无需匹配
        if (isClick) {
            return
        }
        // 获取所有els
        const els = Object.values(sectionEls.value)
        // 获取每个组件的offsetTop
        const values = els.map(el => el.offsetTop - 88)

        // 匹配
        // 默认指针在最右
        let index = values.length - 1
        for (let i = 0; i < values.length; i++) {
            if (values[i] > newVal) {
                index = i - 1; 
                break;
            }
        }

        activeTab.value = index
    })
</script>

<style lang="less" scoped>
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 120px;

        img {
            width: 123px;
        }

        .text {
            margin-top: 12px;
            font-size: 12px;
            color: #7688a7;
        }
    }

    .tab-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 44px;
    }
</style>
