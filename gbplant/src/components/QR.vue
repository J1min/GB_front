<template>
  <div>
    <h1 class="mb-2">MacAdress를 인식해주세요.</h1>
    <div class="stream">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red;" class="frame"></div>
      </qr-stream>
    </div>
    <h2 class="result mt-5">MacAdress: {{ data }}</h2>
    <button
      type="button"
      class="btn btn-outline-danger mb-2"
      onclick="location.href='/start'"
    >
      일단넘어가기(개발자용)
    </button>
  </div>
</template>
<script>
import { QrStream } from "vue3-qr-reader";
import { defineComponent, reactive, toRefs } from "vue";
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
});
</script>
<style>
.stream {
  text-align: center;
  border: 5px solid red;
}
</style>
