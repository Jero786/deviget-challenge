// Resources
import './index.scss';

// Actions
import {fetchTopEntries} from 'actions/home/HomeActions';

// Libs
import {connect} from 'react-redux';
import {fromJS} from 'immutable';
import React from 'react';

// Components
import Layout from 'components/layout';

export class HomeRedditView extends React.PureComponent {

	static async getInitialProps({isServer, store}) {
		await store.dispatch(fetchTopEntries());
		return {isServer}
	}

	render() {
		const { entries } = this.props;
		return (
			<div className="dvg-home">
				<Layout title="for reddit">
					<div className="dvg-home__sidebar">
						SIDEBAR ITEMS COUNT: { entries ? entries.size : null}
					</div>
					<div className="dvg-home__content">
						CONTENT
					</div>
				</Layout>
			</div>
		);
	}
}

HomeRedditView.propTypes = {
};

const mapStateToProps = (state = fromJS({})) => {
	const homeReducer = state.get('homeReducer');
	return {
		entries: homeReducer.get('entries'),
		isSidebarExpanded: homeReducer.get('isSidebarExpanded')
	}
};

export default connect(mapStateToProps)(HomeRedditView);
