<template>
	<div 
	class="match" 
	v-bind:class="[
        type, 
        {last: isLast}, 
        {fisrt: isFirst}, 
        {hidden: !visibleStatus},
        {single: isSingle},
        {empty_first: isEmptyFirst}]">
        <div class="players">
    		<playerItem class="player1" :updown=false>
            </playerItem>
    		<playerItem class="player2" :updown=true>
            </playerItem>
        </div>
	</div>
</template>

<script>
import store from '../vuex/store'
import { mapGetters } from 'vuex'
import PlayerItem from './PlayerItem'

export default {
  name: 'Match',
  props: {
    matchNum: {
        default: 1,
        type: Number,
        required: true
    },
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
    },
    matchNum: {
        default: 0,
        type: Number,
        required: true
    }
  },
  data() {
    return {
        isSingle: false,
        isEmptyFirst: false
    }
  },
  computed: {
    ...mapGetters({
        allMatchesLength: 'allMatchesLength'
    }),
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
  },
  watch: {
      allMatchesLength: function(val, oldVal) {
          this.refreshSingleLayout()
      }
  },
  methods: {
      refreshSingleLayout: function() {
        var roundNum = this.$parent.roundNum
        var siblings = this.$parent.$children
        if (roundNum == 1 && this.matchNum % 2 == 1) {
            if(this.visibleStatus) {
                var sibling = siblings[this.matchNum]
                if (!sibling.visibleStatus) {
                    this.isSingle = true
                } else {
                    this.isSingle = false
                }
            }
        }
        if (roundNum == 2) {
            var parent = this.$parent.$parent.$children[0].$children[(this.matchNum - 1) * 2]
            if (!parent.visibleStatus) {
                this.isEmptyFirst = true
            } else {
                this.isEmptyFirst = false
            }
        }
      }
  },
  mounted() {
    this.refreshSingleLayout()
  },
  updated() {
    
  },
  vuex: {
    getters: {
      allMatchesLength: (state) => state.allMatchesLength
    }
  }
}
</script>

<style>
.hidden {
	visibility: hidden;
}

.match {
	position: relative;
	width: 210px;
	padding: 0 20px 0 0;
}

.single {
    top: 33px;
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

.single:before {
    border-right-width: 0;
}

.empty_first:after {
    content: none;
}

</style>