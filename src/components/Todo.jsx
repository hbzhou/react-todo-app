import React, {Component} from 'react'

export default class Todo extends Component {

    render() {
        const {id, todo, selected, showButton} = this.props.todo;
        return (
            <li key={this.props.todo.id}
                onMouseEnter={() => this.props.onShow(id)}
                onMouseLeave={() => this.props.onHide(id)}>
                <input className="input-group-sm m-2" type="checkbox" checked={selected} onChange={() => {this.props.onCheck(id)}}/>
                <span>{todo}</span>
                {showButton && <button className="btn btn-danger btn-sm m-2" onClick={() => {this.props.onDelete(id)}}>Delete</button>}
            </li>
        )
    }
}