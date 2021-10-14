<template>
  <form style="text-align: center;">
    <h1 style="margin-top:100px;">GB 회원가입</h1>

    <div class="mb-3" style="margin-top:100px;">
      <label for="exampleInputEmail1" class="form-label me-3">아이디</label>
      <input
        type="email"
        class="form mb-3"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        style="margin-left: 18px;"
        v-model="message1"
        placeholder="입력하세요."
      />
      <p>message: {{ message1 }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label me-3">이름</label>
      <input
        v-model="message2"
        placeholder="입력하세요."
        type="text"
        class="form mb-3"
      />
      <p>message: {{ message2 }}</p>
    </div>
    <div class="mb-3">
      <label
        for="exampleInputPassword1"
        class="form-label me-3"
        aria-placeholder="닉네임을 입력하세요"
        >닉네임</label
      >
      <input
        v-model="message3"
        placeholder="입력하세요."
        type="text"
        class="form mb-3"
      />
      <p>message: {{ message3 }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label me-3"
        >비밀번호</label
      >
      <input
        v-model="message22"
        placeholder="입력하세요."
        type="password"
        class="form mb-3"
      />
      <p>message: {{ message22 }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label me-3 mb-5"
        >다시 입력</label
      >
      <input type="password" class="form" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check"></div>
    <button
      type="button"
      class="btn btn-outline-primary thebutton mb-2"
      onclick="location.href='/login'"
    >
      회원가입
    </button>
  </form>
  <!--
    <input v-model="message" placeholder="입력하세요.">
      <p>message: {{ message }}</p>
  -->
</template>
<script>
export default {};
// var bang = Vue.createApp({
//   data() {
//     return {
//       message: "",
//     };
//   },
// }).mount("#v-model-basic");
</script>
<style scope>
.form {
  width: 30% !important;
  text-align: center !important;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.thebutton {
  width: 30%;
  height: 30%;
}

.control {
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
