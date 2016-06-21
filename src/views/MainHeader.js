

import React from 'react';
import '../css/MainHeader';

export default class MainHeader extends React.Component{
	componentDidMount() {
	}
	render() {
		var backImg=this.props.img;
		var backstr='url('+backImg+')';
		return (
			<section className="MainHeader" style={{backgroundImage:backstr}} >
				<div className="wrap">
					<p>{this.props.kilo}</p>
					<p>{this.props.beta}</p>
				</div>
				<div className="mask"></div>
			</section>
		);
	}
}