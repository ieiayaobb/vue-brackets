<template>
	<div class="bracket" v-bind:style="{
		    width: bracketWidth, 
		    height: bracketHeight}">
		<round 
		v-for="n in roundsCount" 
		:roundNum="n" 
		:isFirst="n == 1" 
		:isLast="n == roundsCount" 
		:playersCount="playersCount" 
		:showList=showList>
		</round>
	</div>
</template>

<script>
import store from '../vuex/store'
import { mapGetters } from 'vuex'
import Round from './Round'
import _ from 'lodash'

export default {
	name: 'bracket',
	data() {
		return {
			tree: []
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
	computed: {
		...mapGetters({
			// totalCount: 'totalCount'
		}),
		roundsCount: function () {
			return Math.log(this.playersCount) / Math.LN2
		},
		roundsData: function () {
		},
		bracketWidth: function () {
			// return "1000px"
			return this.roundsCount * 230 + "px";
		},
		bracketHeight: function () {
			// return "800px"
			return this.playersCount / 2 * 70 + "px";
		},
		showList: function () {
			var show_list = []
			var diff = this.originPlayersCount - this.playersCount / 2

			for (var i = 1; i <= diff; i++) {
				show_list.push(this.calculate(i));
			}
			return show_list
		}
	},
	
	mounted() {
		// console.log(this.$el)
	},
	components: {
		Round
	},
	methods: {
		calculate: function (index) {
			var roundsCount = Math.log(this.playersCount / 2) / Math.LN2
			if (index > 0 && index <= this.playersCount / 4) {
				var zeroCount = roundsCount - 1
				var base = Math.pow(10, zeroCount)
				var iTemp = parseInt(base, 2) + index - 1;
				var sTemp = iTemp.toString(2).split("").reverse().join("");
				return parseInt(sTemp, 2);
			} else if (index > this.playersCount / 4 && index <= this.playersCount) {
				return (index - this.playersCount / 4) * 2;
			}
		}
	},
	watch: {
		originPlayersCount: function (val, oldVal) {
			var total = 0
			this.$children.forEach(round => {
				round.$children.forEach(match => {
					if (match.visibleStatus) {
						total++;
					}
				})
			})
			this.$store.dispatch('initAllMatchesLength', total)
		}
	},
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