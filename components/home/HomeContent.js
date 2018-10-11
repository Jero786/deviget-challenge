// Resources
import './HomeContent.scss';

// Libs
import React from 'react';
import PropTypes from 'prop-types';

export default class HomeContent extends React.PureComponent {

	constructor(props) {
		super(props);

		this.onSelectContent = this.onSelectContent.bind(this);
	}

	onSelectContent(evt) {
		evt.preventDefault();
		const { onSelectContent, id } = this.props;
		if (onSelectContent) {
			onSelectContent(id)
		}
	}

  render() {
  	const { thumbnail, title, description} = this.props;
    return (
      <div className="dvg-home-content" onClick={this.onSelectContent}>
				<h1 className="dvg-home-content__title" >{title}</h1>
				<img className="dvg-home-content__image" src={thumbnail}/>
				<p className="dvg-home-content__description" >{description}</p>
			</div>
    );
  }
}

HomeContent.propTypes = {
	title: PropTypes.string,
	thumbnail: PropTypes.string,
	description: PropTypes.string,
	id: PropTypes.string,
	onSelectContent: PropTypes.func
};
