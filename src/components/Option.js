import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions';

import Loading from './loading';

class Option extends Component
{

	getLocations()
	{
		this.props.fetchLocations();
		console.log(this.props.locations.results);
	}
	showLocation()
	{
		const rNum = Math.floor(Math.random()*this.props.locations.results.length)
		const results = this.props.locations.results;
		return(
				<li key={results[rNum].id}>
					{results[rNum].name}
				</li>
		);
	}

	render()
	{
		const locations = Object.keys(this.props.locations).length;
		if(locations < 4)
		{
			setTimeout(() => this.props.fetchLocations(), 3000)
			return <Loading />
		}
		return(
			<div className="display">
				{this.showLocation()}
			</div>
		);
	}
}

function mapStateToProps(state)
{
	//sets the list of locations from the action to be the locations prop
	return { locations: state.locations }
}

export default connect(mapStateToProps, {fetchLocations})(Option);