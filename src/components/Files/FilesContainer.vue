<template>
    <div class="w-full">
        <div
            class=" grid grid-flow-row-dense grid-cols-2 md:grid-cols-5 gap-4 place-items-center bg-slate-900 h-96 px-4 py-4">
            <FileVue v-for="file in files" :file="file" />
        </div>
    </div>
</template>
 
 <script  setup lang="ts">
 import FileVue from './File.vue';
 import { ref } from 'vue'
 
 const files = ref([
     { name: "Test file A", duration: 10, src: "placeholderA.mp4" },
     { name: "Test file B", duration: 20, src: "placeholderB.mp4" },
     { name: "Test file C", duration: 30, src: "placeholderC.mp4" },
     { name: "Test file D", duration: 40, src: "placeholderD.mp4" },
     { name: "Test file E", duration: 50, src: "placeholderE.mp4" },
     { name: "Test file F", duration: 60, src: "placeholderF.mp4" },
     { name: "Test file G", duration: 70, src: "placeholderG.mp4" },
 ])
 
 </script>