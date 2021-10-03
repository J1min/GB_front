import React, { Component } from "react";

export default class PhoneInfo extends Component {
  render() {
    const { name, phone, id } = this.props.infomation;
    return (
      <div>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        {/* <div>{id}</div> */}
      </div>
    );
  }
}
