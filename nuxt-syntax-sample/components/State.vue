<template>
    <div>-----</div>
    <StateSample1 />
    <div>-----</div>
    <StateSample2 />
    <div>-----</div>
    <div v-for="obj of objStore">
        <p>{{ obj.title }}</p>
    </div>
    <button @click="addTitle(`title${objStore.length + 1}`)">addTitle</button>
</template>
<script setup lang="ts">
const { objStore, addTitle } = useStore();
</script>
