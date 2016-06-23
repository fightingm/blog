import React from "react";
import Header from "./Header";
import ArticleMain from "./ArticleMain";

export default class Article extends React.Component{
	componentDidMount() {
		console.log(123);
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