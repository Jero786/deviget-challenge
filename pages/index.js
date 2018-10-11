// Resources
import './index.scss';

// Actions
import {fetchTopEntries, selectSidebarItem, onDismissSidebarItem, onToggleSideBar, onDismissAll} from 'actions/home/HomeActions';
import {bindActionCreators} from 'redux';

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
import HomeContent from 'components/home/HomeContent';

export class HomeRedditView extends React.PureComponent {

	static async getInitialProps({isServer, store}) {
		await store.dispatch(fetchTopEntries());
		return {isServer}
	}

	render() {
		const {entries, isSidebarExpanded, onSelectSidebarItem, selectItemId, entriesVisited, onDismissSidebarItem, entriesDismissed, onToggleSideBar, onDismissAll, isDismissAll} = this.props;

		let keyIndex = 1;
		const sideBarItemsEl = !isDismissAll && entries ? entries.filter(item => !entriesDismissed.includes(item.get('id')))
			.map((item) => {
				const author = item.get('author');
				const description = item.get('title');
				const thumbnailSrc = item.get('thumbnail');
				const amountComments = item.get('num_comments');
				const created = item.get('created');
				const id = item.get('id');
				return (
					<SidebarItem
						key={`side-bar-item-${++keyIndex}`}
						thumbnail={thumbnailSrc}
						dateCreated={created}
						description={description}
						amountComments={amountComments}
						author={author}
						onSelect={onSelectSidebarItem}
						onDismiss={onDismissSidebarItem}
						isVisited={entriesVisited.includes(id)}
						id={id}
					/>
				)
			}) : null;

		const selectItem = selectItemId && entries ? entries.find(item => item.get('id') === selectItemId) : null;
		const bodyContentEl = selectItem ? (
			<HomeContent
				thumbnail={selectItem.get('thumbnail')}
				title={selectItem.get('author')}
				description={selectItem.get('title')}
				id={selectItem.get('id')}
				onSelectContent={onToggleSideBar}
			/>
		) : null;

		return (
			<section className={classNames('dvg-home', {'is-expanded': isSidebarExpanded})}>
				<Layout title="for reddit">
					<div className="dvg-home__sidebar">
						<Sidebar onDismissAll={onDismissAll} isExpanded={isSidebarExpanded}>
							{sideBarItemsEl}
						</Sidebar>
					</div>
					<section className="dvg-home__content">
						{bodyContentEl}
					</section>
				</Layout>
			</section>
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
		selectItemId: homeReducer.get('selectItemId'),
		isSidebarExpanded: homeReducer.get('isSidebarExpanded'),
		entriesVisited: homeReducer.get('entriesVisited'),
		entriesDismissed: homeReducer.get('entriesDismissed'),
		isDismissAll: homeReducer.get('isDismissAll'),
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSelectSidebarItem: bindActionCreators(selectSidebarItem, dispatch),
		onDismissSidebarItem: bindActionCreators(onDismissSidebarItem, dispatch),
		onToggleSideBar: bindActionCreators(onToggleSideBar, dispatch),
		onDismissAll: bindActionCreators(onDismissAll, dispatch),
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeRedditView);
