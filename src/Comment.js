import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function Event(props) {
	const [content, setContent] = useState(props.data); //Get from props


	return (
		<div className="App">
			<header className="App-header">
				<h1>
					{content}
				</h1>
			</header>
		</div >
	);
}

export default Event;
