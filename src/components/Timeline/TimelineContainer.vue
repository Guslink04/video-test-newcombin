<style>
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-track {
    background: #001122;
}

::-webkit-scrollbar-thumb {
    background: #334155;
}

::-webkit-scrollbar-thumb:hover {
    background: #334155;
}

::-webkit-scrollbar-corner {
    background: #001122;
}

.timeline-canvas-container {
    height: 350px;
    width: 100%;
    overflow-x: scroll;
}
</style>
<template>
    <div class="w-full bg-slate-900 my-2 timeline-canvas-container" @drop="handleDrop" @dragover="handleDragOver"
        @dragenter="handleDragEnter" @dragleave="handleDragLeave">
        <canvas id="timeline-canvas"> </canvas>
    </div>
</template>

<script setup lang="ts">
import Timeline from "./CanvasModels/Timeline";
import { onMounted, reactive } from "vue";


let timeline: Timeline | null = null;

const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const element = event.target as Element;
    const dataTransfer = <DataTransfer>event.dataTransfer;
    const data = dataTransfer.getData('fileObject');
    const timeln = <Timeline>timeline
    timeln.addNewBar(data);
    timeline?.draw();
    console.log(data);
    element.classList.remove("brightness-150");
};
const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
};
const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    const element = event.target as Element;
    element.classList.add("brightness-150");
};
const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    const element = event.target as Element;
    element.classList.remove("brightness-150");
};
onMounted(() => {
    timeline = new Timeline("timeline-canvas");
    timeline.draw();
});
</script>
