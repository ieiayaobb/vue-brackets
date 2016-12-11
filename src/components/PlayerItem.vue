<template>
	<div class="player-item">
		<div class="thumbnail"></div>
		<div class="player">
			<span class="player-name" @click="edit" v-show="editing">{{ label }}</span>
			<input ref="editing" class="editing" @blur="display" type="text" v-model="label" v-show="!editing" />
		</div>
		<div class="score" v-bind:class="updownClass" @click="adjustScore">3</div>
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
  		label: "原始咆哮"
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
  		// console.log(this.$refs.editing)
  		this.$refs.editing.focus()
  	},
  	display: function(e) {
  		this.editing = true
  	},
  	adjustScore: function(e){
  		console.log(e)
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

.up {
	border-radius: 0 6px 0 0;
}

.down {
	border-radius: 0 0 6px 0;
}
</style>