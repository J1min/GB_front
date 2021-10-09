<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
export default {
  components: {
    Header,
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
