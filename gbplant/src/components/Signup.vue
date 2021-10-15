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
        v-model="id"
        placeholder="입력하세요."
      />
      <p>Value: {{ id }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label me-3">이름</label>
      <input
        v-model="password"
        placeholder="입력하세요."
        type="text"
        class="form mb-3"
      />
      <p>Value: {{ password }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label me-3">이름</label>
      <input
        v-model="name"
        placeholder="입력하세요."
        type="text"
        class="form mb-3"
      />
      <p>Value: {{ name }}</p>
    </div>
    <button
      type="button"
      id="btn"
      class="btn btn-outline-primary thebutton mb-2"
      @click="signIn"
    >
      회원가입
    </button>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "post-request",
  data() {
    return {
      id: null,
      password: null,
      name: null,
    };
  },
  methods: {
    signIn() {
      const info = {
        id: this.id,
        password: this.password,
        name: this.name,
      };
      axios
        .post("http://211.216.92.115:5000/GB/register", info)
        .then((response) => {
          this.id = response.data.isLogin;
          this.password = response.data.isLogin;
          this.name = response.data.isLogin;
        });
    },
  },
};
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
