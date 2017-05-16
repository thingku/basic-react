import React from 'react';
export default class User extends React.Component {
	render() {
		if ( this.props.user !== '' ) {
			return (
				<div class="userTopHolder">
					<span>Logged in as: {this.props.user}</span>
				</div>
				);
		} else {
			return (
				<div class="userTopHolder">
				</div>
				);
		}
	}
}
