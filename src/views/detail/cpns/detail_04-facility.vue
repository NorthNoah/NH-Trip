<template>
    <div class="facility">
        <detail-section title="房屋设施" more-text="查看全部设施">
            <div class="facilitys">
                <template v-for="(item, index) in houseFacility.houseFacilitys" :key="index">
                    <div class="item" v-if="houseFacility?.facilitySort.includes(index)">
                        <div class="head">
                            <img :src="item.icon" alt="">
                            <div class="text">{{ item.groupName }}</div>
                        </div>
                        <div class="list">
                            <template v-for="(iten, index) in item.facilitys.slice(0,4)" :key="index">
                                <div class="iten">
                                    <i class="icon_checked"></i>
                                    <span>{{ iten.name }}</span>
                                </div>
                            </template>

                        </div>
                    </div>   
                </template> 
                        
            </div>
        </detail-section>
    </div>
</template>

<script setup>
    defineProps({
        houseFacility: {
            type: Object,
            default: () => ({})
        }
    })
</script>

<style lang="less" scoped>
    .facilitys {
        padding: 15px 15px 40px;
        background-color: #eee;


        .item {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .head {
                width: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 30px;
                    height: 30px;    
                }
                .text {
                    font-size: 12px;
                }
                           
            }


            .list {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                .iten {
                    display: flex;
                    width: 50%;

                    span {
                        margin-left: 5px;
                    }
                }
            }
        }

      
    }
</style>
