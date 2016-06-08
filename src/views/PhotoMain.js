

import React from 'react';
import MainHeader from './MainHeader';
import '../css/Photo.css';

export default class PhotoMain extends React.Component{
	render() {
		return (
			<main className="PhotoMain main-body">
				<MainHeader {...this.props} />
				<section>
					<PictureWall />
				</section>
			</main>
			
		);
	}
}
class PictureWall extends React.Component{
	constructor(props) {
        super(props);
        this.arr=[{
			src:"./dist/img/p1.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p2.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p3.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p4.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p5.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p6.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p7.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p8.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p9.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p10.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p11.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p12.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p13.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p14.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p15.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p16.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p17.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p18.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p19.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p20.jpg",
			desc:"I  ❤  U"
		},{
			src:"./dist/img/p21.jpg",
			desc:"I  ❤  U"
		}];
    }
	render() {
		var list=this.arr.map((key,index)=><Picture key={index} {...key} />);
		return (
			<div className="pictureWall">
				{list}
			</div>
		);
	}
}
class Picture extends React.Component{
	render() {
		return (
			<figure className="photo">
				<img src={this.props.src} />
				<figcaption>
					<span>{this.props.desc}</span>
				</figcaption>
			</figure>
		);
	}
}