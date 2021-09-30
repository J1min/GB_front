import React, { Component } from "react";
import QrReader from "react-qr-reader";
import axios from "axios";

class Test extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
      console.log("일단 됨");
      axios.get({
        url: "http://192.168.10.37:8080/GB/add",
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
export default Test;
