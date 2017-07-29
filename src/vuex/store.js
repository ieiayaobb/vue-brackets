import Vuex from 'vuex'
import Vue from 'vue'
import scale from './modules/scale'
import match from './modules/match'
import init_data from './modules/init-data'
import capture from './modules/capture'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	modules: {
		scale,
		match,
		init_data,
		capture,
	},
	strict: true
})