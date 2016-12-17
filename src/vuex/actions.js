import {
	SCALE_UP,
	SCALE_NORMAL
} from '../vuex/mutation-types'

export const scaleUp = ({ commit }) => {
	commit(SCALE_UP)
}

export const scaleNormal = ({ commit }) => commit(SCALE_NORMAL)