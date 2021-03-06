import axios from 'axios';
import { getKey } from '../secret'
let loc = {}
const KEY = getKey();
export const FETCH_LOCATIONS = 'fetch_locations'
export const GET_LOCATION = 'getLocation'

export function fetchLocations()
{
	getLocation();
	const request  = axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${loc.lat},${loc.lon}&radius=9000&type=restaurant&key=${KEY}`);
	return (dispatch) => 
	{
		request.then(({ data }) =>
		{
			dispatch({type: FETCH_LOCATIONS, payload: data})
		});
	}
}

function getLocation()
{
  navigator.geolocation.getCurrentPosition(pos =>
  {
    setPosition(pos);
  })
} 

function setPosition(position)
{
  loc ={
      lon: position.coords.longitude, 
      lat: position.coords.latitude
    }
}