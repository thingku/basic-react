import React from 'react';
import Logo from './Header/Logo';
import Menus from './Header/Menus';
import User from './Header/User';
export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			user : 'Rafon'
		}
	}
	render() {
			return (
				<header className="mainHeader">
					<User user={this.state.user} />
					<ul>
						<li className="logo col-lg-3 col-md-3 col-sm-3 col-xs-12">
							<Logo />
						</li>
						<li className="menu col-lg-9 col-md-9 col-sm-9 col-xs-12">
							<Menus activepage={ this.props.activepage } />
						</li>					
					</ul>
				</header>			
			);	
	}
}
