<!--<script setup>-->
<!--import { Link } from '@inertiajs/vue3';-->

<!--defineProps({-->
<!--    news: Object,-->
<!--})-->
<!--</script>-->

<!--<template>-->

<!--    <div>-->
<!--        <h1>{{ news.title }}</h1>-->
<!--        <p>{{ news.body }}</p>-->
<!--    </div>-->
<!--    <Link :href="route('news.index')">一覧に戻る</Link>-->

<!--</template>-->

<script setup>
import { Link } from '@inertiajs/vue3';
import { QCard, QCardSection, QCardActions, QBtn } from 'quasar';

defineProps({
    news: Object,
})
</script>

<template>
    <q-card class="q-mt-md q-pa-md">
        <q-card-section>
            <div class="text-h4">{{ news.title }}</div>
            <p>{{ news.body }}</p>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="一覧に戻る" color="primary" :href="route('news.index')" />
        </q-card-actions>
    </q-card>
</template>

<style scoped>
.q-card {
    max-width: 600px;
    margin: 0 auto;
}
.q-card-section {
    text-align: left;
}
</style>
