<template>
    <div class="notice">
        <detail-section title="预定须知">
            <div class="notice-inner">
                <template v-for="(item, index) in orderRules" :key="index">
                    <div class="item">
                        <span class="title">{{ item.title }}</span>
                        <span class="intro">{{ item.introduction }}</span>
                        <span class="tip" v-if="item.tips">查看说明</span>
                    </div>
                </template>
            </div>

        </detail-section>
    </div>
</template>

<script setup>
    defineProps({
        orderRules: {
            type: Array,
            default: () => []
        }
    })
    

</script>

<style lang="less" scoped>
    .notice-inner {
        font-size: 12px;
        .item {
            display: flex;
            height: 40px;
            .title {
                color: #999;
            }
            .intro {
                margin-left: 10px;
            }

            .tip {
                flex: 1;
                text-align: right;
                
            }
        }
    }
</style>
