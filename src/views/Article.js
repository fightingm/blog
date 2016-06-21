import React from "react";
import Header from "./Header";
import ArticleMain from "./ArticleMain";

export default class Article extends React.Component{
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Header sel="Blog" />
				<ArticleMain />
			</div>
		)
	}
}