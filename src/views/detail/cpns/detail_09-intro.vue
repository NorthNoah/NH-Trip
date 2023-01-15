<template>
    <div class="intro">
        <h2 class="title">{{ intro.title }}</h2>
        <div class="content">
            {{ intro.introduction }}
        </div>
    </div>
</template>

<script setup>
     defineProps({
        intro: {
            type: Object,
            default: () => ({})
        }
    })
</script>

<style lang="less" scoped>
    .intro {
        padding: 16px 12px;
        border-top: 5px solid #f2f3f4;
        .title {
            color: #000;
        }
        .content {
            margin-top: 10px;

        }
    }
</style>
