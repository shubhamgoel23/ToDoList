import React, { Component } from 'react'
import ToDo from './ToDo'
import NewTodoForm from './NewTodoForm'

class ToDoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos: [{task:"walk the fish"},{task:"groom chickens"}]
        };
        this.create = this.create.bind(this);
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo task={todo.task} />
        })
        return (
            <div>
                <h1>ToDo List!</h1>
                <NewTodoForm createTodo={this.create} />
                {todos}
            </div>
        )
    }
}

export default ToDoList;