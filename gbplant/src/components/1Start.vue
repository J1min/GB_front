<template>
  <div id="btn">
    <img src="https://ifh.cc/g/hrTQxT.png" />
  </div>
  <div id="text">
    <p>MODEL 3 등록</p>
  </div>
  <div id="stus"></div>
  <div id="obj1">
    <img width="170px" height="170px" onclick="location.href='2.html'" />
  </div>
  <div id="obj2">
    <img width="170px" height="170px" onclick="location.href='2.html'" />
  </div>
  <div id="main">
    <h1 style="text-align: center"><b>식물 상태</b></h1>
    <h2 style="text-align: center"><b>선택해주세요!</b></h2>
  </div>
  <div id="sub">
    <h3 style="text-align: center"><u>일반적인 상태에요!</u></h3>
  </div>
  <div
    id="bu"
    style="
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      "
  >
    <button class="btn">다음으로</button>
  </div>
</template>
<script>
export default {
  name: "Start",
};
</script>
<style>
h1 {
  font-size: 34px;
}
h2 {
  font-size: 34px;
}
h3 {
  font-size: 26px;
}
h4 {
  font-size: 26px;
}
button {
  background: none;
  border: 0;
  background-color: rgb(150, 223, 150);
  font-size: 18px;
  padding: 8px 80px;
  color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-align: center;
}
</style>
