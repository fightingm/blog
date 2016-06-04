

import React from 'react';
import { render } from 'react-dom';
import { Router,Route,Link,IndexRoute,browserHistory,hashHistory} from 'react-router';

import Default from '../views/Default';
import Hello from '../views/Hello';
import About from '../views/About';
import Portfolio from '../views/Portfolio';
import Photos from '../views/Photos';
import Blog from '../views/Blog';
const App = React.createClass({
	render() {
		return(
			<div id="main-wrap">
				{this.props.children}
			</div>
		);
	}
});

const routes=(
	<Route path="/" component={App}>
		<IndexRoute component={Hello} />
		<Route path="about" component={About} />
		<Route path="portfolio" component={Portfolio} />
		<Route path="blog" component={Blog} />
		<Route path="photos" component={Photos} />
		<Route path="*" component={Default} />
	</Route>
);

render(<Router routes={routes} history={hashHistory} />,document.getElementById('mx'));