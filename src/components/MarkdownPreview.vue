<template>
    <div>
        <div class="empty" v-if="text === ''">
            No content yet.
        </div>
        <div v-else v-html="html"></div>
    </div>
</template>

<script>
    import marked from 'marked'

    export default {
        props: {
            text: {
                type: String,
                required: true
            }
        },
        computed: {
            html() {
                return marked(this.text)
            }
        }
    }
</script>