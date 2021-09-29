import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Counter/>
      </div>
    );
  }
}
Counter.defaultProps = {
  name: "안녕"
}
export default App;
