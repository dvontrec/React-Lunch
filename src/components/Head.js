import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Head extends Component
{
	render()
	{
		return(
			<div className="block">
				<Link to="/" className="btn btn-primary">Home</Link>
			</div>
		);
	}
}

export default Head;