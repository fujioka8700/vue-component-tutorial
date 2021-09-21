import Vue from 'vue'

// Components
import Hello from './components/Hello.vue'
import AnchorLink from './components/AnchorLink.vue'

new Vue({
  el: '#app',
  components: {
    hello: Hello,
    AnchorLink
  }
})