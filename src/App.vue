<template>
  <div id="app">
    <bracketView :playersCount=playersCount|adjust></bracketView>
    <input class="adjust" type="number" v-model.number="playersCount"/>
  </div>
</template>

<script>
import './reset.css'
import BracketView from './components/BracketView'

export default {
  name: 'app',
  data() {
    return {
      playersCount: 16
    }
  },
  components: {
    BracketView
  },
  filters: {
    adjust: function(value){
      return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2))
    }
  }
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
