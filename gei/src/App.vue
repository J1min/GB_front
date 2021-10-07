<template>
  <div class="default">
    <Header></Header>
    <div>
      <Contents></Contents>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Contents,
    Footer,
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
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.default {
  font-family: "NEXON Lv1 Gothic OTF";
}
</style>
