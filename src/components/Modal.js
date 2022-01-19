import React, { useState, useContext } from "react";
import { Modal, Segment } from "semantic-ui-react";
import InputField from "./InputField";

//Context
import { eventsCtx } from "../Context";
function Event(props) {
    const [comments, setComments] = useState(props.data.comments); //Get from props

    const { events } = useContext(eventsCtx);

    console.log("events from context", events);

    return (
        <Modal
            size="large"
            onClose={props.canceled}
            open={true}
            className="p-5"
        >
            <h1 className="text-5xl">Comments</h1>
            {comments.map((comment, index) => {
                return <Segment key={"comment" + index}>{comment}</Segment>;
            })}
            <InputField />
        </Modal>
    );
}

export default Event;
