<template>
  <div class="default">
    <div class="black" v-if="modalOpen == true">
      <div class="white">
        <h4>상세페이지임</h4>
        <p>상세내용임</p>
        <button @click="modalOpen = !modalOpen">닫기</button>
      </div>
    </div>
    <header>
      <div class="menu">
        <a v-for="i in menus" :key="i" href="#">{{ i }}</a>
      </div>
    </header>

    <div v-for="j in room" :key="j">
      <img :src="j.image" class="room" @click="modalOpen = !modalOpen" />
      <h4>{{ j.title }}</h4>
      <p>{{ j.price }}원</p>
    </div>

    <footer style="margin-top: 20px; margin-bottom: 10px; ">
      © 뱅드림실행위원회
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import post from "./components/post";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld"; //메인 컴포넌트 호출
import List from "@/components/board/List"; //게시판 리스트 컴포넌트 호출
export default {
  name: "App",
  data() {
    return {
      modalOpen: false,
      menus: ["Home", "Shop", "About"],
      singo: [0, 0, 0, 0, 0, 0],
      room: post,
    };
  },
  methods: {
    increase() {
      this.singo[0]++;
    },
    increase1() {
      this.singo[1]++;
    },
    increase2() {
      this.singo[2]++;
    },
    increase3() {
      this.singo[3]++;
    },
    increase4() {
      this.singo[4]++;
    },
    increase5() {
      this.singo[5]++;
    },
  },
  components: {},
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
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.default {
  font-family: "NEXON Lv1 Gothic OTF";
}
.black {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room {
  width: 100%;
  margin-top: 40px;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  color: white;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
#red {
  font-size: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
