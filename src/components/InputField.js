import React, {useContext} from 'react';
import {eventsCtx} from '../Context'
function InputField(props) {
        const { events } = useContext(eventsCtx);

        console.log("events from context", events);
        console.log("props", props);
  return (
    	<div className="flex w-full justify-center">
            <input className="w-2/3 h-10" placeholder="Write a comment"/>
            <button className="w-auto bg-blue-300 p-3 rounded">Add comment</button>
        </div>);
}

export default InputField;
