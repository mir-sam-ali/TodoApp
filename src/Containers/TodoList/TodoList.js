import React, { Component } from "react";
import Todo from "../../Components/Todo/Todo";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: "Eat Dinner", status: false },
        { task: "Pray Taraweeh", status: false },
        { task: "Take a Bath", status: false },
      ],
      oldTask: "",
    };
  }

  markTaskAsDone = (task) => {
    let oldTodos = this.state.todos;
    console.log(oldTodos);
    oldTodos.forEach((todo) => {
      if (todo.task === task) {
        todo.status = !todo.status;
      }
    });
    this.setState({ todos: oldTodos });
  };

  deleteTask = (task) => {
    let oldTodos = this.state.todos;
    for (let i = 0; i < oldTodos.length; i++) {
      if (oldTodos[i].task === task) {
        oldTodos.splice(i, 1);
      }
    }

    this.setState({ todos: oldTodos });
  };

  // shouldComponentUpdate(newProps) {
  //   // console.log("Should uodate?");
  //   // console.log(this.props, newProps);
  //   return newProps.newTask !== this.props.newTask;
  // }

  static getDerivedStateFromProps(props, state) {
    console.log("[getDerivedState]");
    if (props.newTask !== "" && state.oldTask !== props.newTask) {
      let oldTodos = state.todos;
      let newTodos = [...oldTodos, { task: props.newTask, status: false }];

      return { todos: newTodos, oldTask: props.newTask };
    } else {
      return null;
    }
  }

  render() {
    console.log(["render"]);
    return (
      <div className="TodoList">
        {this.state.todos.map((todo) => {
          return (
            <Todo
              DeleteTask={this.deleteTask}
              task={todo.task}
              status={todo.status}
              markTaskAsDone={this.markTaskAsDone}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
