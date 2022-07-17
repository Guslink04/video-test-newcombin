<template>
    <div class="w-full">
        <div class="grid grid-flow-row-dense grid-cols-2 md:grid-cols-5 place-items-center bg-slate-900 h-96 px-4 py-4">
            <FileVue v-for="file in files" :file="file" />
        </div>
    </div>
</template>
 
 <script  setup lang="ts">
 import FileVue from './File.vue';
 import { ref } from 'vue'
 
 const randomDuration = () => {
     return (Math.floor(Math.random() * 18) + 2) * 10;
 }
 const randomColor = () => {
     const colors: string[] = [
         "#dc2626",
         "#ea580c",
         "#d97706",
         "#ca8a04",
         "#65a30d",
         "#16a34a",
         "#059669",
         "#0d9488",
         "#0891b2",
         "#0284c7",
         "#2563eb",
         "#4f46e5",
         "#7c3aed",
         "#9333ea",
         "#c026d3",
         "#db2777",
         "#e11d48"
     ]
     return colors[Math.floor(Math.random() * colors.length)];
 }
 
 const files = ref([
     { name: "Test file A", duration: randomDuration(), src: "placeholderA.mp4", color: randomColor() },
     { name: "Test file B", duration: randomDuration(), src: "placeholderB.mp4", color: randomColor() },
     { name: "Test file C", duration: randomDuration(), src: "placeholderC.mp4", color: randomColor() },
     { name: "Test file D", duration: randomDuration(), src: "placeholderD.mp4", color: randomColor() },
     { name: "Test file E", duration: randomDuration(), src: "placeholderE.mp4", color: randomColor() },
     { name: "Test file F", duration: randomDuration(), src: "placeholderF.mp4", color: randomColor() },
     { name: "Test file G", duration: randomDuration(), src: "placeholderG.mp4", color: randomColor() },
     { name: "Test file H", duration: randomDuration(), src: "placeholderG.mp4", color: randomColor() },
 ])
 
 </script>