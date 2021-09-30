import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    number: 0,
    name: "방붕이",
  };

  numberUp = () =>
    this.setState({
      number: this.state.number + 1,
    });
  numberDown = () =>
    this.setState({
      number: this.state.number - 1,
    });
  nameChange = () => {
    this.setState({
      name: "뱅드림장인",
    });
  };
  render() {
    return (
      <Fragment>
        <div>뱅드림 = {this.state.name}</div>
        <div>나이 = {this.props.age}</div>
        <div>숫자 : {this.state.number}</div>

        <button onClick={this.numberUp}>+</button>

        <button onClick={this.numberDown}>-</button>

        <button onClick={this.nameChange}>이름변경</button>
      </Fragment>
    );
  }
}

export default Counter;
