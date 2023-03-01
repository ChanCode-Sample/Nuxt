<template>
    <div v-if="pending === true">loading...</div>
    <button @click="refresh()">reload</button>
    <button @click="postData('POSTSample')">POST</button>
    <div>-----</div>
    <h3>data一覧</h3>
    <p v-if="error">{{ JSON.stringify(error) }}</p>
    <ul>
        <li v-for="item of items" :key="item.title">{{ item.title }}</li>
    </ul>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const { data: items, error, pending, refresh } = await useFetch<{ title: string }[]>(runtimeConfig.public.apiHostAddress +
    '/api/items');
const postData = async (title: string) => {
    const { data } = await useFetch<{ title: string }>('/api/items', {
        baseURL: runtimeConfig.public.apiHostAddress,
        method: 'POST',
        body: { title },
    });
    alert(data.value);
};
</script>

