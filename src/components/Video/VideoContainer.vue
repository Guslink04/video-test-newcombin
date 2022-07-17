<template>

    <div class="w-full min-h-full bg-slate-900 py-10">
        <div class="grid min-h-full" :style="style">
        </div>
    </div>

</template>
 
 <script  setup lang="ts">
 import { computed } from "vue";
 import { video } from "./stores/video"
 const style = computed(() => ({
     backgroundColor: video.value.color
 }))
 </script>