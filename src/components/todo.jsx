import React, { Component } from "react";

class Todo extends Component {
  state = {
    todos: [],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="header">
            <h1>Todo</h1>
          </div>
          <div className="todo-list mb-3">{this.showTodos()}</div>
          <div className="todo-form">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" id="todo-title" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                id="todo-description"
                rows="3"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() => this.addTodo()}
              className="btn btn-primary"
            >
              Add todo
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  assignId() {
    const todos = this.state.todos;
    if (todos.length === 0) {
      return 1;
    }
    return todos[todos.length - 1].id + 1;
  }

  addTodo() {
    const title = document.getElementById("todo-title").value;
    const desc = document.getElementById("todo-description").value;
    if (title === "" || desc === "") return;

    const todos = this.state.todos;

    const newTodo = {
      id: this.assignId(),
      title: title,
      description: desc,
      completed: false,
    };
    todos.push(newTodo);
    this.setState({ todos });
    document.getElementById("todo-title").value = "";
    document.getElementById("todo-description").value = "";
  }

  completeTodo(id) {
    const todos = this.state.todos;
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    this.setState({ todos });
  }

  deleteTodo(id) {
    const todos = this.state.todos;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  showTodos() {
    const todos = this.state.todos;
    if (todos.length === 0) return <p>No todos!</p>;

    return todos.map((todo) => (
      <div key={todo.id}>
        <span>
          <h5>{todo.title}</h5>
          <p>{todo.description}</p>
        </span>
        <button
          className={
            "btn " +
            (todo.completed ? "btn-success " : "btn-danger ") +
            "btn-sm m-1"
          }
          onClick={() => this.completeTodo(todo.id)}
        >
          {todo.completed ? "Mark as incomplete " : "Mark as complete"}
        </button>
        <button
          className="btn btn-dark btn-sm m-1"
          onClick={() => this.deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    ));
  }
}

export default Todo;
