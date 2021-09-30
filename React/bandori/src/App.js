import React, { Component, Fragment } from "react";
import Counter from "./Counter";
import Real from "./Real";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Real></Real>
      </div>
    );
  }
}
Real.defaultProps = {
  name: "안녕",
  age: "20",
};
export default App;
