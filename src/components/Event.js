import React, { useState } from "react";

import { Segment, Button } from "semantic-ui-react";


function Event(props) {
    const [comments, setComments] = useState(props.data.comments); //Get from props
    //console.log(props.data.time) // 1290381935748

    const [date, setDate] = useState(
        new Date(props.data.time * 1000).toLocaleDateString("sv")
    );

    return (
        <Segment>
            <h1 className="font-bold text-2xl">{props.data.name}</h1>
            <h2 className="text-xl">{props.data.location}</h2>
            <h2 className="text-xl">{date}</h2>
			{props.data.joined &&
				<Button fluid color="red" onClick={() => props.updateParent(props.data.id)}>Leave</Button>
			}
			{!props.data.joined &&
				<Button fluid color="green" onClick={() => props.updateParent(props.data.id)}>Join</Button>
			}
        </Segment>
    );
}

export default Event;
