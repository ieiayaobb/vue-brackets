<template>
	<div>
		<round class="round" :round-num=0></round>
		<round class="round" :round-num=1></round>
		<round class="round" :round-num=2></round>
	</div>
</template>

<script>
import Round from './Round'

export default {
  name: 'bracket',
  components: {
    Round
  }
}
</script>

<style>
.round {
	float: left;
	width: 220px;
	margin-left: 20px;
}
</style>