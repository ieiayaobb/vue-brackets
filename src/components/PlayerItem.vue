<template>
	<div class="player-item">
		<div class="thumbnail"></div>
		<div class="player">
			<span class="player-name" @click="edit" v-show="editing">{{ label }}</span>
			<input ref="editing" class="editing" @blur="display" type="text" v-model="label" v-show="!editing" />
		</div>
		<div class="score" v-bind:class="updownClass" @click="adjustScore">{{ score }}</div>
		<div v-show="control" class="control">
			<span class="arrow arrow-up" @click="increse"></span>
			<span class="arrow arrow-down" @click="decrese"></span>
			<span class="arrow arrow-right"></span>
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
  	}
  },
  data() {
  	return {
  		editing: true,
  		control: false,
  		label: "原始咆哮",
  		score: 0
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
  		this.$refs.editing.focus()
  	},
  	display: function(e) {
  		this.editing = true
  	},
  	adjustScore: function(e) {
  		this.control = true
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
	position: absolute;
	top: -8px;
	left: -20px;
	width: 0; 
	height: 0; 
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-bottom: 6px solid #FFF;
}

.arrow-down {
	position: absolute;
	top: 26px;
	left: -20px;
	width: 0; 
	height: 0; 
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #FFF;
}

.arrow-right {
	position: absolute;
	top: 6px;
	left: 2px;
	width: 0; 
	height: 0; 
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-left: 6px solid #FFF;
}

.up {
	border-radius: 0 6px 0 0;
}

.down {
	border-radius: 0 0 6px 0;
}
</style>