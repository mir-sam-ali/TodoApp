import React, { useState } from "react";
import "./Todo.css";
import DoneButton from "../DoneButton/DoneButton";
import { CSSTransition } from "react-transition-group";

const Todo = (props) => {
  let [hover, setHover] = useState(false);
  let [mounted, setMounted] = useState(true);

  return (
    <CSSTransition classNames="alert" in={mounted} timeout={300} unmountOnExit>
      <div
        className="Todo"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <DoneButton
          show={hover}
          type={props.status ? "Undo" : "Done"}
          clicked={() => {
            props.markTaskAsDone(props.task);
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <p
            style={{
              display: "inline",
              textDecoration: props.status ? "line-through" : "",
            }}
          >
            {props.task}
          </p>
        </div>
        <DoneButton
          show={hover}
          type={"delete"}
          text={"delete"}
          clicked={() => {
            setMounted(false);
            setTimeout(300, () => {
              props.DeleteTask(props.task);
            });
          }}
        />
      </div>
    </CSSTransition>
  );
};

export default Todo;
