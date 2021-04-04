import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const {done, total} = this.props;
    return (
      <div>
          <span>Completed :{done}, Total: {total}</span>
      </div>
    )
  }
}