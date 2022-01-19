import React, { useState, useEffect } from "react";
import { Modal, Segment } from "semantic-ui-react";

function Event(props) {
    const [comments, setComments] = useState(props.data.comments); //Get from props

    console.log(props.data.comments);

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
        </Modal>
    );
}

export default Event;
