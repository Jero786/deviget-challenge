// Libs
import {fromJS} from 'immutable';
import {get} from 'lodash/object';
import {map} from 'lodash/collection';

// Actions
import {actionTypes} from 'actions/home/HomeActions';

const emptyState = fromJS({
	entries: [],
	limit: 50,
	isSidebarExpanded: true
});

const homeReducer = (state = emptyState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_REQUEST_ENTRIES_REQUEST: {
			return state.merge({
			});
		}
		case actionTypes.FETCH_REQUEST_ENTRIES_SUCCESS: {
			return state.merge({
				entries: map(get(action, 'payload.data.children'), child => get(child, 'data'))
			});
		}
		case actionTypes.FETCH_REQUEST_ENTRIES_FAILURE: {
			return state.merge({
			});
		}
		default:
			return state
	}
};

export default homeReducer;
