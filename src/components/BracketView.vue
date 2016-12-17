<template>
	<div class="drag-zone" v-bind:class="[{scale: scaleUp}]" @mousedown="dragStart" @mouseup="dragStop">
		<bracket :playersCount=playersCount :originPlayersCount=originPlayersCount class="bracket">
		</bracket>
	</div>	
</template>

<script>
import { mapGetters } from 'vuex'
import Bracket from './Bracket'

export default {
  name: 'bracketView',
  computed: mapGetters({
    scaleUp: 'scaleUp'
  }),
  props: {
    playersCount: {
        type: Number,
        required: true
    },
    originPlayersCount: {
        type: Number,
        required: true
    }
  },
  methods: {
  	dragStart(mde) {
      var drag_zone = this.$el
		  var init_left = this.$el.offsetLeft
		  var init_top = this.$el.offsetTop
  		window.onmousemove = function(mve) {
  			var left = init_left + mve.pageX - mde.pageX
  			var top = init_top + mve.pageY - mde.pageY
  			drag_zone.style.left = left + "px"
  			drag_zone.style.top = top + "px"
  		}
  	},
  	dragStop(mue) {
  		window.onmousemove = null;
  	}
  },
  components: {
    Bracket
  },
  vuex: {
    getters: {
      scaleUp: (state) => state.scaleUp
    }
  }
}
</script>

<style>
	.drag-zone {
		position: relative;
    width: 2000px;
		/*border: 1px #FFF solid;*/
	}

  .scale {
    zoom: 75%;
  }
</style>