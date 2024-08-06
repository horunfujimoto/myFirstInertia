<script setup>
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
    news: Object,
})

const form = useForm({
    title: props.news.title,
    body: props.news.body,
})

const submit = () => {
    form.put(route('news.update', props.news.id ), {
    headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    });
}
</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page class="flex flex-center q-pa-md">
                <q-card class="my-card">
                    <q-card-section>
                        <q-input
                            v-model="form.title"
                            label="Title"
                            color="primary"
                            :error="!!form.errors.title"
                            :error-message="form.errors.title"
                            filled
                        />
                        <q-input
                            v-model="form.body"
                            label="Body"
                            type="textarea"
                            color="primary"
                            :error="!!form.errors.body"
                            :error-message="form.errors.body"
                            rows="10"
                            filled
                        />
                    </q-card-section>
                    <q-card-actions align="right">
                        <q-btn
                            type="submit"
                            label="更新"
                            color="primary"
                            @click="submit"
                            :loading="form.processing"
                            :disable="form.processing"
                            class="q-mt-md"
                        />
                    </q-card-actions>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<style scoped>
.my-card {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
}

.q-card-section {
    padding: 1rem;
}

.q-card-actions {
    padding: 1rem;
    text-align: center;
}
</style>
