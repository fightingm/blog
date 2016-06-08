

import React from 'react';
import '../css/MainHeader';

export default class MainHeader extends React.Component{
	render() {
		return (
			<section className="MainHeader">
				<div className="wrap">
					<p>{this.props.kilo}</p>
					<p>{this.props.beta}</p>
				</div>
			</section>
		);
	}
}