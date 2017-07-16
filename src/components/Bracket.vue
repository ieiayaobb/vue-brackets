<template>
	<div 
		class="bracket" 
		v-bind:style="{width:bracketWidth, height: bracketHeight}">
		<round 
			:roundNum="n" 
			v-for="n in roundsCount" 
			:isFirst=" n == 1" 
			:isLast="n  == roundsCount" 
			:playersCount="playersCount" 
			:showList=showList>
		</round>
	</div>
</template>

<script>
import store from '../vuex/store'
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
    },
    originPlayersCount: {
        type: Number,
        required: true
    }
  },
  computed: {
  	roundsCount: function() {
  		return Math.log(this.playersCount) / Math.LN2
  	},
  	bracketWidth: function() {
			// return "1000px"
  		return this.roundsCount * 230 + "px";
  	},
  	bracketHeight: function() {
			// return "800px"
  		return this.playersCount / 2 * 70 + "px";
  	},
  	showList: function() {
  		var show_list = []
  		var diff = this.originPlayersCount - this.playersCount / 2

  		for(var i = 1; i <= diff; i++) {
  			show_list.push(this.calculate(i));
  		}
  		return show_list
		}
  },
  components: {
    Round
  },
  methods: {
    calculate: function(index) {
  		var roundsCount = Math.log(this.playersCount / 2) / Math.LN2
  		if (index > 0 && index <= this.playersCount / 4) {
	  		var zeroCount = roundsCount - 1
	  		var base = Math.pow(10, zeroCount)
				var iTemp = parseInt(base, 2) + index - 1;
				var sTemp = iTemp.toString(2).split("").reverse().join("");	
				return parseInt(sTemp,2);	
			} else if (index > this.playersCount / 4 && index <= this.playersCount) {
				return (index - this.playersCount / 4) * 2;
			}
		}
  },
  created() {
		this.$store.dispatch('initAllMatches', this.$children)
  },
}
</script>

<style>
.bracket {
	cursor: move;
	// overflow: auto;
}
.bracket:after {
	content: '\20';
	display: block;
	height: 0;
	clear: both;
}
</style>