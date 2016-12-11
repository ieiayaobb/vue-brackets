<template>
	<div class="bracket" v-bind:style="{width:bracketWidth, height: bracketHeight}">
		<round :roundNum="n" v-for="n in roundsCount" :isFirst=" n == 1" :isLast="n  == roundsCount" :playersCount="playersCount"></round>
	</div>
</template>

<script>
import Round from './Round'

export default {
  name: 'bracket',
  props: {
  	bracketWidth: {
  		type: Number,
  		required :false
  	},
    playersCount: {
        type: Number,
        required: true
    }
  },
  computed: {
  	roundsCount: function() {
  		return Math.log(this.playersCount) / Math.LN2
  	},
  	bracketWidth: function() {
  		return this.roundsCount * 280 + "px";
  	},
  	bracketHeight: function() {
  		return this.playersCount / 2 * 100 + "px";
  	}
  },
  components: {
    Round
  }
}
</script>

<style>
.bracket {
	cursor: move;
}
.bracket:after {
	content: '\20';
	display: block;
	height: 0;
	clear: both;
}
</style>