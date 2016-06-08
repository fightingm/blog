

import React from "react";
import HeadImg from "./HeadImg";
import HeadNav from "./HeadNav";
import Footer from "./Footer";
import '../css/Header.css';

export default class Header extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            sel: this.props.sel
        };
    }
	render() {
		return (
			<header className="Header">
				<HeadImg />
				<HeadNav sel={this.state.sel} />
				<Footer />
			</header>
		);
	}
}