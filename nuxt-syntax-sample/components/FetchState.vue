<template>
    <h3>data一覧</h3>
    <ul>
        <li v-for="item of titleStore" :key="item.title">{{ item.title }}</li>
    </ul>
    <input v-model="inputTitle" />
    <button @click="addTitle(inputTitle)">追加</button>
</template>
<script setup lang="ts">
const { titleStore, addTitle } = useWebStore();
const inputTitle = '';
</script>