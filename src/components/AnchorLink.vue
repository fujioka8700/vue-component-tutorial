<template>
    <span class="anchor" @click="onClickLink">{{ text }}</span>
</template>

<script>
export default {
    props: {
        text: String,
        href: String
    },
    methods: {
        onClickLink () {
            window.location.href = this.href
        }
    },
}
</script>

<style scoped>
.anchor {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
}
</style>