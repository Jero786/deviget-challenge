// Libs
import fetch from 'cross-fetch';

export const actionTypes = {
	FETCH_REQUEST_ENTRIES_REQUEST: 'FETCH_REQUEST_ENTRIES_REQUEST',
	FETCH_REQUEST_ENTRIES_SUCCESS: 'FETCH_REQUEST_ENTRIES_SUCCESS',
	FETCH_REQUEST_ENTRIES_FAILURE: 'FETCH_REQUEST_ENTRIES_FAILURE'
};

export const requestTopEntries = () => {
	return {type: actionTypes.FETCH_REQUEST_ENTRIES_REQUEST};
};

export const requestTopEntriesSuccess = (payload) => {
	return {type: actionTypes.FETCH_REQUEST_ENTRIES_SUCCESS, payload};
};

export const requestTopEntriesFailure = () => {
	return {type: actionTypes.FETCH_REQUEST_ENTRIES_FAILURE};
};

export const fetchTopEntries = () => {
	return dispatch => {
		dispatch(requestTopEntries());
		return fetch('http://reddit-mock.getsandbox.com/top')
			.then(response => response.json())
			.then(json => {
				dispatch(requestTopEntriesSuccess(json));
			})
			.catch(err => {
				dispatch(requestTopEntriesFailure(err));
			})
	}
};

