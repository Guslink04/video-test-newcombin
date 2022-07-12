<template>
    <div class="bg-slate-900 min-h-screen pb-4">
        <div class="py-2 mb-4 bg-slate-700 flex justify-start px-8">
            &nbsp;
        </div>
        <div class="flex justify-between px-4">
            <FilesContainerVue />
            <VideoContainerVue />
        </div>
        <div class="px-4">
            <TimelineContainerVue />
        </div>
    </div>
</template>
<script setup lang="ts">
import FilesContainerVue from '../components/Files/FilesContainer.vue';
import VideoContainerVue from '../components/Video/VideoContainer.vue';
import TimelineContainerVue from '../components/Timelines/TimelineContainer.vue'; 
</script>

