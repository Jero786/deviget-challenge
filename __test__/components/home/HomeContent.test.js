import React from 'react';
import {expect} from 'chai';
import {mount, render, shallow} from 'enzyme';
import sinon from 'sinon';
import HomeContent from 'components/home/HomeContent';

describe('HomeContent', () => {

	it('should exist', () => {
		expect((<HomeContent/>)).to.exist;
	});

	it('should have the properly classnames', () => {
		const wrapper = render(<HomeContent/>);

		expect(wrapper.hasClass('dvg-home-content')).to.be.true;
	});

	it('should have the image properly', function () {
		const wrapper = render(<HomeContent thumbnail="/image/static/test"/>);

		expect(wrapper.find('.dvg-home-content__image')).to.have.lengthOf(1);
	});

	it('should have the title properly', function () {
		const wrapper = render(<HomeContent title="Brisa title"/>);

		expect(wrapper.find('.dvg-home-content__title')).to.have.lengthOf(1);
	});
	it('should have the description properly', function () {
		const wrapper = render(<HomeContent description="Brisa es mi hija"/>);

		expect(wrapper.find('.dvg-home-content__description').text()).to.equal('Brisa es mi hija');
	});
});
