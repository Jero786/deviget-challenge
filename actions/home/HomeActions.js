// Libs
import fetch from 'cross-fetch';

export const actionTypes = {
	FETCH_REQUEST_ENTRIES_REQUEST: 'FETCH_REQUEST_ENTRIES_REQUEST',
	FETCH_REQUEST_ENTRIES_SUCCESS: 'FETCH_REQUEST_ENTRIES_SUCCESS',
	FETCH_REQUEST_ENTRIES_FAILURE: 'FETCH_REQUEST_ENTRIES_FAILURE',
	ON_DISMISS_SIDEBAR_ITEM: 'ON_DISMISS_SIDEBAR_ITEM',
	SELECT_SIDEBAR_ITEM: 'SELECT_SIDEBAR_ITEM',
	ON_TOGGLE_SIDEBAR: 'ON_TOGGLE_SIDEBAR',
};

export const requestTopEntries = () => {
	return {type: actionTypes.FETCH_REQUEST_ENTRIES_REQUEST};
};

export const requestTopEntriesSuccess = (payload) => {
	return {type: actionTypes.FETCH_REQUEST_ENTRIES_SUCCESS, payload};
};

export const selectSidebarItem = (payload) => {
	return {type: actionTypes.SELECT_SIDEBAR_ITEM, payload};
};

export const onDismissSidebarItem = (payload) => {
	return {type: actionTypes.ON_DISMISS_SIDEBAR_ITEM, payload};
};

export const requestTopEntriesFailure = () => {
	return {type: actionTypes.FETCH_REQUEST_ENTRIES_FAILURE};
};

export const onToggleSideBar = () => {
	return {type: actionTypes.ON_TOGGLE_SIDEBAR};
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
