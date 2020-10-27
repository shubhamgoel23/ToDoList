import React, { Component } from 'react'
import ToDo from './ToDo'
import NewTodoForm from './NewTodoForm'
import './ToDoList.css'

class ToDoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    update(id, updatedTask){
        const updateTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        })

        this.setState({
            todos: updateTodos
        })

    }

    toggleCompletion(id){
        const updateTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })

        this.setState({
            todos: updateTodos
        })
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(t => t.id !==id)
        })
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo 
                    key={todo.id} 
                    id={todo.id} 
                    task={todo.task} 
                    completed={todo.completed}
                    removeTodo = {this.remove} 
                    updateTodo = {this.update}
                    toggleTodo = {this.toggleCompletion}
                    />
        })
        return (
            <div className='ToDoList'>
                <h1>Get To Work! <span>A Simple Todo List.</span></h1>
                <ul>{todos}</ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default ToDoList;