import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import { Segment } from 'semantic-ui-react';

function Event(props) {
	const [comments, setComments] = useState(props.data.comments); //Get from props



	return (
		<Segment className="w-1/2 bg-purple-300">
			<h1 className="">Yo im an event</h1>
			{comments.map((comment, index) => {
				return (
					<Comment key={"teste" + index} data={comment} />
				);
			})}
		</Segment>
	);
}

export default Event;
