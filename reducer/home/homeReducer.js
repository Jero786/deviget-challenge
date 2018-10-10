import {actionTypes} from 'actions/home/HomeActions';
import {fromJS} from 'immutable';

const emptyState = fromJS({
});

const homeReducer = (state = emptyState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REQUEST_ENTRIES_REQUEST: {
            return state.merge({
            });
        }
        case actionTypes.FETCH_REQUEST_ENTRIES_SUCCESS: {
            return state.merge({
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
