import React, { Component, Fragment } from "react";

class Real extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  static getDerivedStateFromProps(nextProps, prevState) {

  }

  render() {
    return (
      <Fragment>
        <div>i</div>
      </Fragment>
    );
  }
}

export default Real;
