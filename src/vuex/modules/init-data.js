import {
	FETCH_MATCH,
	INIT_BRACKET
} from '../mutation-types'

const state = {
	initData: [],
	match: {},
	totalCount: 0
}

const getters = {
	initData: state => state.initData,
	match: state => state.match,
	totalCount: state => state.totalCount
}

const mutations = {
	[INIT_BRACKET] (state, response) {
		state.initData = response.messages
		var firstRound = response.messages[0]
		var firstFilterdRound = _.reject(firstRound, function(e) {
			return _.isEmpty(e)
		})

		if (firstFilterdRound.length == firstRound.length) {
			state.totalCount = firstFilterdRound.length * 2
		} else {
			state.totalCount = response.messages[1].length * 2 + firstFilterdRound.length
		}

	}
	// [INIT_BRACKET] (state, response) {
	// 	var data = response.messages
		
	// 	var root;
	// 	var rounds = []
	// 	_.forEach(data, function (match) {
	// 		if (match.pid == '-1') {
	// 			root = match
	// 		}
	// 	})

	// 	rounds.push([root])

	// 	var level = 0
	// 	var buildRoot = function (beginNode) {
	// 		level ++
	// 		_.forEach(data, function (node) {
	// 			if (node.pid == beginNode.id) {
	// 				if (!rounds[level]) {
	// 					rounds[level] = new Array(Math.pow(2, level))
	// 				}
	// 				(function(node, level){
	// 					_.forEach(rounds[level], function(ele, i) {
	// 						console.log(level, i)
	// 						if(!ele) {
	// 							rounds[level][i] = node
	// 							return false
	// 						}
	// 					})
	// 				}(node, level))

	// 				buildRoot(node)
	// 			}
	// 		})
	// 		level --
	// 	}
	// 	buildRoot(root)

	// 	var rounds_length = rounds.length
	// 	var possibleCount = rounds[rounds.length - 1].length
	// 	state.totalCount = possibleCount * 2
	// 	// if (possibleCount * 2 == Math.pow(2, rounds_length)) {
	// 	// 	state.totalCount = possibleCount * 2
	// 	// } else {
	// 	// 	state.totalCount = possibleCount + rounds[rounds.length - 2].length * 2
	// 	// }

	// 	state.initData = rounds.reverse()
	// },
}

export default {
	state,
	getters,
	mutations
}