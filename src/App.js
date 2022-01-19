import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Event from './Event';
import Comment from './Comment';
import Modal from './Modal';

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
			id: 2,
			name: 'Dreamhack',
			joined: false,
			location: 'Orten',
			time: 1644847298,
			comments: [
				'420 blz',
				'44'
			],
		},
		{
			id: 3,
			name: 'Snusträff',
			joined: false,
			location: 'Luleå',
			time: 1644847298,
			comments: [
				'420 blz',
				'44'
			],
		},
	]); //Download from localstorage
	const [modal, setModal] = useState(false);

	function fixModal(id) {
		setModal(events[events.findIndex(item => item.id === id)]);
	}

	function canceled() {
		setModal(false);
	}

	function eventHasUpdated(id) {
		console.log(id);
	}

	return (
		<div className="w-screen p-[5%]">
			{!!modal && <Modal data={modal} canceled={canceled}/>}
			<center>
				{events.map((event, index) => {
					return (
						<div
							key={"test" + index}
							onClick={() => fixModal(event.id)}
							className="w-1/2 bg-purple-300"
						>
							<Event data={event} updateParent={eventHasUpdated}/>
						</div>

					);
				})}
			</center>
		</div>
	);
}

export default App;
