<template>
    <div>
        <h1>数あてゲーム</h1>
        <button @click="start">start</button>
        <div v-if="answer > 0">
            <input type="number" v-model.number="num" @keyup.enter="guess">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                answer: 0,
                num: 0,
                tryCountLeft: 10
            }
        },
        methods: {
            start() {
                this.answer = Math.floor(Math.random() * (100 - 1) + 1)
                this.num = 0
                this.tryCountLeft = 10

                this.$emit('start', this.tryCountLeft)
            },
            guess() {
                if (this.tryCountLeft > 0) {
                    this.tryCountLeft--
                }

                if (this.tryCountLeft === 0) {
                    this.$emit('lose', this.tryCountLeft)
                    return
                }

                if (this.num === this.answer) {
                    this.$emit('collect', this.tryCountLeft)
                    return
                }

                if (this.num > this.answer) {
                    this.$emit('lower', this.tryCountLeft)
                    return
                }

                if (this.num < this.answer) {
                    this.$emit('higher', this.tryCountLeft)
                    return
                }
            }
        }
    }
</script>

<style>

</style>