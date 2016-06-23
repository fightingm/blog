

import React from 'react';
import MainHeader from './MainHeader';
import $ from 'jquery';
require('../css/PortfolioMain.css');
require('../css/Gard.css');

export default class PortfolioMain extends React.Component{
	constructor() {
		super();
		this.state={
			works:[{
				tit:'仿京东页面',
				dir:'模仿京东的pc端页面',
				img:'./dist/img/21.jpg',
				link:'https://github.com/fightingm/jd'
			},{
				tit:'智能推荐云音乐',
				dir:'一个音乐网站',
				img:'./dist/img/22.jpg',
				link:'http://www.brickworkers.com:8080/wymusic/index.html'
			}]
		}
	}
	componentDidMount() {
		(function() {
		     
		    function init() {
		        var speed = 250,
		            easing = mina.backout;
		 
		        [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
		            var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
		                pathConfig = {
		                    from : path.attr( 'd' ),
		                    to : el.getAttribute( 'data-path-hover' )
		                };
		 
		            el.addEventListener( 'mouseenter', function() {
		                path.animate( { 'path' : pathConfig.to }, speed, easing );
		            } );
		 
		            el.addEventListener( 'mouseleave', function() {
		                path.animate( { 'path' : pathConfig.from }, speed, easing );
		            } );
		        } );
		    }
		 
		    init();
		 
		})();
	}
	render() {
		return (
			<main className="PortfolioMain main-body">
				<MainHeader {...this.props} />
				<section className="container">
					<h1>我的作品</h1>
					<Gird  {...this.state}/>
				</section>
			</main>
			
		);
	}
}

class Gird extends React.Component{
	render() {
		var workCom=this.props.works.map((key,index)=>(
				<a key={index} href={key.link} target="_blank" data-path-hover="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z">
			        <figure>
			            <img src={key.img} />
			            <svg id="svg" viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M0,0C0,0,0,171.14385,0,171.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0"></path></svg>
			            <figcaption>
			                <h2>{key.tit}</h2>
			                <p>{key.dir}</p>
			                <button>View</button>
			            </figcaption>
			        </figure>
			    </a>
			));
		return (
			<section id="grid" className="grid">
				{workCom}
			</section>
		);
	}
}