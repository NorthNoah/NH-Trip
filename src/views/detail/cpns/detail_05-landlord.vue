<template>
    <div class="landlord">
        <detail-section title="房东介绍" more-text="查看房东主页">
            <div class="intro">
                <div class="banner">
                    <img :src="landlord?.topScroll" alt="">
                </div>
                <div class="header">
                    <div class="left">
                        <img :src="landlord?.hotelLogo" alt="">
                        <div class="infos">
                            <div class="name">
                                {{ landlord.hotelName }}
                            </div>
                            <div class="tags">
                                <template v-for="(item, index) in landlord.hotelTags" :key="index">
                                    <span class="items">{{ item.tagText.text }}</span>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="chat">联系房东</div>
                    </div>
                </div>
                <div class="content">
                    <template v-for="(item, index) in landlord.hotelSummary" :key="index">
                        <div class="item">
                            <div class="top">{{ item.title }}</div>
                            <div class="medium">{{ item.introduction }}</div>
                            <div class="bottom">{{ item.tip }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
    defineProps({
        landlord: {
            type: Object,
            default: () => ({})
        }
    })
</script>

<style lang="less" scoped>
    .landlord {
        .intro {
            .banner {
                img {
                    width: 100%;
                }
            }
            .header {
                margin-top: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left {
                    margin-top: 5px;
                    display: flex;
                    align-items: center;
                    img {
                        width: 50px;
                        height: 50px;
                    }
                    .infos {
                        .name {
                            font-size: 16px;
                            font-weight: 700;
                        }
                        .tags {
                            font-size: 12px;
                            margin-top: 5px;
                            color: #999
                        }
                        span {
                            display: inline-block;
                            padding-right: 5px;
                            margin-right: 5px;
                            border-right: 1px solid #999;
                        }
                        span:last-child {
                            border: none;
                        }
                    }
                }
                .right {
                    width: 70px;
                    height: 24px;
                    background-color: var(--primary-color);
                    font-size: 8px;
                    border-radius: 4px;
                    color: #fff;
                    font-weight: 700;
                    line-height: 20px;
                    text-align: center;
                }
            }
            .content {
                padding: 40px 0;
                display: flex;
                justify-content: space-between;
                .item {
                    .top {
                        color: #999;
                    }
                    .medium {
                        font-size: 20px;
                        font-weight: 700;
                    }
                }
            }
        }
    }

</style>
