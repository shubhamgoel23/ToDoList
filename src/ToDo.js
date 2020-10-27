import React, { Component } from 'react'
import './ToDo.css'
class ToDo extends Component {

    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.toggleForm()
    }

    handleToggle(evt){
        this.props.toggleTodo(this.props.id);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleRemove(){
        this.props.removeTodo(this.props.id);
    }
    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate} >
                        <input 
                            type='text' 
                            value={this.state.task} 
                            name='task' 
                            onChange={this.handleChange} 
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                <button onClick={this.toggleForm} >Edit</button>
                <button onClick={this.handleRemove} >X</button>
                <li className={this.props.completed? 'completed':''} 
                    onClick={this.handleToggle}
                >
                    {this.props.task}
                </li>
            </div>
            )
        }

        return result;
    }
}

export default ToDo