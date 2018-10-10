// Resources
import './Sidebar.scss';

// Libs
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Sidebar extends React.PureComponent {
	render() {
		const { children, isExpanded } = this.props;
		const classNameStyle = classNames('dvg-sidebar', {'is-expanded' : isExpanded});
		return (
			<aside className={classNameStyle}>
				<h1 className="dvg-sidebar__header">
					Reddit Post
				</h1>
				{children}
				<div className="dvg-sidebar__footer">
					Dismiss all
				</div>
			</aside>
		);
	}
}

Sidebar.propTypes = {
	children: PropTypes.any,
	isExpanded: PropTypes.bool
};
