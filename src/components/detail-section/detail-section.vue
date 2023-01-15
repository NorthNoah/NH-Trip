<template>
    <div class="section">
        <div class="header">
            <h2 class="title">{{ title }}</h2>
        </div>

        <div class="content">
            <slot>
                <h3>我是默认内容</h3>
            </slot>
        </div>

        <div class="footer" v-if="moreText.length">
            <span class="more">{{ moreText }}</span>
            <van-icon name="arrow" />
        </div>
        
    </div>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            default: "默认标题"
        },
        moreText: {
            type: String,
            default: ""
        }
    })
    

</script>

<style lang="less" scoped>
    .section {
        border-top: 5px solid #eee;
        padding: 15px;
        .header {
            height: 40px;
            border-bottom: 1px solid #eee;
        }
        .content {
            margin-top: 10px;
        }
        .footer {
            margin-top: 16px;
            text-align: right;
            font-weight: 700;
            color: var(--primary-color)
        }
    }
</style>
