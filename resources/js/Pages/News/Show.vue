<template>
    <div>
        <div v-if="news">
            <h1>{{ news.title }}</h1>
            <p>{{ news.body }}</p>
        </div>
        <div v-else>
            No news found
        </div>
    </div>
</template>

<script>
export default {
    props: {
        news: Object,
    },
};
</script>