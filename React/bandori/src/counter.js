import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    number: 0,
  };

  numberUp = () =>
    this.setState({
      number: this.state.number + 1,
    });
  numberDown = () =>
    this.setState({
      number: this.state.number - 1,
    });
  render() {
    return (
      <Fragment>
        <div>뱅드림 = {this.props.name}</div>

        <div>숫자 : {this.state.number}</div>

        <button onClick={this.numberUp}>+</button>

        <button onClick={this.numberDown}>-</button>
      </Fragment>
    );
  }
}

export default Counter;
