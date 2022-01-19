import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Comment from './Comment';

function Event(props) {
	const [comments, setComments] = useState(props.data.comments); //Get from props

	

	return (
		comments.map((comment, index) => {
			return (
				<Comment key={"teste" + index} data={comment} />
			);
		})
	);
}

export default Event;
