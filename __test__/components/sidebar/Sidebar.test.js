// Libs
import React from 'react';
import {expect} from 'chai';
import {fromJS} from 'immutable';

// Components
import Sidebar from 'components/sidebar/Sidebar';

describe('Sidebar', () => {

	it('should exist', () => {
		expect((<Sidebar entries={fromJS([])}></Sidebar>)).to.exist;
	});

});
