<template>
    <span class="anchor" @click="onClickLink">{{ text }}</span>
</template>

<script>
export default { // 設定オブジェクト
    props: {
        text: {
            type: String,
            required: true
        },
        href: {
            type: String,
            required: true
        },
        newTab: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onClickLink () {
            if (this.newTab === true) {
                window.open(this.href, '_blank');
            } else {
                window.location.href = this.href
            }
        },
    },
}
</script>

<style>
.anchor {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
}
</style>