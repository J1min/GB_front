import React, { Component } from "react"; // eslint-disable-line no-unused-vars

import QrReader from "react-qr-reader";
class Test extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div class="App-header">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "50%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
export default Test;