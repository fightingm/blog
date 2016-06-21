
import React from 'react';
import Header from './Header';
import AboutMain from './AboutMain';

export default class About extends React.Component{
	constructor() {
		super();
		this.infos={
			img:"./dist/img/yun1.jpg",
			kilo:"Hi.I\'m xkm.",
			beta:"I like playing."
		}
	}
	render() {
		return (
			<div>
				<Header sel="About" />
				<AboutMain {...this.infos}/>
			</div>
		);
	}
}
