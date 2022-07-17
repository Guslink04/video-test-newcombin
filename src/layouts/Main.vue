<template>
    <div class="bg-black min-h-screen pb-4">
        <div class="py-2 mb-4 bg-slate-800 flex justify-start px-8">
            &nbsp;
        </div>
        <div class="flex justify-between px-4 gap-2">
            <FilesContainerVue />
            <VideoContainerVue />
        </div>
        <div class="px-4 ">
            <TimelineContainerVue />
        </div>
    </div>
</template>
<script setup lang="ts">
import FilesContainerVue from '../components/Files/FilesContainer.vue';
import TimelineContainerVue from '../components/Timeline/TimelineContainer.vue';
import VideoContainerVue from '../components/Video/VideoContainer.vue';

</script>

