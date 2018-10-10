import './index.scss';
import React from 'react';
import {fromJS} from 'immutable';
import {fetchTopEntries} from 'actions/home/HomeActions';
import {connect} from 'react-redux';
import Layout from 'components/layout';

export class HomeRedditView extends React.PureComponent {

	static async getInitialProps({isServer, store}) {
		await store.dispatch(fetchTopEntries());
		return {isServer}
	}

	render() {
		return (
			<div className="dvg-home">
				<Layout title="for reddit">
					<div className="dvg-home__sidebar">
						SIDEBAR
					</div>
					<div className="dvg-home__content">
						CONTENT
					</div>
				</Layout>
			</div>
		);
	}
}

HomeRedditView.propTypes = {};

const mapStateToProps = (state = fromJS({})) => {
	const homeReducer = state.get('homeReducer');
	return {
		//accordionIndexExpanded: homeReducer.get('accordionIndexExpanded')
	}
};

export default connect(mapStateToProps)(HomeRedditView);
