// Libs
import React from 'react';
import {expect} from 'chai';
import {mount, render, shallow} from 'enzyme';
import sinon from 'sinon';
import {get} from 'lodash/object';

// Components
import Sidebar from 'components/sidebar/Sidebar';
import SidebarItem from 'components/sidebar/SidebarItem';

// Fixtures
import fixture from '../../fixtures/entries';

const ENTRIES = get(fixture, 'data.children').map(children => children.data);

describe('Sidebar', () => {

	it('should exist', () => {
		expect((<Sidebar><SidebarItem></SidebarItem></Sidebar>)).to.exist;
	});

	it('should have the properly classnames', () => {
		const wrapper = render(<Sidebar><SidebarItem></SidebarItem></Sidebar>);

		expect(wrapper.hasClass('dvg-sidebar')).to.be.true;
	});

	it('should contain sidebar items', function () {
		const wrapper = render(<Sidebar><SidebarItem></SidebarItem></Sidebar>);

		expect(wrapper.find('.dvg-sidebar-item').length).to.equal(1);
	});

	it('should indicate if it is expanded or not', function () {
		const wrapper = render(<Sidebar isExpanded={true}><SidebarItem description="hello brisa"></SidebarItem></Sidebar>);

		expect(wrapper.hasClass('is-expanded')).to.be.true;
	});

	it('should show properly the thumbnail section of each seaction item', function () {
		const wrapper = render(
			<Sidebar isExpanded={true}>
				<SidebarItem description="hello brisa" thumbnail={ENTRIES[0].thumbnail}/>
			</Sidebar>);

		expect(wrapper.find('.dvg-sidebar-item__body-image').length).to.equal(1);
	});

	it('should show the amount of comment properly', function () {
		const wrapper = render(
			<Sidebar isExpanded={true}>
				<SidebarItem description="hello brisa" amountComments={ENTRIES[0].num_comments}/>
			</Sidebar>);

		expect(wrapper.find('.dvg-sidebar-item__footer-comments').text()).to.equal('958 comments');
	});

	it('should show the author properly', function () {
		const wrapper = render(
			<Sidebar isExpanded={true}>
				<SidebarItem description="hello brisa" author={ENTRIES[0].author}/>
			</Sidebar>);

		expect(wrapper.find('.dvg-sidebar-item__header-author').text()).to.equal('washedupwornout');
	});

	it('should indicate when was created', function () {
		const wrapper = render(
			<Sidebar isExpanded={true}>
				<SidebarItem description="hello brisa" dateCreated={ENTRIES[0].created}/>
			</Sidebar>);

		expect(wrapper.find('.dvg-sidebar-item__header-created').text()).to.equal('4 years ago');
	});
});
