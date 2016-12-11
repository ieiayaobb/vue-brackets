<template>
	<div class="drag-zone" @mousedown="dragStart" @mouseup="dragStop">
		<bracket :playersCount=playersCount class="bracket">
		</bracket>
	</div>	
</template>

<script>
import Bracket from './Bracket'

export default {
  name: 'bracketView',
  props: {
    playersCount: {
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
  
}
</script>

<style>
	.drag-zone {
		position: relative;
    width: 2000px;
		/*border: 1px #FFF solid;*/
	}

	

</style>