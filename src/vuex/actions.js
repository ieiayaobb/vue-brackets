import {
  loadMock
} from '../api/index'

import {
	SCALE_UP,
	SCALE_NORMAL,
	INIT_MATCHES_LENGTH,
	FETCH_MATCH,
	INIT_BRACKET
} from '../vuex/mutation-types'

export const initAllMatchesLength = ({ commit }, params) => {
	commit(INIT_MATCHES_LENGTH, params)
}

export const getMatchByPos = ({ commit }, params) => {
	commit(FETCH_MATCH, params)
}

export const scaleUp = ({ commit }) => {
	commit(SCALE_UP)
}

export const scaleNormal = ({ commit }) => commit(SCALE_NORMAL)

export const initBracket = ({ commit }) => {
  loadMock(messages => {
    commit(INIT_BRACKET, {
      messages
    })
  })
}