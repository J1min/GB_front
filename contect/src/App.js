import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";

export default class App extends Component {
  state = {
    information: [],
  };

  handleCreate = (data) => {
    this.setState({
      information: this.state.information.concat(data),
    });
  };
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}
