import {
	FETCH_MATCH,
    INIT_MATCHES,
} from '../mutation-types'

const state = {
	match: {}
}

const getters = {
	match: state => state.match
}

const mutations = {
    [INIT_MATCHES] (state, params) {
        state['allMatches'] = params
    },
	[FETCH_MATCH] (state, params) {
        var round = state['allMatches'][params.roundNum - 1]
        if(round != undefined) {
            var match = round.$children[params.sequenceNum - 1]
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