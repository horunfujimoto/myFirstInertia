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
    <form @submit.prevent="submit">
        <table>
            <tr>
                <th><label for="title">title:</label></th>
                <td>
                    <div v-if="form.errors.title">{{ form.errors.title }}</div>
                    <input id="title" type="text" v-model="form.title">
                </td>
            </tr>
            <tr>
                <th><label for="body">body:</label></th>
                <td>
                    <div v-if="form.errors.body">{{ form.errors.body }}</div>
                    <textarea id="body" cols="22" rows="20" v-model="form.body"></textarea>
                </td>
            </tr>
            <tr>
                <th></th>
                <td>
                    <button type="submit" :disabled="form.processing">更新</button>
                </td>
            </tr>
        </table>
    </form>
</template>