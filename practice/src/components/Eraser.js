import React, { Component, useState } from "react";



export default class Eraser extends Component {
  goBack = () => {};

  showMassage = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    
    return (
      <form>
        <div>
          <input
            type="text"
            name="message"
            placeholder="아무 값이나 입력해보세여"
            onChange={this.showMassage}
          />
        </div>
        <div>
          <input
            type="text"
            name="comment"
            placeholder="아무 댓글이나 입력해보세여"
            onChange={this.showMassage}
          />
        </div>
        {this.state.message}
        <br />
        {this.state.comment}
        <br />
        <button onClick={this.goBack}>마법버튼</button>
      </form>
    );
  }
}
