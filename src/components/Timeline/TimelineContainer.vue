<style>
.timeline-canvas {
    height: 350px;
    width: 100%;
}
</style>
<template>
    <div class="w-full bg-slate-900 my-2 p-2">
        <canvas id="timeline-canvas" class="timeline-canvas">

        </canvas>
    </div>
</template>

<script setup lang="ts">
import Timeline from './CanvasModels/Timeline';
import { onMounted, ref } from 'vue';

onMounted(() => {
    const timeline = new Timeline('timeline-canvas')
    timeline.draw()
})
</script>
