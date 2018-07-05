import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component
{
	render()
	{
		return(
			<div>
				<Link  className="btn btn-primary main-btn" to={ '/lunch' } >
					Lunch Time
				</Link>
			</div>
		);
	}
}


export default Home;