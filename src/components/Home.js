import React, { Component } from 'react';

class Home extends Component
{
	btnClick()
	{
		alert("clic");
	}
	render()
	{
		return(
			<div>
				<button 
					onClick={this.btnClick}
					className="btn btn-primary"
				>
					Find Lunch
				</button>
			</div>
		);
	}
}

export default Home;