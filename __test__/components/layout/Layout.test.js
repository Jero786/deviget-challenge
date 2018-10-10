import React from 'react';
import {expect} from 'chai';
import {mount, render, shallow} from 'enzyme';
import sinon from 'sinon';
import Layout from 'components/layout';

describe('Layout', () => {

  it('should exist', () => {
    expect((<Layout/>)).to.exist;
  });

  it('should have the properly classnames', () => {
		const wrapper = render(<Layout><div></div></Layout>);

    expect(wrapper.hasClass('dvg-layout')).to.be.true;
  });


});
