import React from 'react';
import Markdown from 'react-markdown';
import ArticleData from './ArticleData';
import $ from 'jquery';
import hljs from 'highlight.js';
require ('../css/ArticleMain.css');
require ('highlight.js/styles/solarized-light.css');


export default class ArticleMain extends React.Component{
	constructor() {
		super();
		this.article=ArticleData;
	}
	componentWillMount() {
		let location=window.location.hash;
		let re=/(\d+)-(\d+)-(\d+)/g;
		let newstr=re.exec(location);
		this.year=newstr[1];
		this.month=newstr[2];
		this.day=newstr[3];
		let newYear=ArticleData.filter(function(item){
			return item.year == this.year;
		}.bind(this));
		let newMonth=newYear[0].monthes.filter(function(item){
			return item.month == this.month;
		}.bind(this));
		this.newDay=newMonth[0].days.filter(function(item){
			return item.day == this.day;
		}.bind(this))[0];
	}
	componentDidMount() {
		//hljs.initHighlightingOnLoad();

		hljs.configure({
		  tabReplace: '  '
		});
		//hljs.initHighlighting();
		$('pre code').each(function(i, block) {
		    hljs.highlightBlock(block);
		 });
		
	}
	render() {
		return (
			<main className="ArticleMain main-body">
				<article className="container">
					<div id="article-con" className="article-con result-pane">
						<Markdown
							source={this.newDay.con} 
							skipHtml={false}
		                    escapeHtml={false}
						/>
					</div>
					<time className="write-t blue">{this.year}年{this.month}月{this.day}日</time>
				</article>
			</main>
		);
	}
}