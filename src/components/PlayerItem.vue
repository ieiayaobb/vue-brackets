<template>
	<div class="player-item">
		<div class="thumbnail"></div>
		<div class="player" @mousedown.stop="edit">
			<!-- <span class="player-name" v-show="editing">{{ label }}</span> -->
			<input ref="editing" class="editing" @blur="display" type="text" v-model="playerInfo.name" />
		</div>
		<div class="score" v-bind:class="updownClass" @click.stop="adjustScore">{{ playerInfo.score }}</div>
		<div v-show="control" class="control">
			<div class="arrow-score-up-btn" @click.stop="increse">
				<span class="arrow arrow-up"></span>
			</div>
			<div class="arrow-score-down-btn" @click.stop="decrese">
				<span class="arrow arrow-down"></span>
			</div>
			<div class="arrow-promotion-btn">
				<span class="arrow arrow-right"></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PlayerItem',
  props: {
  	updown: {
  		type: Boolean,
  		required: true
  	},
	playerInfo: {
		default: {},
		type: Object,
		required: false
	}
  },
  data() {
  	return {
  		editing: true,
  		control: false,
  	}
  },
  computed: {
  	updownClass: function() {
  		if (this.updown) {
  			return "down";
  		} else {
  			return "up";
  		}
  	}
  },
  methods: {
  	edit: function(e) {
  		this.editing = false
  		console.log(this.$refs.editing)
  		// this.$refs.editing.focus()
  	},
  	display: function(e) {
  		this.editing = true
  	},
  	adjustScore: function(e) {
  		this.control = !this.control
  	},
  	increse: function(e) {
  		this.score ++;
  	},
  	decrese: function(e) {
  		this.score --;
  	}
  }
}
</script>

<style>
.player-item {
	float: left;
	margin-top: 2px;
}

.thumbnail {
	width: 24px;
	height: 24px;
	float: left;
	background-color: #FFF;
}

.player {
	float: left;
	background-color: #2B2F35;
	width: 136px;
	height: 24px;
}

.player-name {
	color: #FFF;
	float: left;
	margin: 4px 0 0 8px;
	font-size: 14px;
	cursor: text;
	width: 126px;
}

.editing {
	margin: 2px 0 0 8px;
	width:100%;
	background:transparent;
	font-size:14px;
	border: none;
	color: #FFF;
}

.holder {
	width: 24px;
	height: 24px;
	float: left;
	background-color: #FFF;
}

.score {
	float: left;
	color: #FFF;
	width: 28px;
	height: 24px;
	background-color: #373D44;
	text-align: center;
	padding-top: 6px;
	cursor: pointer;
}

.control {
	float: left;
	position: relative;
}

.arrow {
	cursor: pointer;
}

.arrow-up {
	position:relative;
	top: -9px;
	left: 6px;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-bottom: 6px solid #FFF;
}

.arrow-score-up-btn {
	position: relative;
	background-color: #373D44;
	top: -15px;
	left: -26px;
	width: 24px;
	height: 12px;
	border-radius: 2px;
}

.arrow-down {
	position: relative;
	top: 10px;
	left: 5px;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #FFF;
}

.arrow-score-down-btn {
	position: relative;
	background-color: #373D44;
	top: 15px;
	left: -26px;
	width: 24px;
	height: 12px;
	border-radius: 2px;
}

.arrow-right {
	position: absolute;
	top: 6px;
	left: 4px;
	width: 0; 
	height: 0; 
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-left: 6px solid #FFF;
}

.arrow-promotion-btn {
	position: absolute;
	background-color: #373D44;
	top: 2px;
	left: 5px;
	width: 14px;
	height: 24px;
	border-radius: 2px;
}

.up {
	border-radius: 0 6px 0 0;
}

.down {
	border-radius: 0 0 6px 0;
}
</style>