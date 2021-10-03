import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";

export default class App extends Component {
  id = 0;

  state = {
    information: [],
  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        name: data.name,
        phone: data.phone,
        id: this.id++,
      }),
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
