

import React from 'react';
import imgSrc from '../img/header.jpg';

export default class HeadImg extends React.Component{
	render(){
		return (
			<section className="head-img-wrap">
				<img src={imgSrc} />
			</section>
		)
	}
}