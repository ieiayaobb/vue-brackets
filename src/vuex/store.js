import Vuex from 'vuex'
import Vue from 'vue'
import scale from './modules/scale'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	modules: {
		scale
	},
	strict: true
})