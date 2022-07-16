
<template>
    <div draggable="true" @dragstart="handleDragStart" class="cursor-grab bg-slate-800 p-2 hover:brightness-150"
        :value="file">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span>
            {{ file.name }}
        </span>
    </div>
</template>

<script setup lang="ts">
const { file } = defineProps(['file'])
const handleDragStart = (event: DragEvent) => {
    const dataTransfer = <DataTransfer>event.dataTransfer
    dataTransfer.setData("fileObject", JSON.stringify(file));
}
</script>