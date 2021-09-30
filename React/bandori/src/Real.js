import React, { Component, Fragment } from "react";

class Real extends Component {
  state = {
    number: 0,
    name: "방붕이",
    age: 40,
  };

  Inc = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  Dec = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  Namec = () => {
    this.setState({
      name: "뱅드림장인",
    });
  };
  Agec = () => {
    this.setState({
      age: 18,
      name: "하와와여고생장",
    });
  };

  render() {
    return (
      <Fragment>
        <div>지금 값 : {this.state.number}</div>
        <button onClick={this.Inc}>+</button>
        <button onClick={this.Dec}>-</button>
        <div>지금 이름 : {this.state.name}</div>
        <div>지금 나이 : {this.state.age}</div>
        <button onClick={this.Namec}>이름 깜짝변경</button>
        <button onClick={this.Agec}>age 깜짝변경</button>
      </Fragment>
    );
  }
}

export default Real;
