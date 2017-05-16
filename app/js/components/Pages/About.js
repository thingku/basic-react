import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
export default class Content extends React.Component {
	render() {
			console.log(this.props);
			return (
				<div>
					<Header activepage={ this.props.match.url } />
					<div className="contentHolder">
						<h3>About</h3>
						<p>
							Proin eget tortor risus. 
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
							Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. 
							Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
							Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. 
							Proin eget tortor risus.
						</p>
					</div>
					<Footer/>
				</div>	
			);	
	}
}