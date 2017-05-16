import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			user : ''
		}
	}
	render() {
		setTimeout(() => {
			this.setState({
				user : 'Rafon'
			});
		},2000);
		console.log(this.props);
		return (
			<div>
				<Header user={this.state.user} />
				<Content />
				<Footer/>
			</div>
		);
	}
}
