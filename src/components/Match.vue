<template>
	<div 
	class="match" 
	v-bind:class="[type, {last: isLast}, {fisrt: isFirst}, {hidden: !visibleStatus}]">
        <div class="players">
    		<playerItem class="player1" :updown=false></playerItem>
    		<playerItem class="player2" :updown=true></playerItem>
        </div>
	</div>
</template>

<script>
import PlayerItem from './PlayerItem'

export default {
  name: 'Match',
  props: {
    even: {
        default: true,
        type: Boolean,
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
    visibleStatus: {
        default: true,
        type: Boolean,
        required: true
    }
  },
  computed: {
    type: function() {
        if (this.even) {
            return "match-even";
        } else {
            return "match-odd";
        }
    }
  },
  components: {
  	PlayerItem
  }
}
</script>

<style>
.hidden {
	visibility: hidden;
}

.match {
	position: relative;
	width: 260px;
	padding: 20px;
}

.match:after {
    content: ' ';
    position: absolute;
    display: block;
    width: 15px;
    height: 2px;
    background: #FFF;
    top: 50%;
    left: 0px;
    margin-left: -20px;
}

.match-even:before {
	content: ' ';
    position: absolute;;
    display: block;
    width: 15px;
    height: 50%;
    color: #FFF;
    right: 0px;
    bottom: 0;
    border: 2px solid;
    border-bottom-width: 0;
    border-left-width: 0;
}

.match-odd:before {
    content: ' ';
    position: absolute;;
    display: block;
    width: 15px;
    height: 50%;
    color: #FFF;
    right: 0px;
    top: 0;
    border: 0 solid;
    border-right-width: 2px;
    border-bottom-width: 2px;
}

.players {
    position: absolute;
    width: 220px;
    height: 52px;
    top: 50%;
    margin-top: -26px;
}

.fisrt:after {
    content: none;    
}

.last:before {
    content: none;
}

</style>