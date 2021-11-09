<template>
  <div>
    
    <h1 class="mb-2">기기의 MacAdress(바코드)를 인식해주세요.</h1>
    <div class="stream">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red" class="frame"></div>
      </qr-stream>
    </div>
    <h2 class="result mt-5">해당 기기의 MacAdress: {{ data }}</h2>
    <button
      type="button"
      class="btn btn-outline-danger mb-2"
      @click="signIn"
      v-if="data"
    >
      다음
    </button>
  </div>
</template>
<script>
import { QrStream } from "vue3-qr-reader";
import { defineComponent, reactive, toRefs } from "vue";
import axios from "axios";

export default defineComponent({
  name: "QrStreamExample",
  components: {
    QrStream,
  },
  setup() {
    const state = reactive({
      data: null,
    });
    function onDecode(data) {
      state.data = data;
    }
    return {
      ...toRefs(state),
      onDecode,
    };
  },
  methods: {
    signIn() {
      const info = {
        data: this.data,
      };
      axios.post("http://211.216.92.115:5000/GB/login", info).then(() => {
        location.href = "/start";
      });
    },
  },
});
</script>
<style>
.stream {
  text-align: center;
  border: 6px solid red;
}
</style>
