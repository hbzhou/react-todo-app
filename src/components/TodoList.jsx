import React, {Component} from 'react'
import Todo from './Todo'
import Footer from './Footer'
import Header from './Header'

export default class TodoList extends Component {

    state = {
        todoList: [
            {id: 1, todo: 'Eating', selected: true, showButton: false},
            {id: 2, todo: 'Shopping', selected: false, showButton: false},
            {id: 3, todo: 'Sleeping', selected: false, showButton: false},
            {id: 4, todo: 'Studying', selected: true, showButton: false}
        ]
    };

    render() {
        return (
            <div>
                <Header inputRef={(node) => this.input = node} onSubmit={this.handleSubmit}/>
                {this.state.todoList.map(todo => {
                    return <Todo key={todo.id} todo={todo}
                                 onDelete={this.handleDelete} onCheck={this.handleCheck} onHide={this.handleHide}
                                 onShow={this.handleShow}/>
                })}
                <Footer done={this.getDoneNum()} total={this.getTotalNum()}/>
            </div>
        )
    }

    handleHide = (id) => {
        const todoList = this.state.todoList.filter(todo => {
            if (todo.id === id) {
                todo.showButton = false
            }
            return todo;
        });
        this.setState({todoList: todoList})
    };

    handleShow = (id) => {
        const todoList = this.state.todoList.filter(todo => {
            if (todo.id === id) {
                todo.showButton = true
            }
            return todo;
        });
        this.setState({todoList: todoList})
    };


    handleSubmit = (event) => {
        const todo = this.input.value;
        if (event.keyCode === 13 && todo != null && todo.trim() !== '') {
            this.input.value = '';
            let todoList = this.state.todoList;
            let id = todoList.length === 0 ? 0 : Math.max.apply(Math, todoList.map(todo => todo.id));
            todoList = [{id: id += 1, todo: todo, selected: false}, ...todoList];
            this.setState({todoList})
        }
    };

    handleDelete = (id) => {
        const todoList = this.state.todoList.filter((todo) => todo.id !== id);
        this.setState({todoList})
    };

    handleCheck = (id) => {
        const todoList = this.state.todoList.map(todo => {
            if (todo.id === id) {
                todo.selected = !todo.selected;
            }
            return todo;
        });
        this.setState({todoList})
    };

    getDoneNum() {
        return this.state.todoList.filter(todo => todo.selected).length;
    };

    getTotalNum() {
        return this.state.todoList.length;
    }
}