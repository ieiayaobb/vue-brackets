import {
  loadMock
} from '../api/index'

import {
	SCALE_UP,
	SCALE_NORMAL,
	INIT_BRACKET
} from '../vuex/mutation-types'

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