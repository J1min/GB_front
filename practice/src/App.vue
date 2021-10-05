<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>
      뱅드림걸파
    </h1>
    <HelloWorld msg="뱅드림 걸즈밴드파티 화이팅" />
  </div>
</template>

<script>
import HelloWorld from "./assets/components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
