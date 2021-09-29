import React, { Component, Fragment, Prompt } from "react";
import Counter from "./Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Prompt when={true} message="페이지를 떠나시겠습니까?" />
        <div className="App-header">
          <Counter name="사용자" />
        </div>
      </Fragment>
    );
  }
}
Counter.defaultProps = {
  name: "안녕",
};
export default App;
