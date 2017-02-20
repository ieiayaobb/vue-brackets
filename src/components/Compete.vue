<template>
  <div class="compete">
    <playerItem class="player1" :updown=false></playerItem>
    <playerItem class="player2" :updown=true></playerItem>
  </div>
</template>

<script>
import PlayerItem from './PlayerItem'

export default {
  name: 'CompeteItem',
  components: {
  	PlayerItem
  }
}
</script>

<style>
.compete {
	float: left;
	width: 220px;
}

</style>