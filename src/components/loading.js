import React, { Component } from 'react';
import Head from './Head';

class Loading extends Component
{
	render()
	{
		return(
			<div>
				<Head />
				<div className="loader"></div>
			</div>
		);
	}
}

export default Loading