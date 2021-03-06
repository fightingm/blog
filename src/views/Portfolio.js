

import React from "react";
import Header from "./Header";
import PortfolioMain from "./PortfolioMain";

export default class Portfolio extends React.Component{
	constructor() {
		super();
		this.infos={
			img:"./dist/img/yun3.jpg",
			kilo:"Portfolio",
			beta:""
		}
	}
	render() {
		return (
			<div>
				<Header sel="Portfolio" />
				<PortfolioMain {...this.infos} />
			</div>
		)
	}
}