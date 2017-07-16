import {
	INIT_BRACKET
} from '../mutation-types'

const state = {
	initData: []
}

const getters = {
	initData: state => state.initData
}

const mutations = {
	[INIT_BRACKET] (state, response) {
		state.initData = response.messages
	}
}

export default {
	state,
	getters,
	mutations
}