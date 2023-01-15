<template>
    <div class="house-item">
        <!-- 重点在布局思路 -->
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="info">
                <div class="location">
                    <img src="@/assets/img/home/location.png" alt="">
                    <span>{{ itemData.location }}</span>
                </div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="price">
                    <div class="final-price">
                        ￥{{ itemData.finalPrice }}
                    </div>
                    <div class="product-price">
                        ￥{{ itemData.productPrice }}
                    </div>
                    <div class="decline">
                        <!-- 已减￥{{ declinePrice }} -->
                        {{ itemData?.priceTipBadge?.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    const props = defineProps({
        itemData: {
            type: Object,
            default: () => ({})
        }
    })
    const declinePrice = computed(() => {
        return props.itemData.productPrice - props.itemData.finalPrice
    })

</script>

<style lang="less" scoped>
    .house-item {
        width: 50%;
        .item-inner {
            margin: 5px;
            background-color: #fff;
            border-radius: 6px;
            //overflow: hidden;

            .cover {
                img {
                    width: 100%;
                }
            }
            .info {
                margin-top: 5px;
                .name {
                    margin-top: 5px;
                }
                .location {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    color: #666;
                    img {
                        height: 14px;
                    }
                }
                .summary {
                    margin-top: 5px;
                    color: #666;
                    font-size: 12px;
                }
                .price {
                    margin-top: 5px;
                    display: flex;
                    align-items: center;
                    .final-price {
                        color: var(--primary-color)
                    }
                    .product-price {
                        margin-left: 2px;
                        color: #999;
                        font-size: 12px;
                        text-decoration:line-through;
                    }
                    .decline {
                        font-size: 12px;
                        padding: 2px;
                        margin-left: 2px;
                        border-radius: 12px;
                        background-color: var(--primary-color);
                        color: #fff;

                    }
                }

            }
        }
    }

   
</style>
