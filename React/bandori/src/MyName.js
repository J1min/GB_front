import React, { Component, Fragment } from "react";

// class MyName extends Component {
//   render() {
//     return (
//       <div>
//         안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
//       </div>
//     );
//   }
// }
class MyName extends Component {
  render() {
    return (
      <Fragment>
        <div>
          안녕하세요 제 이름은 <b>{this.props.name}</b> 입니다
        </div>
        <div>
          저는 <b>{this.props.age}</b> 살이에여
        </div>
      </Fragment>
    );
  }
}

// const MyName = ({ name, age }) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {name}, {age}살 입니다
//     </div>
//   );
// };
MyName.defaultProps = {
  name: "기모띠띠띠",
  age: 32,
};
export default MyName;
