// eslint-disable
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "뱅드림 거병",
    "뱅드림 풀콤",
  ]);
  let title = "개발 Blog";
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목]; //...은 중괄호 벗기는것
    newArray[0] = "수정 사항 반영";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>{title}</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
      <button onClick={제목바꾸기}>버튼</button>
    </div>
  );
}

export default App;
