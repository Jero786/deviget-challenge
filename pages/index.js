// Resources
import './index.scss';

// Actions
import {fetchTopEntries} from 'actions/home/HomeActions';

// Libs
import {connect} from 'react-redux';
import {fromJS} from 'immutable';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import Layout from 'components/layout';
import Sidebar from 'components/sidebar/Sidebar';
import SidebarItem from 'components/sidebar/SidebarItem';

export class HomeRedditView extends React.PureComponent {

	static async getInitialProps({isServer, store}) {
		await store.dispatch(fetchTopEntries());
		return {isServer}
	}

	render() {
		const {entries, isSidebarExpanded} = this.props;

		let keyIndex = 1;
		const sideBarItemsEl = entries ? entries.map((item) => {
			const author = item.get('author');
			const description = item.get('title');
			const thumbnailSrc = item.get('thumbnail');
			const amountComments = item.get('num_comments');
			const created = item.get('created');
			return (
				<SidebarItem
					key={`side-bar-item-${++keyIndex}`}
					thumbnail={thumbnailSrc}
					dateCreated={created}
					description={description}
					amountComments={amountComments}
					author={author}
				/>
			)
		}) : null;

		return (
			<div className={classNames('dvg-home', {'is-expanded': isSidebarExpanded})}>
				<Layout title="for reddit">
					<div className="dvg-home__sidebar">
						<Sidebar isExpanded={isSidebarExpanded}>
							{sideBarItemsEl}
						</Sidebar>
					</div>
					<div className="dvg-home__content">
					</div>
				</Layout>
			</div>
		);
	}
}

HomeRedditView.propTypes = {
	isSidebarExpanded: PropTypes.bool,
};

const mapStateToProps = (state = fromJS({})) => {
	const homeReducer = state.get('homeReducer');
	return {
		entries: homeReducer.get('entries'),
		isSidebarExpanded: homeReducer.get('isSidebarExpanded')
	}
};

export default connect(mapStateToProps)(HomeRedditView);
