<template>
  <div>
    <h1 class="default mt-5">
      에러 남 ㅅㄱ
    </h1>
    <h2>
      이상한 주소 접근 ㄴㄴ
    </h2>
    <div class="mt-5">
      <router-link to="/my/plant1">
        <button type="button" class="btn btn-outline-danger">
          내 식물 관리
        </button>
      </router-link>
      <router-link to="/">
        <button
          type="button"
          class="btn btn-outline-primary"
          style="margin-left:20px;"
        >
          메인화면
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
