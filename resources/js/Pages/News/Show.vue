<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    news: Object,
})
</script>

<template>

    <div>
        <h1>{{ news.title }}</h1>
        <p>{{ news.body }}</p>
    </div>
    <Link :href="route('news.index')">一覧に戻る</Link>

</template>