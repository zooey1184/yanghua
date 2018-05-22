export default {
	state: {
		page_action: 'fade',
		uid: null
	},
	mutations: {
		SET_PAGE_ACTION(state, action){
			state.page_action = action
		},
		SET_PAGE_UID(state, uid) {
			state.uid = uid
		}
	},
	actions: {
		set_pageAction(state, action){
			state.commit('SET_PAGE_ACTION', action)
		},
		set_uid(state, uid) {
			state.commit('SET_PAGE_UID', uid)
		}
	},
	getters: {
		get_pageAction(state){
			return state.page_action
		},
		get_uid(state) {
			return state.uid
		}
	}
}
