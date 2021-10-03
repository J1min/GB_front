import React, { Component, Fragment } from "react";
import Real from "./Real";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Fragment>
          <Real></Real>
        </Fragment>
      </div>
    );
  }
}
Real.defaultProps = {
  name: "",
};
export default App;
