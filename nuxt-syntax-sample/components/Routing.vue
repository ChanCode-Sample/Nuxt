<template>
    <NuxtLink to="/page1">ページ１</NuxtLink>
    <button @click="goPage2">ページ２</button>
    <NuxtLink to="/page99">ページ99</NuxtLink>
    <div>-----</div>
    <NuxtPage />
</template>
<script setup lang="ts">
const router = useRouter();
const goPage2 = () => {
    router.push('/nest/page2');
};
</script>
