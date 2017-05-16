import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, History, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
const app = document.getElementById('app');
ReactDOM.render( 
	<HashRouter history={History}>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/services' component={Services} />
		</Switch>
	</HashRouter>, app );
