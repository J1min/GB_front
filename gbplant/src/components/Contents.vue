<template>
  <div class="default">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://i.ibb.co/980dVHx/1hu1y.png"
            class="d-block w-100"
            alt="https://i.ibb.co/980dVHx/1hu1y.png"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/980dVHx/1hu1y.png"
            class="d-block w-100"
            alt="https://i.ibb.co/980dVHx/1hu1y.png"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/980dVHx/1hu1y.png"
            class="d-block w-100"
            alt="https://i.ibb.co/980dVHx/1hu1y.png"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default {
  name: "Contetns",
  data() {
    return {};
  },
};
</script>
<script href="/static/bootstrap.js"></script>
<style>
.room-img {
  width: 100%;
  height: 100%;
}
img {
  display: block;
  margin: 0px auto;
}
</style>
