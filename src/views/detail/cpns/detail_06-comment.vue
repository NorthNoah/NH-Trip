<template>
    <div class="comment">
        <detail-section title="热门评论" more-text="查看全部37条评论">
            <div class="comments">
                <div class="header">
                    <div class="left">
                        <div class="score">
                            <span class="text">{{ comment.overall }}</span>
                            <div class="line"></div>
                        </div>
                        <div class="info">
                            <div class="title">{{ comment.scoreTitle }}</div>
                            <div class="count">{{ comment.totalCount }}条评论</div>
                            <div class="star">
                                <van-rate v-model="comment.overall" color="#ff9645" size="12" readonly></van-rate>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <template v-for="(item, index) in comment.subScores" :key="index">
                            <div class="item">{{ item }}</div>
                        </template>
                    </div>
                </div>
                <div class="tags">
                    <template v-for="(item, index) in comment.commentTagVo" :key="index">
                        <span class="text">{{ item.text }}</span>
                    </template>
                </div>
                <div class="content">
                    <div class="user">
                        <div class="avatar">
                            <img :src="comment.comment.userAvatars" alt="">
                        </div>
                        <div class="profile">
                            <div class="name">{{ comment.comment.userName }}</div>
                            <div class="date">{{ comment.comment.checkInDate }}</div>
                        </div>
                    </div>
                    <div class="text">
                        {{ comment.comment.commentDetail }}
                    </div>
                </div>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
    defineProps({
        comment: {
            type: Object,
            default: () => ({})
        }
    })
    
</script>

<style lang="less" scoped>
    .comments {
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
                display: flex;
                align-items: center;
                .score {
                    display: flex;
                    align-items: center;
                    .text {
                        font-size: 40px;
                        font-weight: 700;
                        height: 35px;
                        border-bottom: 5px solid var(--primary-color);
                    }
                }
                .info {
                    margin-left: 10px;
                }
            }
            .right {
                width: 50%;
                display: flex;
                flex-wrap: wrap;
                .item {
                    display: flex;
                    align-items: center;
                    width: 50%;
                    font-size: 10px;
                }
            }

        }
        .tags {
            display: flex;
            flex-wrap: wrap;

            margin-top: 10px;
            background-color: #fff;
            .text {
                background-color: #eee;
                margin: 3px 10px;
                font-size: 10px;
            }

        }
        .content {
            margin-top: 20px;
            .user {
                display: flex;
                .avatar {
                    img {
                        width: 30px;
                        border-radius: 50%
                    }
                }
                .profile {
                    margin-left: 5px;
                    .date {
                        font-size: 12px;
                        color: #999
                    }
                }

            }
            .text {
                margin-top: 10px;
                line-height: 18px;
            }

        }
        
    }
</style>
