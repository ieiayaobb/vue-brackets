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
		var data = response.messages
		
		var root;
		var rounds = []
		_.forEach(data, function (match) {
			if (match.pid == '-1') {
				root = match
			}
		})

		rounds.push([root])

		var level = 0
		var buildRoot = function (beginNode) {
			level ++
			_.forEach(data, function (node) {
				if (node.pid == beginNode.id) {
					if (!rounds[level]) {
						rounds[level] = []
					}
					rounds[level].push(node)

					buildRoot(node)
				}
			})
			level --
		}
		buildRoot(root)
		
		var rounds_length = rounds.length
		var possibleCount = rounds[rounds.length - 1].length
		if (possibleCount * 2 == Math.pow(2, rounds_length)) {
			state.totalCount = possibleCount * 2
		} else {
			state.totalCount = possibleCount + rounds[rounds.length - 2].length * 2
		}

		state.initData = rounds.reverse()
	},
}

export default {
	state,
	getters,
	mutations
}