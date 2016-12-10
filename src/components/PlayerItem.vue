<template>
	<div class="player-item">
		<div class="thumbnail"></div>
		<div class="player">
			<span class="player-name">波多野结衣</span>
		</div>
		<div class="score" v-bind:class="updownClass">3</div>
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
  computed: {
  	updownClass: function() {
  		if (this.updown) {
  			return "down";
  		} else {
  			return "up";
  		}
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
	width: 160px;
	height: 24px;
}

.player-name {
	color: #FFF;
	float: left;
	margin: 4px 0 0 8px;
	font-size: 14px;
}

.score {
	float: left;
	color: #FFF;
	width: 28px;
	height: 20px;
	background-color: #373D44;
	text-align: center;
	padding-top: 4px;
}

.up {
	border-radius: 0 6px 0 0;
}

.down {
	border-radius: 0 0 6px 0;
}
</style>