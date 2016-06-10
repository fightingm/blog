

import React from 'react';
import MainHeader from './MainHeader';
import '../css/Photo.css';
import  dataArr from './PhotoData';

export default class PhotoMain extends React.Component{
	render() {
		return (
			<main className="PhotoMain main-body">
				<MainHeader {...this.props} />
				<section>
					<PictureWall />
				</section>
				<TimeBox />
			</main>
			
		);
	}
}
class PictureWall extends React.Component{
	constructor(props) {
        super(props);
        this.arr=dataArr;
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
class TimeBox extends React.Component{
	constructor(){
		super();
		this.state = {
			day:"",
			hour:"",
			minute:"",
			second:"",
		}
		this.startTime=new Date(2015, 8, 16, 0, 0, 0).getTime();
		this.setDate=this.setDate.bind(this);
	}
	componentWillMount() {
		this.timer=null;
		this.setDate();
	}
	componentDidMount() {
		this.timer=setInterval(this.setDate,1000);
	}
	shouldComponentUpdate(nextProps,nextState) {
		return nextState.second!=this.state.second;
	}
	setDate() {
		var nowTime=Date.now();
		var t = Math.floor((nowTime - this.startTime) / 1000);
	    var day = Math.floor(t / 86400)>=10?Math.floor(t / 86400):"0"+Math.floor(t / 86400);
	    var hour = Math.floor(t % 86400 / 3600)>=10? Math.floor(t % 86400 / 3600):"0"+Math.floor(t % 86400 / 3600);
	    var min = Math.floor(t % 86400 % 3600 / 60)>=10?Math.floor(t % 86400 % 3600 / 60):"0"+Math.floor(t % 86400 % 3600 / 60);
	    var sec = t % 60>=10?t%60:"0"+t%60;
	    this.setState({
	    	day:day,
	    	hour:hour,
	    	minute:min,
	    	second:sec
	    });
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render() {
		return(
				<footer className="timeBox">
					<p>
						<span className="lover">徐开明</span>和
						<span className="lover">但欣欣</span>已经在一起
					</p>
					<p className="time">
						<span className="del">{this.state.day}</span>天
						<span className="del">{this.state.hour}</span>时
						<span className="del">{this.state.minute}</span>分
						<span className="del">{this.state.second}</span>秒啦
					</p>
					<p>啦啦啦，真让人高兴！！！</p>
				</footer>
			);
	}
}