import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link, Switch, Prompt } from "react-router-dom";
import Counter from "./Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Prompt when={true} message="페이지를 떠나시겠습니까?" />
        <div className="App-header">
          <Counter age="20" />
        </div>
      </BrowserRouter>
    );
  }
}
Counter.defaultProps = {
  name: "안녕",
  age: "20",
};
export default App;
