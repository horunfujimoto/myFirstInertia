<script setup>
import { Link, useForm } from '@inertiajs/vue3'
import { QBtn, QCard, QCardSection, QCardActions, QToolbar, QToolbarTitle, QLayout, QPage, QPageContainer } from 'quasar';

defineProps({
    news: Object,
})

const form = useForm({});
const deleteNews = (news) => {
    if (confirm('ニュースを削除しますか？')) {
        form.delete(route('news.destroy', news), {
            preserveScroll: true,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
    }
}
</script>

<template>
    <q-layout>
        <q-page-container>
            <q-page>
                <q-toolbar>
                    <q-toolbar-title>ニュース一覧</q-toolbar-title>
                    <q-btn label="新規作成" color="primary" :href="route('news.create')" />
                </q-toolbar>
                <div v-if="news" class="q-pa-md">
                    <div v-for="n in news" :key="n.id" class="q-mb-md">
                        <q-card>
                            <q-card-section>
                                <div class="text-h6">{{ n.title }}</div>
                                <p>{{ n.body }}</p>
                            </q-card-section>
                            <q-card-actions align="right">
                                <q-btn flat label="詳細" :href="route('news.show', n)" />
                                <q-btn flat label="編集" :href="route('news.edit', n)" />
                                <q-btn flat label="削除" color="negative" @click="deleteNews(n)" />
                            </q-card-actions>
                        </q-card>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

