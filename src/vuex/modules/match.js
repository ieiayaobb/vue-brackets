import {
    INIT_MATCHES_LENGTH,
} from '../mutation-types'

const state = {
	allMatchesLength: 0
}

const getters = {
	allMatchesLength: state => state.allMatchesLength
}

const mutations = {
    [INIT_MATCHES_LENGTH] (state, params) {
        state.allMatchesLength = params
    }
}

export default {
	state,
	getters,
	mutations
}