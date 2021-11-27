<template>
  <div>
    <div>
      <h2 style="text-align: center; margin-top:30px;"><b>식물 선택하기</b></h2>
    </div>
    <router-link to="/start">
      <img
        style="margin-left: -900px;"
        src="https://ifh.cc/g/hrTQxT.png"
        border="0"
      />
    </router-link>
    <div>
      <h1 style="text-align: center;"><b>MACHINE 3</b></h1>
    </div>
    <div>
      <h2 style="text-align: center;  margin-bottom:30px;">
        model 3 모델에서 호환하는 식물들
      </h2>
    </div>
    <div class="wrap">
      <div v-for="(i, a) in 식물들" :key="(i, a)">
        <router-link :to="식물들[a].path">
          <img
            id="sang"
            :src="식물들[a].image"
            style="width:100px; height:100px"
          />
        </router-link>
        <h2>{{ 식물들[a].name }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
import data from "./plantData";
export default {
  name: "choosePage",
  data() {
    return {
      식물들: data,
    };
  },
};
</script>
<style>
.wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
#sang {
  border-radius: 50%;
  border: 3px solid rgb(179, 179, 179);
}
h2 {
  margin-top: 15px;
}
</style>
