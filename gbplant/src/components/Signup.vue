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
        v-model="ID"
        placeholder="입력하세요."
      />
      <p>Value: {{ ID }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label me-3">이름</label>
      <input
        v-model="Name"
        placeholder="입력하세요."
        type="text"
        class="form mb-3"
      />
      <p>Value: {{ Name }}</p>
    </div>
    <div class="mb-3">
      <label
        for="exampleInputPassword1"
        class="form-label me-3"
        aria-placeholder="닉네임을 입력하세요"
        >닉네임</label
      >
      <input
        v-model="Nick"
        placeholder="입력하세요."
        type="text"
        class="form mb-3"
      />
      <p>Value: {{ Nick }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label me-3"
        >비밀번호</label
      >
      <input
        v-model="PW"
        placeholder="입력하세요."
        type="password"
        class="form mb-3"
      />
      <p>Value: {{ PW }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label me-3"
        >다시 입력</label
      >
      <input
        type="password"
        class="form"
        id="exampleInputPassword1"
        v-model="Check"
      />
      <p class="mb-5">Value: {{ Check }}</p>
    </div>

    <button
      type="button"
      class="btn btn-outline-primary thebutton mb-2"
      @click="getList()"
    >
      회원가입
    </button>
  </form>
</template>
<script language="javascript">
export default {
  data() {
    return {
      ID: "",
      PW: "",
      Name: "",
      Nick: "",
      Check: "",
    };
  },
  methods: {
    getList() {
      const usrid = { title: "Vue POST Request Example" };
      this.axios
        .post("http://211.216.92.115:5000/GB/register", { id: usrid })
        .then((res) => (this.id = res.data.ID));
      console.log("뱅드림 화이팅 !!");
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
