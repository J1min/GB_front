import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    id: "",
    pw: "",
  };

  showId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  showPw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <input type="text" name="id" onChange={this.showId} />
        </div>
        <div>
          <input type="text" name="pw" onChange={this.showPw} />
        </div>
        <div>{this.state.id}</div>
        <div>{this.state.pw}</div>
      </form>
    );
  }
}
export default App;
