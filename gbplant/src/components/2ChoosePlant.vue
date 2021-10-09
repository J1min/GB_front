<template>
  <div id="text">
    <p style="text-align: center;"><b>식물 선택하기</b></p>
  </div>
  <img
    style="margin-left: -900px;"
    src="https://ifh.cc/g/hrTQxT.png"
    border="0"
    onclick="location.href='1.html'"
  />
  <div id="bang">
    <h1 style="text-align: center;"><b>MACHINE 3</b></h1>
  </div>

  <div id="sub">
    <h2 style="text-align: center;">model 3 모델에서 호환하는 식물들</h2>
  </div>
  <div class="wrap">
    <div>
      <img
        id="sang"
        src="@/assets/"
        width="100px"
        height="100px"
        onclick="location.href='plantbook9.html'"
      />
      <h2>상추</h2>
    </div>
    <div><h2>토마토</h2></div>
    <div><h2>비트</h2></div>
    <div><h2>당근</h2></div>
    <div><h2>쪽파</h2></div>
    <div><h2>대파</h2></div>
    <div><h2>상추</h2></div>
    <div><h2>배추</h2></div>
    <div><h2>강낭콩</h2></div>
  </div>
</template>
<script>
export default {};
</script>
<style>
p {
  font-size: 28px;
}
h1 {
  font-size: 45px;
}
h2 {
  font-size: 15px;
}
h3 {
  font-size: 20px;
  color: rgb(181, 181, 181);
}
main {
  width: 300px;
}
.wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
#bang {
  display: block;
}
</style>
