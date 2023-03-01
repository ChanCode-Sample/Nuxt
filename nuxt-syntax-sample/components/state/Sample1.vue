<template>
    <div>{{ state1 }}</div>
    <button @click="plus">state1++</button>
</template>
<script setup lang="ts">
const state1 = useState<number>("state1", () => 100);
const plus = () => state1.value++;
</script>