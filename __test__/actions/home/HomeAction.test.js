import {expect} from 'chai';
import {requestTopEntries, requestTopEntriesSuccess, requestTopEntriesFailure} from 'actions/home/HomeActions';

describe('Home Actions', () => {

	it('should trigger properly the action when initial home page to fetch reddit top', () => {
		expect(requestTopEntries()).to.deep.equals({type: 'FETCH_BOOKING_REQUEST'});
	});

	it('should trigger properly the action fetch top entries success', function () {
		expect(requestTopEntriesSuccess()).to.deep.equals({type: 'FETCH_BOOKING_SUCCESS'});
	});
	it('should trigger properly the action fetch top entries failure', function () {
		expect(requestTopEntriesFailure()).to.deep.equals({type: 'FETCH_BOOKING_FAILURE'});
	});
});
