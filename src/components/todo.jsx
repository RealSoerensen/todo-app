import React, { Component } from "react";

class Todo extends Component {
    state = { 
        todos: []
     }; 
    render() { 
        return (
            <div>
                <h1>Todo</h1>
                <ul>
                    {this.showTodos()}
                </ul>
                <br></br>
                <input type="text" id="todo-input" />
                <button onClick={() => this.addTodo()}>
                    Add
                </button>
            </div>
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
        const text = document.getElementById("todo-input").value;
        if (text === "") return;

        const todos = this.state.todos;
        
        const newTodo = {
            id: this.assignId(),
            title: text,
            completed: false
        };
        todos.push(newTodo);
        this.setState({ todos });
        document.getElementById("todo-input").value = "";
    }

    deleteTodo(id) {
        const todos = this.state.todos;
        const newTodos = todos.filter(todo => todo.id !== id);
        this.setState({ todos: newTodos });
    }

    showTodos() {
        const todos = this.state.todos;
        if (todos.length === 0) return <p>No todos!</p>;
        
        todos.forEach(element => console.log(element.id));

        return todos.map(todo => (
            <div>
                <li key={todo.id}>
                    {todo.title}
                </li>
                <button>

                </button>
                <button onClick={() => this.deleteTodo(todo.id)}>
                    Delete
                </button>
            </div>
        ));
    }
        
}
 
export default Todo;