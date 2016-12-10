<template>
	<div>
		<compete></compete>
		<compete></compete>
		<compete></compete>
		<compete></compete>
	</div>
</template>

<script>
import Compete from './Compete'

export default {
  name: 'Round',
  components: {
  	Compete
  }
}
</script>

<style>
.compete {
	margin-top: 40px;
}
</style>