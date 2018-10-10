// Libs
import {actionTypes} from 'actions/home/HomeActions';
import {expect} from 'chai';
import {fromJS} from 'immutable';

// Reducer
import homeReducer from 'reducer/home/homeReducer';

describe('Home Reducer', () => {

	it('should init default state', () => {
		const store = undefined;
		const action = {};

		const result = homeReducer(store, action);
		expect(result.get('entries').size).to.equal(0);
		expect(result.get('limit')).to.equal(50);
	});

});
