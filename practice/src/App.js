import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";

class App extends Component {
  state = {
    id: "",
    pw: "",
  };
  showData = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <form>
          <input name="id" onChange={this.showData} value={this.state.id} />
          <input name="pw" onChange={this.showData} value={this.state.pw} />
          <div>
            {this.state.id}
            {this.state.pw}
          </div>
      </form>
    );
  }
}
export default App;
