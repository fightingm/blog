

import React from 'react';

import MainHeader from './MainHeader';

import "../css/BlogMain.css";

import ArticleData from './ArticleData';

export default class BlogMain extends React.Component{
	render() {

		return (
			<main className="main-body BlogMain">
				<MainHeader {...this.props} />
				<section className="container">
					<h1>我的文章</h1>
					<div className="archive">
						<BlogCon />
					</div>
					<div className="time-box">
						<TimeLine />
					</div>
				</section>
			</main>
		);
	}
}
class TimeLine extends React.Component{
	constructor() {
		super();
		
		this.years=ArticleData;
		this.state={
			yearNow: this.years[0].year,
			monthNow: this.years[0].monthes[0].month
		};
		this.selYear=this.selYear.bind(this);
	}

	selYear(year,month) {
		this.setState({
			yearNow:year,
			monthNow:month
		});
	}

	render() {
		var yearNav=this.years.map((key,index)=>{
			var yearActive=key.year==this.state.yearNow;
			var lis=key.monthes.map((k,i)=>{
				var monthActive=k.month==this.state.monthNow&&yearActive;
				return(
						<li style={{height:yearActive?"25px":"0px"}} key={i} className={"time-mon "+(monthActive?"cur":"")}>
							<a href="javascript:;" onClick={
								function(){
									this.selYear(key.year,k.month)
								}.bind(this)
							}
						>{k.month}月</a>
						</li>
					);
			});	
			return(
				<ul key={index} className={yearActive?"active":""}>
					<li className="time-year">
						<a href="javascript:;" onClick={
							function(){
								this.selYear(key.year,key.monthes[0].month)
							}.bind(this)
						}
						>{key.year}年</a>
					</li>
					{lis}
				</ul>
			);	
		});
		return (
			<div className="time-line">
				<span className="map">Map</span>
				<nav>
					{yearNav}
				</nav>
			</div>
		)
	}
}

class BlogCon extends React.Component{
	constructor() {
		super();
		this.years=ArticleData;
	}
	render() {
		var con=this.years.map((key,index)=>{
			var time=key.monthes.map((k,i)=>{
				var tit=k.days.map((v,n)=>{
					return (
						<li key={n}>
							<span>{v.day}日</span>
							<a href={"#/blog/"+key.year+"-"+k.month+"-"+v.day}>{v.tit}</a>
						</li>
					);
				});
				return (
					<div key={i} className="blog-con">
						<h3><span>{key.year}年{k.month}月</span></h3>
						<ul>
							{tit}
						</ul>
					</div>
				);
			});
			return(
				<div key={index}>
					{time}
				</div>
			);	
		});
		return (
			<div>
				{con}
			</div>
		);
	}
}
