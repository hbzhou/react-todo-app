import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <input ref={this.props.inputRef} className="input-group-text text-sm-left m-2" type="text"
                       placeholder="Please input to do"
                       onKeyDown={event => this.props.onSubmit(event)}/>
            </div>
        );

    }
}