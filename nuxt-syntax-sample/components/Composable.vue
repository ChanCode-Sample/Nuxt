<template>
    <div>{{ hello }}</div>
    <div>{{ thanks }}</div>
</template>
<script setup lang="ts">

const { hello } = useHello();
const { thanks } = useThankYou();
</script>