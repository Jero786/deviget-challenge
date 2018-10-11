// Resources
import './SidebarItem.scss';

// Libs
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class SidebarItem extends React.PureComponent {

	constructor(props) {
		super(props);

		this.onSelect = this.onSelect.bind(this);
		this.onDismiss = this.onDismiss.bind(this);
	}

	onSelect(evt) {
		evt.preventDefault();
		const { onSelect, id } = this.props;

		if (onSelect) {
			onSelect(id);
		}
	}

	onDismiss(evt) {
		evt.preventDefault();
		const { onDismiss, id } = this.props;

		if (onDismiss) {
			onDismiss(id);
		}
	}

	render() {
		const {description, thumbnail, amountComments, author, dateCreated, isVisited}  = this.props;
		const isVisitedStatusEL = isVisited ? null : <i className="dvg-sidebar-item__header-status"></i>;
		return (
			<article className="dvg-sidebar-item" onClick={this.onSelect}>
				<div className="dvg-sidebar-item__header">
					{isVisitedStatusEL}
					<span className="dvg-sidebar-item__header-author">
					{author}
				</span>
					<span className="dvg-sidebar-item__header-created">
					{moment.unix(dateCreated).fromNow()}
				</span>
				</div>

				<div className="dvg-sidebar-item__body">
					<img className="dvg-sidebar-item__body-image" src={thumbnail}/>
					<div className="dvg-sidebar-item__body-description">{description}</div>
					<div className="dvg-sidebar-item__body-arrow"> <span> > </span> </div>
				</div>

				<div className="dvg-sidebar-item__footer" onClick={this.onDismiss}>
				<span className="dvg-sidebar-item__footer-dismiss">
					<span className="dvg-sidebar-item__footer-dismiss-icon">X</span>
					<span className="dvg-sidebar-item__footer-dismiss-text">Dismiss Post</span>
				</span>
					<span className="dvg-sidebar-item__footer-comments">{amountComments} comments</span>
				</div>
			</article>
		);
	}
}

SidebarItem.propTypes = {
	description: PropTypes.string,
	dateCreated: PropTypes.number,
	thumbnail: PropTypes.string,
	amountComments: PropTypes.number,
	onSelect: PropTypes.func,
	onDismiss: PropTypes.func,
	isVisited: PropTypes.bool,
	id: PropTypes.string
};
