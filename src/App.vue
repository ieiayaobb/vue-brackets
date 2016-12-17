<template>
  <div id="app">
    <bracketView :playersCount=playersCount|adjust :originPlayersCount=playersCount></bracketView>
    <input class="adjust" type="number" v-model.number="playersCount" step="1" />
    <input type="button" value="缩小" @click="zoomIn" />
    <input type="button" value="正常" @click="normal" />
  </div>
</template>

<script>
import store from './vuex/store'
import './reset.css'
import BracketView from './components/BracketView'

export default {
  name: 'app',
  data() {
    return {
      playersCount: 13
    }
  },
  components: {
    BracketView
  },
  filters: {
    adjust: function(value){
      return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2))
    }
  },
  methods: {
    zoomIn: function(e) {
      this.$store.dispatch('scaleUp')
    },
    normal: function(e) {
      this.$store.dispatch('scaleNormal')
    }
  },
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 800px;
}

body {
  background-color: #1E2227;
}

.adjust {
  height: 30px;
}
</style>
