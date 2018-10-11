// Resources
import './SidebarItem.scss';

// Libs
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


function SidebarItem({description, thumbnail, amountComments, author, dateCreated}) {
	return (
		<div className="dvg-sidebar-item">
			<div className="dvg-sidebar-item__header">
				<i className="dvg-sidebar-item__header-status"></i>
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

			<div className="dvg-sidebar-item__footer">
				<span className="dvg-sidebar-item__footer-dismiss">
					<span className="dvg-sidebar-item__footer-dismiss-icon">X</span>
					<span className="dvg-sidebar-item__footer-dismiss-text">Dismiss Post</span>
				</span>
				<span className="dvg-sidebar-item__footer-comments">{amountComments} comments</span>
			</div>
		</div>
	);
}

SidebarItem.propTypes = {
	description: PropTypes.string,
	dateCreated: PropTypes.number,
	thumbnail: PropTypes.string,
	amountComments: PropTypes.number
};

SidebarItem.defaultProps = {};

export default SidebarItem;
