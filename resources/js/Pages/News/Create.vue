<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({
    title: '',
    body: '',
})

const submit = () => {
    form.post(route('news.store'), {
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
                <th><label for="title">Title:</label></th>
                <td>
                    <div v-if="form.errors.title">{{ form.errors.title }}</div>
                    <input id="title" type="text" v-model="form.title">
                </td>
            </tr>
            <tr>
                <th><label for="body">Body:</label></th>
                <td>
                    <div v-if="form.errors.body">{{ form.errors.body }}</div>
                    <textarea id="body" cols="22" rows="20" v-model="form.body"></textarea>
                </td>
            </tr>
            <tr>
                <th></th>
                <td>
                    <button type="submit" :disabled="form.processing">登録</button>
                </td>
            </tr>
        </table>
    </form>
</template>
