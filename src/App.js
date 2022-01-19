import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Event from './Event';
import Comment from './Comment';

function App() {
	const [events, setEvents] = useState([
		{
			id: 1,
			name: 'Bilkrockar',
			joined: false,
			location: 'Angered',
			time: 1644847298,
			comments: [
				'420 blz',
				'44'
			],
		},
		{
			id: 1,
			name: 'Bilkrockar',
			joined: false,
			location: 'Angered',
			time: 1644847298,
			comments: [
				'420 blz',
				'44'
			],
		},
		{
			id: 1,
			name: 'Bilkrockar',
			joined: false,
			location: 'Angered',
			time: 1644847298,
			comments: [
				'420 blz',
				'44'
			],
		},
	]); //Download from localstorage
	const [modal, setModal] = useState(false);

	console.log(modal);

	return (
		<div className="w-screen p-[5%]">
			{!!modal && <Comment data={modal}/>}
			<center>
				{events.map((event, index) => {
					return (
						<Event key={"test" + index} data={event} onClick={() => console.log(79)}/>
					);
				})}
			</center>
		</div>
	);
}

export default App;
