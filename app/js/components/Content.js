import React from 'react';
import Visitor from './Content/Visitor';
export default class Content extends React.Component {
	render() {
			return (
				<section className="contentHolder">
					<Visitor />
				</section>			
			);	
	}
}