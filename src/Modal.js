import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Modal } from 'semantic-ui-react';

function Event(props) {
	const [content, setContent] = useState(props.data); //Get from props

	return (
		<Modal
			size="large"
			onClose={props.canceled}
			open={true}
		>
			{content}
		</Modal>
	);
}

export default Event;
