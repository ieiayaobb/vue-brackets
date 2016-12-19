<template>
	<div 
	id="bracket-view"
	class="drag-zone dragdealer" 
	v-bind:class="[{scale: scaleUp}]">
		<bracket 
		:playersCount=playersCount 
		:originPlayersCount=originPlayersCount 
		class="bracket handle">
		</bracket>
	</div>	
</template>

<script>
import { mapGetters } from 'vuex'
import Bracket from './Bracket'

import Dragdealer from 'dragdealer'

export default {
  name: 'bracketView',
  computed: mapGetters({
    scaleUp: 'scaleUp'
  }),
  data() {
  	return {
  		dragdealer: null,
  		move: false
  	}
  },
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
  mounted () {
  	this.dragdealer = new Dragdealer('bracket-view', {
	    x: 0,
	    // Start in the bottom-left corner
	    y: 0,
	    vertical: true,
	    speed: 0.2,
	    loose: true
	  });
  },
  beforeUpdate () {
  	// this.dragdealer.reflow()
  },
  methods: {
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
	/*.drag-zone {*/
		/*position: relative;*/
    	/*width: 2000px;*/
		/*border: 1px #FFF solid;*/
	/*}*/
	.dragdealer {
		overflow: hidden;
	}

  .scale {
    zoom: 75%;
  }
</style>