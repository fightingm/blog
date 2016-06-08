

import React from 'react';
import MainHeader from './MainHeader';

export default class PortfolioMain extends React.Component{
	render() {
		return (
			<main className="main-body">
				<MainHeader {...this.props} />
				<section className="container">
					<h1>Portfolio</h1>
					<p>这里打算放我的一些作品.</p>
					<p>但是技术太low，没什么好的作品呀！！！</p>
				</section>
			</main>
			
		);
	}
}