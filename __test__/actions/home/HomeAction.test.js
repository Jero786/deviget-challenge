import {expect} from 'chai';
import {
	requestTopEntries,
	requestTopEntriesSuccess,
	requestTopEntriesFailure,
	actionTypes,
	selectSidebarItem
} from 'actions/home/HomeActions';

describe('Home Actions', () => {

	it('should trigger properly the action when initial home page to fetch reddit top', () => {
		expect(requestTopEntries()).to.deep.equals({type: actionTypes.FETCH_REQUEST_ENTRIES_REQUEST});
	});

	it('should trigger properly the action fetch top entries success', function () {
		expect(requestTopEntriesSuccess().type).to.equals(actionTypes.FETCH_REQUEST_ENTRIES_SUCCESS);
	});
	it('should trigger properly the action selected item on sidebar', function () {
		expect(selectSidebarItem().type).to.equals(actionTypes.SELECT_SIDEBAR_ITEM);
	});

	it('should trigger properly the action fetch top entries failure', function () {
		expect(requestTopEntriesFailure()).to.deep.equals({type: actionTypes.FETCH_REQUEST_ENTRIES_FAILURE});
	});
});
