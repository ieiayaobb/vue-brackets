<template>
	<div>
		<round class="round"></round>
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