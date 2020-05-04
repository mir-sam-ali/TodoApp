import React, { useRef } from "react";
import "./NewTask.css";

const NewTask = (props) => {
  const inputEl = useRef(null);
  let onKeyUpHandler = (e) => {
    if (e.keyCode === 13) {
      console.log(e.keyCode);
      e.preventDefault();
      console.log(inputEl.current.value);
      props.saveNewTask(inputEl.current.value);
      props.closeNewTask();
    }
  };
  return (
    <div className="NewTask">
      <input
        type="text"
        ref={inputEl}
        placeholder="Add New Task"
        onKeyUp={onKeyUpHandler}
      />
    </div>
  );
};

export default NewTask;
