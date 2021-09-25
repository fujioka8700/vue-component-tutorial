import Vue from 'vue'

// import文を使ってSassファイルを読み込む。
import "./style.scss";

// Components
// import Hello from './components/Hello.vue'
// import AnchorLink from './components/AnchorLink.vue'
// import EventButtons from './components/EventButtons.vue'
// import NumberGuess from './components/NumberGuess.vue'
import MarkdownPanel from './components/MarkdownPanel.vue'
// import Card from './components/Card.vue'


// new Vue({
//   el: '#app4',
//   components: {
//     Card
//   },
//   methods: {
//     onClick () {
//       alert('Clicked!');
//     }
//   }
// })

const app = new Vue({
  el: '#app3',
  components: {
    MarkdownPanel
  }
})

// new Vue({
//   el: '#app',
//   data: {
//     message: 'スタートボタンを押してください',
//     tryCountLeft: 0
//   },
//   components: {
//     NumberGuess
//   },
//   methods: {
//     onStart (tryCountLeft) {
//       this.message = 'スタート！🚀'
//       this.tryCountLeft = tryCountLeft
//     },
//     onCollect(tryCountLeft) {
//       this.message = '当たり！ 🎉'
//     },
//     onLower(tryCountLeft) {
//       this.tryCountLeft = tryCountLeft
//       this.message = 'もっと小さいです 👇'
//     },
//     onHigher(tryCountLeft) {
//       this.tryCountLeft = tryCountLeft
//       this.message = 'もっと大きいです 👆'
//     },
//     onLose(tryCountLeft) {
//       this.tryCountLeft = tryCountLeft
//       this.message = 'ゲームオーバー'
//     }
//   }
// })

/*new Vue({
  el: '#app',
  data: {
    arguments: [],
    message: 'スタートボタンを押してください'
  },
  components: {
    hello: Hello,
    AnchorLink,
    EventButtons
  },
  methods: {
    onEventOne() {
      alert('Event 1')
    },
    onEventTwo(argument) {
      this.arguments = []
      this.arguments.push(argument)
      alert(this.arguments)
    },
    onEventThree(arg1, arg2) {
      this.arguments = []
      this.arguments.push(arg1)
      this.arguments.push(arg2.name)
      alert(this.arguments)
    },
  }
})*/

// Vue.component('counter', {
//   template: '<button @click="num++">{{ num }}</button>',
//   data () {
//     return {
//       num: 0
//     }
//   }
// });

// const app2 = new Vue({
//   el: '#app2',
// })