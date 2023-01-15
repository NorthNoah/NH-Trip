<template>
    <div class="map">
        <detail-section title="位置周边" more-text="查看更多周边信息">
            <div class="baidu" ref="mapRef">百度地图</div>
        </detail-section>
    </div>
</template>

<script setup>
    import DetailSection from "@/components/detail-section/detail-section.vue";
    import { onMounted,ref } from 'vue';
    const mapRef = ref()

    const props = defineProps({
        position: {
            type: Object,
            default: () => ({})
        }
    })
    // 在挂载后再创建地图，确保div元素存在
    onMounted(() => {
        const map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
        const point = new BMapGL.Point(props.position?.longitude, props.position?.latitude);  // 创建点坐标 
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
        //map.enableScrollWheelZoom(true);
        //map.setHeading(64.5);   //设置地图旋转角度
        //map.setTilt(73);       //设置地图的倾斜角度

        const marker = new BMapGL.Marker(point);  
        map.addOverlay(marker);    

    })
    

</script>

<style lang="less" scoped>
    .baidu {
        height: 300px;
    }
</style>
