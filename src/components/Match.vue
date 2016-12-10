<template>
	<div class="match">
		<playerItem class="player1" :updown=false></playerItem>
		<playerItem class="player2" :updown=true></playerItem>
	</div>
</template>

<script>
import PlayerItem from './PlayerItem'

export default {
  name: 'Match',
  components: {
  	PlayerItem
  }
}
</script>

<style>
.match {
	position: relative;
	float: left;
	width: 220px;
	margin-top: 40px;
	padding: 20px;
}

.match:before {
	content: ' ';
    position: absolute;;
    display: block;
    width: 20px;
    height: 50%;
    color: #FFF;
    right: 20px;
    bottom: 0;
    border: 2px solid;
    border-bottom-width: 0;
    border-left-width: 0;
}

.match:after {
	content: ' ';
    position: absolute;
    display: block;
    width: 20px;
    height: 2px;
    background: #FFF;
    top: 50%;
    left: -20px;
}
</style>