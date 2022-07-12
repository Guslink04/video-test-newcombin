<template>
    <div class="w-full">
        <div class="bg-slate-600 flex justify-start px-4 py-1">
            &nbsp;
        </div>
        <div
            class="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 gap-4 place-items-center bg-slate-700 h-96 px-4 py-4">
            <FileVue v-for="file in files" :file="file" />
        </div>
    </div>
</template>
 
 <script  setup lang="ts">
 import FileVue from './File.vue';
 import { ref } from 'vue'
 
 const files = ref([
     { name: "Test file A", duration: 1000, src: "placeholderA.mp4" },
     { name: "Test file B", duration: 2000, src: "placeholderB.mp4" },
     { name: "Test file C", duration: 3000, src: "placeholderC.mp4" },
     { name: "Test file D", duration: 4000, src: "placeholderD.mp4" },
     { name: "Test file E", duration: 5000, src: "placeholderE.mp4" },
     { name: "Test file F", duration: 6000, src: "placeholderF.mp4" },
     { name: "Test file G", duration: 7000, src: "placeholderG.mp4" },
 ])
 
 </script>