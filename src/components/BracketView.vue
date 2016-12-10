<template>
	<draggable @start="dragging=true" @end="dragging=false">
		<bracket class="bracket">
			
		</bracket>
	</draggable>	
</template>

<script>
import Bracket from './Bracket'
import draggable from 'vuedraggable'


export default {
  name: 'bracketView',
  methods: {
  },
  components: {
  	draggable,
    Bracket
  },
  
}
</script>

<style>
	.bracket {
		height: 500px;
	}
	.bracket:after {
		content: '\20';
    	display: block;
    	height: 0;
    	clear: both;
	}
</style>