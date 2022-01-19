import React, { useState } from "react";
import { Modal, Segment } from "semantic-ui-react";
import InputField from "./InputField";
function Event(props) {
    const [comments, setComments] = useState(props.data.comments); //Get from props

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
