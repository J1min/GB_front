<template>
  <header class="default">
    <div class="menu">
    <a class="menu" href="">{{ headers[0] }}</a>
    <a class="menu" href="">{{ headers[1] }}</a>
    <a class="menu" href="">{{ headers[2] }}</a>
    <a class="menu" href="">{{ headers[3] }}</a>
  </div>
  </header>
  
</template>
<script>
export default {
  data() {
    return {
      headers: ["메뉴1", "메뉴2", "메뉴3", "메뉴4"],
    };
  },
};
</script>
<style scoped>
.menu {
  background: darkslateblue;
  padding: 15px;
  color: white;
  border-radius: 5px;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

</style>
