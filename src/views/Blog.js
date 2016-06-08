
import React from "react";
import Header from "./Header";
import BlogMain from "./BlogMain";

export default class Blog extends React.Component{
	constructor() {
		super();
		this.infos={
			kilo:"Blog",
			beta:""
		}
	}
	render() {
		return (
			<div>
				<Header sel="Blog" />
				<BlogMain {...this.infos}/>
			</div>
		)
	}
}