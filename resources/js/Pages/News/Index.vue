<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    news: Object,
})
</script>

<template>
    <div v-if="news">
        <div v-for="n in news">
            <h1>{{ n.title }}</h1>
            <p>{{ n.body }}</p>
            <Link :href="route('news.show', n)">詳細</Link>
        </div>
    </div>
</template>