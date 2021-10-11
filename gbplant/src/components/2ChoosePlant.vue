<template>
  <div>
    <h2 style="text-align: center; margin-top:30px;"><b>식물 선택하기</b></h2>
  </div>
  <router-link to="/start">
    <img
      style="margin-left: -900px;"
      src="https://ifh.cc/g/hrTQxT.png"
      border="0"
    />
  </router-link>
  <div>
    <h1 style="text-align: center;"><b>MACHINE 3</b></h1>
  </div>

  <div>
    <h2 style="text-align: center;  margin-bottom:30px;">
      model 3 모델에서 호환하는 식물들
    </h2>
  </div>
  <div class="wrap">
    <div>
      <router-link to="/choose/info1">
        <img
          id="sang"
          src="https://i.ibb.co/yBzB8YY/image.png"
          style="width:100px; height:100px"
        />
      </router-link>
      <h2>상추</h2>
    </div>
    <div>
      <router-link to="/choose/info2">
        <img
          id="sang"
          src="https://i.ibb.co/PjBwXxx/image.png"
          style="width:100px; height:100px"
        />
      </router-link>
      <h2>토마토</h2>
    </div>
    <div>
      <router-link to="/choose/info3">
        <img
          id="sang"
          src="https://i.ibb.co/G0yv4JX/image.png"
          style="width:100px; height:100px"
      /></router-link>
      <h2>비트</h2>
    </div>
    <div>
      <router-link to="/choose/info4">
        <img
          id="sang"
          src="https://i.ibb.co/zn44VRH/image.png"
          style="width:100px; height:100px"
      /></router-link>
      <h2>당근</h2>
    </div>
    <div>
      <router-link to="/choose/info5">
        <img
          id="sang"
          src="https://i.ibb.co/Sx3r5gN/image.png"
          style="width:100px; height:100px"
      /></router-link>
      <h2>쪽파</h2>
    </div>
    <div>
      <router-link to="/choose/info6">
        <img
          id="sang"
          src="https://i.ibb.co/TgMKr4k/4139319.png"
          style="width:100px; height:100px"
      /></router-link>
      <h2>대파</h2>
    </div>
    <div>
      <router-link to="/choose/info7">
        <img
          id="sang"
          src="https://i.ibb.co/yBzB8YY/image.png"
          style="width:100px; height:100px"
      /></router-link>
      <h2>상추</h2>
    </div>
    <div>
      <router-link to="/choose/info8">
        <img
          id="sang"
          src="https://i.ibb.co/BVSzrbr/image.png"
          style="width:100px; height:100px"
      /></router-link>
      <h2>배추</h2>
    </div>
    <div>
      <router-link to="/choose/info9">
        <img
          id="sang"
          src="https://i.ibb.co/1XtQFF5/5501202.png"
          style="width:100px; height:100px"
      /></router-link>
      <h2>강낭콩</h2>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
#sang {
  border-radius: 50%;
  border: 3px solid rgb(179, 179, 179);
}
h2 {
  margin-top: 15px;
}
</style>
