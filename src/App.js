import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./Containers/TodoList/TodoList";
import LottieIcon from "./Containers/LottieIcon/LottieIcon";
import NewTask from "./Components/NewTask/NewTask";
import { CSSTransition } from "react-transition-group";
import Header from "./Components/Header/Header";

function App() {
  let [showNewTask, setShowNewTask] = useState(false);
  let showNewTaskHandler = () => {
    setShowNewTask(!showNewTask);
  };
  let closeNewTask = () => {
    setShowNewTask(false);
  };

  let [newTask, setNewTask] = useState("");

  let saveNewTask = (newTaskValue) => {
    console.log(newTaskValue);
    setNewTask(newTaskValue);
  };

  return (
    <div className="App">
      <Header />

      <LottieIcon clickHandler={showNewTaskHandler} />
      <CSSTransition
        classNames="alert"
        in={showNewTask}
        timeout={500}
        unmountOnExit

        // onEnter={() => setShowButton(false)}
        // onExited={() => setShowButton(true)}
      >
        <NewTask saveNewTask={saveNewTask} closeNewTask={closeNewTask} />
      </CSSTransition>

      <TodoList newTask={newTask} />
    </div>
  );
}

export default App;
