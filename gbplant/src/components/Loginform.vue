<template>
  <div>
    <form style="text-align: center;">
      <h1 style="margin-top:100px;">GB 아이디로 로그인</h1>
      <div class="mb-3" style="margin-top:100px;">
        <label for="exampleInputEmail1" class="form-label me-3">ID</label>
        <input
          type="text"
          v-model="id"
          class="form"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          style="margin-left: 58px;"
        />
        <br />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label me-3"
          >Password</label
        >
        <input
          type="password"
          v-model="password"
          class="form"
          id="exampleInputPassword1"
        />
      </div>
      <button
        type="button"
        class="btn btn-outline-primary thebutton mb-2 mt-5"
        @click="signIn"
      >
        로그인
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "post-request",
  data() {
    return {
      id: null,
      password: null,
    };
  },
  methods: {
    signIn() {
      const info = {
        id: this.id,
        password: this.password,
      };
      axios.post("http://211.216.92.115:5000/GB/login", info).then((req) => {
        console.log(req.data.loginSuccess);
        if (req.data.loginSuccess === true) {
          location.href = "/my/plant1";
          this.id = null; // res.data.isRegister 로 확인
          this.password = null;
        } else {
          alert("아디비번이 틀렸씁니다");
        }
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
