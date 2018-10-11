// Resources
import './Sidebar.scss';

// Libs
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Sidebar extends React.PureComponent {

	constructor(props) {
		super(props);

		this.onDismissAll = this.onDismissAll.bind(this);
	}

	onDismissAll(evt) {
		evt.preventDefault();

		const {onDismissAll} = this.props;

		if (onDismissAll) {
			onDismissAll();
		}
	}

	render() {
		const {children, isExpanded} = this.props;
		const classNameStyle = classNames('dvg-sidebar', {'is-expanded': isExpanded});
		return (
			<aside className={classNameStyle}>
				<h1 className="dvg-sidebar__header">
					Reddit Post
				</h1>
				{children}
				<div className="dvg-sidebar__footer" onClick={this.onDismissAll}>
					Dismiss all
				</div>
			</aside>
		);
	}
}

Sidebar.propTypes = {
	children: PropTypes.any,
	isExpanded: PropTypes.bool,
	onDismissAll: PropTypes.func
};
