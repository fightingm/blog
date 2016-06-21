

import React from 'react';
import MainHeader from './MainHeader';
require ('../css/AboutMain.css');

export default class AboutMain extends React.Component{
	render() {
		return (
			<main className="AboutMain main-body">
				<MainHeader {...this.props} />
				<section className="container">
					<h1>关于我</h1>
					<p>我的名字：徐开明</p>
					<p>现在就读于黑龙江大学信息管理学院电子商务专业.</p>
					<p>喜欢睡觉,打篮球,看电影,听音乐,玩游戏...</p>
					<p>从事Web前端开发,正在努力从一只程序猿进化成一名优秀的前端攻城狮.</p>
				</section>
			</main>
		);
	}
}