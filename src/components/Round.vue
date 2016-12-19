<template>
	<div class="round">
		<match 
		:even="n % 2 != 0" v-for="n in matchNum" 
		:isLast="isLast" 
		:isFirst="isFirst" 
		v-bind:style="{height: roundHeight}" 
		:visibleStatus="visibleStatus(n)">
		</match>
	</div>
</template>

<script>
import Match from './Match'

export default {
  name: 'Round',
  data: function() {
    return {
      show: true
    }
  },
  props: {
    roundNum: {
        default: 1,
        type: Number,
        required: true
    },
    isFirst: {
      default: false,
      type: Boolean,
      required: false
    },
    isLast: {
      default: false,
      type: Boolean,
      required: false
    },
    playersCount: {
        type: Number,
        required: true
    },
    showList: {
        type: Array,
        required: true
    }
  },
  computed: {
  	roundHeight: function() {
  		return Math.pow(2, this.roundNum - 1) * 92 + "px"
  	},
    matchNum: function() {
      var num = this.playersCount / 2 / (Math.pow(2, this.roundNum - 1));
      return num
    }
  },
  methods: {
    visibleStatus: function(index) {
    	if (this.isFirst){
    		for (var i = 0; i < this.showList.length; i++) {
    			if (this.showList[i] == index){
    				return true
    			}
    		}
        	return false
    	} else {
    		return true
    	}
    }
  },
  components: {
  	Match
  }
}
</script>

<style>
.round {
	float: left;
	margin-left: 20px;
}
</style>