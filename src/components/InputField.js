import React from "react";

const InputField = ({description, setDescription, createNote}) => {
  return (
      <div className="input-container">
          <input id="inputValue"
                 type="text"
                 value={description}
                 onKeyDown={(e) => {
                     createNote(e)
                 }}
                 onChange={(e) => {
                     setDescription(e.target.value)
                 }}/>
          <button className="addButton" onClick={createNote}>Add</button>
      </div>
  );
};

export default InputField;