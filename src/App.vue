<template>
  <div id="app">
    <div class="control-bar">
      <input class="adjust" type="number" v-model.number="playersCount" step="1" />
      <input type="button" value="缩小" @click="zoomIn" />
      <input type="button" value="正常" @click="normal" />
    </div>
    <div class="main">
      <bracketView 
      :playersCount=playersCount|adjust 
      :originPlayersCount=playersCount>
      </bracketView>
    </div>
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
      playersCount: 10
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
  mounted() {
  },
  store
}
</script>

<style>
#app {
  height: 800px;
  font-family:"webfont" !important;
  font-size:12px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {font-family: 'webfont';
  src: url('//at.alicdn.com/t/jqqro26ufnf561or.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/jqqro26ufnf561or.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/jqqro26ufnf561or.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/jqqro26ufnf561or.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/jqqro26ufnf561or.svg#NotoSansHans-DemiLight') format('svg'); /* iOS 4.1- */
}

body {
  background-color: #777777;
}

.control-bar {
  width: 100%;
  float: left;
}

.main {
  width: 960px;
  float: left;
}

.adjust {
  height: 30px;
}
</style>
