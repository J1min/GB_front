<template>
  <form style="text-align: center;">
    <h1 style="margin-top:100px;">GB 아이디로 로그인</h1>
    <div class="mb-3" style="margin-top:100px;">
      <label for="exampleInputEmail1" class="form-label me-3">ID</label>
      <input
        type="email"
        class="form"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        style="margin-left: 58px;"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label me-3"
        >Password</label
      >
      <input type="password" class="form" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check"></div>
    <button type="submit" class="btn btn-success thebutton" onclick="location.href='/my/plant1'">로그인하기</button>
  </form>
</template>
<script>
export default {};
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
