
import React from 'react';
import '../css/Hello';
import $ from 'jquery';

export default class Hello extends React.Component{
	constructor() {
        super();
    }
	componentDidMount() {
	}
	render() {
		return (
			<div className="Hello">
				<div className="hello">
					<a href="#/about">点击进入我的小站!</a>
				</div>
				<div className="mask"></div>
				<div className="helloBg"></div>
			</div>
			
		);
	}
}