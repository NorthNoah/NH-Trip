<template>
    <div class="tab-bar">
        <div class="tab-item">
            <img src="@/assets/img/tabbar/tab_home.png" alt="">
            <span class="text">首页</span>
        </div>

        <div class="tab-item">
            <img src="@/assets/img/tabbar/tab_favor.png" alt="">
            <span class="text">收藏</span>
        </div>

        <div class="tab-item">
            <img src="@/assets/img/tabbar/tab_order.png" alt="">
            <span class="text">订单</span>
        </div>

        <div class="tab-item">
            <img src="@/assets/img/tabbar/tab_message.png" alt="">
            <span class="text">消息</span>
        </div>
    </div>
</template>

<script setup>
    const tabbardata = [
        {
            text: "首页",
            image: "tab_home.png",
            imgActive: "tab_home_active.png",
            path: "/home",
        },
        {
            text: "收藏",
            image: "tab_favor.png",
            imgActive: "tab_favor_active.png",
            path: "/favor",
        },
        {
            text: "订单",
            image: "tab_order.png",
            imgActive: "tab_order_active.png",
            path: "/order",
        },
        {
            text: "消息",
            image: "tab_message.png",
            imgActive: "tab_message_active.png",
            path: "/message",
        }
    ]

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

    }
    
}
</style>
