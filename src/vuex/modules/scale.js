import {
	SCALE_UP,
	SCALE_NORMAL
} from '../mutation-types'

const state = {
	scaleUp: false
}

const getters = {
	scaleUp: state => state.scaleUp
}

const mutations = {
	[SCALE_UP] (state) {
		state.scaleUp = true
	},
	[SCALE_NORMAL] (state) {
		state.scaleUp = false
	}
}

export default {
	state,
	getters,
	mutations
}