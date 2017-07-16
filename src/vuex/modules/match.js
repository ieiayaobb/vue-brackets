import {
	FETCH_MATCH,
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
    },
	[FETCH_MATCH] (state, params) {
        var round = state['allMatches'][params.roundNum - 1]
        if(round != undefined) {
            console.log(round.$children)
            var match = round.$children[params.matchNum - 1]
            console.log(match)
            // state['match'] = match
        }
        
	}
}

export default {
	state,
	getters,
	mutations
}