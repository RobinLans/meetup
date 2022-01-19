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
			id: 3,
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

	function canceled() {
		setModal(false);
	}

	return (
		<div className="w-screen p-[5%]">
			{!!modal && <Modal data={modal} canceled={canceled}/>}
			<center>
				{events.map((event, index) => {
					return (
						<div onClick={() => setModal(event.id)}>
							<Event key={"test" + index} data={event} />
						</div>

					);
				})}
			</center>
		</div>
	);
}

export default App;
