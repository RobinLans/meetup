import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Event from './Event';

function App() {
	const [events, setEvents] = useState([
		{
			name: 'haha gey',
			id: 69,
			comments: [
				'420 blz',
				'44'
			],
			joined: false
		},
	]); //Download from localstorage


	return (
		events.map((event, index) => {
			return (
				<Event key={"test" + index} data={event} />
			);
		})
	);
}

export default App;
