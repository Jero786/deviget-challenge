import fetch from 'cross-fetch';


export const requestTopEntries = () => {
	return {type: 'FETCH_BOOKING_REQUEST'};
};

export const requestTopEntriesSuccess = () => {
	return {type: 'FETCH_BOOKING_SUCCESS'};
};

export const requestTopEntriesFailure = () => {
	return {type: 'FETCH_BOOKING_FAILURE'};
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

export const actionTypes = {
	FETCH_REQUEST_ENTRIES_REQUEST: 'FETCH_REQUEST_ENTRIES_REQUEST',
	FETCH_REQUEST_ENTRIES_SUCCESS: 'FETCH_REQUEST_ENTRIES_SUCCESS',
	FETCH_REQUEST_ENTRIES_FAILURE: 'FETCH_REQUEST_ENTRIES_FAILURE'
};
