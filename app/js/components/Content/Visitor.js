import React from 'react';
export default class Visitor extends React.Component {
	constructor() {
		super();
		this.state = {
			visitor : ''
		}
	}
	welcomeVisitor(e) {
		let visitorName = document.getElementById('visitorName').value;
		if ( visitorName !== '' ) {
			this.setState({ visitor : 'Welcome visitor ' + document.getElementById('visitorName').value + '!' });
		}
	}
	render() {
			return (
				<div class="visitorContentHolder">
					<ul class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<li className="notification">{ this.state.visitor }</li>
						<li>
							<label for="visitorName">Please enter your name:</label>
							<input type="text" name="visitorName" id="visitorName" />
						</li>
						<li>
							<button id="enterBtn" onClick={ this.welcomeVisitor.bind(this) } onKeyPress={ this.welcomeVisitor.bind(this) } >Enter</button>
						</li>
					</ul>
				</div>	
			);	
	}
}