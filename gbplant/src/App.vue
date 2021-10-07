<template>
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
</template>

<script>
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  components: {
    Header,
    Contents,
    Footer,
  },
};
</script>

<style>

@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.default {
  font-family: "NEXON Lv1 Gothic OTF";
  text-align: center;
}

img {
  display: block;
  margin: 0px auto;
}
</style>
