import React from 'react';
import { Link } from 'react-router-dom';
export default class Menus extends React.Component {
	constructor() {
		super();
		this.listMenus = function() {
			console.log(this);
			let ap = this.props.activepage;
			const menus = [{ 'name' : 'Home', 'url' : '/' },{ 'name' : 'About', 'url' : '/about' },{ 'name' : 'Services', 'url' : '/services' }];
			const item = menus.map(function(v,i) {
				let url = v.url;
				if ( ap === v.url ) {
					return <li key={i} className="active"><a >{ v.name }</a></li>;
				} else {
					return <li key={i}><Link to={v.url}>{ v.name }</Link></li>;
				}
			});
			return item;
		}
	}
	render() {
		console.log(this.props);
		return (
				<ul> 
			  		{ this.listMenus() }
				</ul>
			);
	}
}
