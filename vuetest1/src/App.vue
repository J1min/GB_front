<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <QR />
  </div>
</template>

<script>
import QR from "/Users/mabee/Desktop/무제 폴더/vuetest1/src/components/QR";

export default {
  name: "App",
  components: {
    QR,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
