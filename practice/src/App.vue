<template>
  <div class="default">
    <div class="black" v-if="modalOpen == true">
      <div class="white">
        <h4>상세페이지임</h4>
        <p>상세내용임</p>
        <button @click="modalOpen = !modalOpen">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="i in menus" :key="i" href="#">{{ i }}</a>
    </div>

    <img alt="Vue logo" src="./assets/logo.png" />

    <div>
      <img
        src="./assets/room0.jpg"
        class="room"
        @click="modalOpen = !modalOpen"
      />
      <h4>{{ products[0] }}</h4>
      <p>백마넌</p>
      <button @click="increase">허위매물신고</button>
      <span> 신고수 : {{ singo[0] }} </span>
    </div>
    <div>
      <img
        src="./assets/room1.jpg"
        class="room"
        @click="modalOpen = !modalOpen"
      />
      <h4>{{ products[1] }}</h4>
      <p>백마넌</p>
      <button @click="increase1">허위매물신고</button>
      <span> 신고수 : {{ singo[1] }} </span>
    </div>
    <div>
      <img
        src="./assets/room2.jpg"
        class="room"
        @click="modalOpen = !modalOpen"
      />
      <h4>{{ products[2] }}</h4>
      <p>백마넌</p>
      <button @click="increase2">허위매물신고</button>
      <span> 신고수 : {{ singo[2] }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      modalOpen: false,
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      menus: ["Home", "Shop", "About"],
      singo: [0, 0, 0],
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
