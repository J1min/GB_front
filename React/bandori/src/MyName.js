import React, { Component, Fragment } from "react";

class MyName extends Component {
  render() {
    return (
      <Fragment>
        <div>안녕하세요 제 이름은 {this.props.name} 입니다</div>
        <div>저는 {this.props.age} 살이에야</div>
      </Fragment>
    );
  }
}

export default MyName;
