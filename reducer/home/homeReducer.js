// Libs
import {fromJS} from 'immutable';
import {get} from 'lodash/object';
import {map} from 'lodash/collection';

// Actions
import {actionTypes} from 'actions/home/HomeActions';

const emptyState = fromJS({
	entries: [],
	entriesVisited: [],
	entriesDismissed: [],
	limit: 50,
	isSidebarExpanded: true,
	selectItemId: null
});

const homeReducer = (state = emptyState, action) => {
	switch (action.type) {

		case actionTypes.FETCH_REQUEST_ENTRIES_REQUEST: {
			return state.merge({
			});
		}

		case actionTypes.FETCH_REQUEST_ENTRIES_SUCCESS: {
			return state.merge({
				entries: map(get(action, 'payload.data.children'), child => get(child, 'data')),
			});
		}

		case actionTypes.FETCH_REQUEST_ENTRIES_FAILURE: {
			return state.merge({
			});
		}

		case actionTypes.ON_DISMISS_SIDEBAR_ITEM: {
			return state.merge({
				entriesDismissed: state.get('entriesDismissed').push(action.payload)
			});
		}

		case actionTypes.SELECT_SIDEBAR_ITEM: {
			return state.merge({
				selectItemId: action.payload,
				entriesVisited: state.get('entriesVisited').push(action.payload)
			});
		}

		default:
			return state
	}
};

export default homeReducer;
