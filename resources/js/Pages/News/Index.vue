<script setup>
import { Link, useForm } from '@inertiajs/vue3'

defineProps({
    news: Object,
})

const form = useForm({});
const deleteNews = (news) => {
    form.delete(route('news.destroy', news), {
        preserveScroll: true,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    })
}
</script>

<template>
    <Link :href="route('news.create')">新規作成</Link>
    <div v-if="news">
        <div v-for="n in news">
            <h1>{{ n.title }}</h1>
            <p>{{ n.body }}</p>
           <div>
                <Link :href="route('news.show', n)">詳細</Link>
            </div>
            <div>
                <Link :href="route('news.edit', n)">編集</Link>
            </div>
            <div>
                <Link href="#" @click="deleteNews(n)">削除</Link>
            </div>
        </div>
    </div>
</template>