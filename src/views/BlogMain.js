

import React from 'react';
import MainHeader from './MainHeader';

export default class BlogMain extends React.Component{
	render() {
		return (
			<main className="main-body">
				<MainHeader {...this.props} />
				<section className="container">
					<h1>Blog</h1>
					<p>这里打算放一些技术方面的文章.</p>
					<p>但是水平还没达到能写技术博文的地步，还是好好学吧！！！</p>
				</section>
			</main>
			
		);
	}
}