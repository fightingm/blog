

import React from "react";
import Header from "./Header";
import PhotoMain from './PhotoMain';

export default class Photos extends React.Component{
	constructor() {
		super();
		this.infos={
			kilo:"Photos",
			beta:""
		}
	}
	render() {
		return (
			<div>
				<Header sel="Photos" />
				<PhotoMain {...this.infos}/>
			</div>
		)
	}
}