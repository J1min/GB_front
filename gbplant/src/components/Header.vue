<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light default">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Disabled</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
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
