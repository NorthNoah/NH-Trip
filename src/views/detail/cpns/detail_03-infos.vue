<template>
    <div class="infos">
        <div class="name">{{ topInfos.houseName }}</div>
        <div class="tags">
            <template v-for="(item, index) in topInfos.houseTags" :key="index">
                <span 
                    class="item"
                    v-if="item.tagText"
                    :style="{ color: item.tagText.color, background: item.tagText.background.color }">
                    {{ item.tagText.text }}
                </span>
            </template>
        </div>
        <div class="section comment">
            <div class="left">
                <span class="score">{{ topInfos.commentBrief.overall }}</span>
                <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span>
                <span class="brief">"{{ topInfos.commentBrief.commentBrief }}"</span>
            </div>

            <div class="right">
                <span class="count">
                    {{ topInfos.commentBrief.totalCount }}条评论
                    <van-icon name="arrow"/>
                </span>
            </div>
        </div>

        <div class="section location">
            <div class="left">
                <div class="address">
                    {{ topInfos.nearByPosition.address }}                
                </div>
            </div>
            <div class="right">
                地图·周边 <van-icon name="arrow"/>
            </div>
        </div>

    </div>
</template>

<script setup>
    defineProps({
        topInfos: {
            type: Object,
            default: () => ({})
        }
    })

</script>

<style lang="less" scoped>
    .infos {
        padding: 16px;
        .name {
            font-size: 24px;
            font-weight: 700;
        }
        .tags {
            margin-top: 10px;
            margin-left: -5px;
            .item {
                margin-left: 5px;
            }
        }
        .section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            padding: 10px;
            height: 40px;
            background-color: #eee;
        }
        .right {
            color: var(--primary-color)
        }

        .comment {
            .score {
                font-size: 20px;
                font-weight: 700;
            }
            .title {
                margin-left: 5px;
                font-weight: 700;
            }
            .brief {
                margin-left: 5px;
            }
        }
        .location {
            .address {
                font-size: 14px;
                font-weight: 700;
            }
        }
    }
</style>
