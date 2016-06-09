

import React from 'react';
import MainHeader from './MainHeader';
require ('../css/AboutMain.css');

export default class AboutMain extends React.Component{
	render() {
		return (
			<main className="AboutMain main-body">
				<MainHeader {...this.props} />
				<section className="container">
					<h1>About Me</h1>
					<p>这里打算放一些个人介绍.</p>
					<p>但是具体还没想好介绍点啥啊！！！</p>
				</section>
			</main>
			
		);
	}
}