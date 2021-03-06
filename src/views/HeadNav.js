
import React from "react";

export default class HeadNav extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            sel: this.props.sel
        };
        this.navs=["About","Portfolio","Blog","Photos"];
    }
	setNav(ev) {
		var name=ev.currentTarget.getAttribute('data-name');
		this.setState({
			sel: name
		})
	}
	render() {
		var navs=this.navs.map( (key,index)=>
			( <li key={index} data-name={key} className={this.state.sel==key?"current":" "}  onClick={this.setNav.bind(this)}>
				<a className="link" href={"#/"+key.toLowerCase()}>{key}</a>	
				<a className="hover" href={"#/"+key.toLowerCase()}>{key}</a>
			</li> )
		);
		return (
			<nav>
				<ul className="head-ul">
					{navs}
				</ul>
			</nav>
		);
	}
};