import React from 'react';

function InputField() {
  return (
    	<form className="flex w-full justify-center">
            <input className="w-2/3 h-10" placeholder="Write a comment"/>
            <button className="w-auto bg-blue-300 p-3 rounded">Add comment</button>
        </form>);
}

export default InputField;
