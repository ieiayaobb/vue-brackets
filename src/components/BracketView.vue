<template>
	<div class="drag-zone" ref="drag_zone" @mousedown.prevent="dragStart" @mouseup="dragStop">
		<bracket class="bracket">
		</bracket>
	</div>	
</template>

<script>
import Bracket from './Bracket'


export default {
  name: 'bracketView',
  methods: {
  	dragStart(mde) {
  		console.log(mde)
  		var drag_zone = this.$refs.drag_zone
  		var handle_taget = mde.target
		
		while (handle_taget != drag_zone){
			handle_taget = handle_taget.parentNode
			console.log(handle_taget)
			console.log(drag_zone)
			console.log(handle_taget == drag_zone)
		}
  		window.onmousemove = function(mve) {
  			var left = Math.round(mve.pageX - handle_taget.offsetX) + "px";
  			var top = Math.round(mve.pageY - handle_taget.offsetY) + "px"
  			drag_zone.style.left = left
  			drag_zone.style.top = top
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
		border: 1px #FFF solid;
	}

	.bracket {
		height: 500px;
		cursor: move;
	}
	.bracket:after {
		content: '\20';
    	display: block;
    	height: 0;
    	clear: both;
	}

</style>