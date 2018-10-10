// Libs
import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

// Component
import {HomeRedditView} from 'pages/index';

describe('HompePageHome', () => {

	it('should exist', () => {
		expect((<HomeRedditView/>)).to.exist;
	});

	it('should have the properly main classnames', () => {
		const wrapper = render(<HomeRedditView />);

		expect(wrapper.hasClass('dvg-home')).to.be.true;
	});

	it('should have the sidebar element', function () {
		const wrapper = render(<HomeRedditView />);

		expect(wrapper.find('.dvg-home__sidebar').length).to.equal(1);
	});

	it('should have the content element', function () {
		const wrapper = render(<HomeRedditView />);

		expect(wrapper.find('.dvg-home__content').length).to.equal(1);
	});

});
