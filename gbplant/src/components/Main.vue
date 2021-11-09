<template>
  <div>
    <h1 class="mt-5 mb-5">
      <p>당신을 인증하기 위해</p>
      <p>먼저 로그인 해주세요!</p>
    </h1>

    <button
      type="button"
      class="btn btn-outline-success"
      onclick="location.href='/scan'"
      style="margin-right:20px;"
    >
      맥어드레스(기기) 인식 화면
    </button>
    <button
      type="button"
      class="btn btn-outline-danger"
      onclick="location.href='/login'"
      style="margin-right:20px;"
    >
      로그인
    </button>
    <button
      type="button"
      class="btn btn-outline-primary "
      onclick="location.href='/signup'"
    >
      회원가입
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
