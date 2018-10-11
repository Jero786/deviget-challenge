import './HomeContent.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class HomeContent extends React.PureComponent {
  render() {
  	const { thumbnail, title, description } = this.props;
    return (
      <article className="dvg-home-content">
				<h1 className="dvg-home-content__title" >{title}</h1>
				<img className="dvg-home-content__image" src={thumbnail}/>
				<p className="dvg-home-content__description" >{description}</p>
			</article>
    );
  }
}

HomeContent.propTypes = {
	title: PropTypes.string,
	thumbnail: PropTypes.string,
	description: PropTypes.string
};
