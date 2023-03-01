<template>
    <div>ページ{{ paramNo }}</div>
</template>
<script setup lang="ts">
const route = useRoute();
const paramNo = route.params.no;
</script>