<template>
  <div>
    <div id="text" style="margin-top:50px; margin-bottom:30px; ">
      <h3>MODEL 3 등록</h3>
    </div>
    <div id="stus"></div>
    <div id="obj1">
      <router-link to="/choose"
        ><img
        id="sang"
          src="https://ifh.cc/g/hxU5er.png"
          style="width: 170px; height:170px;  margin-right:20px;"
      /></router-link>
      <router-link to="/choose">
      <img
        id="sang"
          src="https://i.ibb.co/WyRnvSs/497393.png"
          style="width: 170px; height:170px; margin-left:20px;"
      /></router-link>
    </div>
    <br />
    <h1><b style="margin-right:180px;"> 씨앗 </b> <b> 모종 </b></h1>
    <div id="main">
      <h1 style="text-align: center; margin-top:50px;"><b>식물 상태를</b></h1>
      <h2 style="text-align: center"><b>선택해주세요!</b></h2>
    </div>
    <div id="sub"></div>
    <div
      id="bu"
      style="
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    ></div>
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
#sang {
  border-radius: 50%;
  border: 3px solid gray;
}
</style>
