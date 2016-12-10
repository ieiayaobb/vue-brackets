<template>
  <div id="app">
    <bracketView></bracketView>
  </div>
</template>

<script>
import BracketView from './components/BracketView'

export default {
  name: 'app',
  components: {
    BracketView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #1E2227;
  height: 800px;
}
</style>
