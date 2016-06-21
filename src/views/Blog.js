
import React from "react";
import Header from "./Header";
import BlogMain from "./BlogMain";

export default class Blog extends React.Component{
	constructor() {
		super();
		this.infos={
			img:"./dist/img/yun2.jpg",
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