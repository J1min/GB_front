import React, { Component } from "react";
import count from "./counter";

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={count.state.handleIncrease}>증가</button>
        <button onClick={count.state.handleDecrease}>감소</button>
      </div>
    );
  }
}

export default App;
